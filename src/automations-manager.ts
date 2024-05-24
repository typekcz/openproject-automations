import AbstractAutomation from "./abstract-automation";
import log from "./logger";
import openprojectApi from "./openproject-api-gw";
import { escapeRegExp } from "./utils";
import type { WebhookBody } from "./webhook-body";
import { readdir } from "node:fs/promises";
import * as Path from "node:path";

export default class AutomationsManager {
	protected automations: Map<string, AbstractAutomation> = new Map();
	protected tagsSearchRegExp: RegExp;

	constructor(protected id: string = "openproject-automations"){
		this.tagsSearchRegExp = new RegExp(`\\[[^\\[]+\\]\\((${escapeRegExp(id)}:.*)\\)`, "gm");
	}

	public async registerAutomationsFromDir(dir: string){
		try {
			let files = await readdir(dir);

			for(let file of files){
				this.registerAutomationFile(dir, file);
			}
		} catch(e){
			log.warn?.(`Failed to read directory "${dir}" to register automations.`, e);
		}
	}

	public async registerAutomationFile(dir: string, file: string){
		try {
			let path = Path.parse(file);
			if(![".ts", ".js"].includes(path.ext))
				return;

			let filePath = Path.join(dir, file);
			let automation = await import(`${Path.resolve(filePath)}`);
			if(automation.default instanceof Function){
				let automationInstance = new automation.default();
				if(automationInstance instanceof AbstractAutomation) {
					this.registerAutomation(path.name, automationInstance);
					log.info?.(`Registered automation "${path.name}" from "${filePath}".`);
				} else
					throw new Error(`Module's default export class doesn't implement AbstractAutomation.`);
			} else {
				throw new Error(`Module's default export is not a constructor.`);
			}
		} catch(e){
			log.error?.(`Error loading automation "${file}" in "${dir}".`, e);
		}
	}

	public registerAutomation(id: string, automation: AbstractAutomation) {
		this.automations.set(id, automation);
	}

	public async run(webhookBody: WebhookBody){
		let tagMatch;
		while((tagMatch = this.tagsSearchRegExp.exec(webhookBody.project.description?.raw ?? "")) !== null) {
			let tag = new URL(tagMatch[1]);
			let params: URLSearchParams = tag.searchParams as URLSearchParams;
			let automationId = tag.pathname;
			let automation = this.automations.get(automationId);
			if(!automation){
				log.debug?.(`Non-existent automation tag "${automationId}" found on project "${webhookBody.project.name}".`);
				return;
			}

			let wpId = "";
			switch(webhookBody.action){
				case "work_package:created":
				case "work_package:updated": {
					wpId = `#${webhookBody.work_package.id}`;
					// To prevent issues with updating wp (because wp from webhook was missing parent), fetch wp from API
					let wp = await openprojectApi.WorkPackagesApi.viewWorkPackage({id: webhookBody.work_package.id});
					webhookBody.work_package = {
						...wp,
						embedded: webhookBody.work_package.embedded
					};
				}
			}
			log.info?.(`Running "${automationId}" with params "${params.toString()}" on "${webhookBody.action}" for "${webhookBody.project.name}${wpId}"`);

			try {
				let ret = null;
				switch(webhookBody.action){
					case "project:created":
						ret = automation.onProjectCreated(params, webhookBody.project);
						break;
					case "project:updated":
						ret = automation.onProjectUpdated(params, webhookBody.project);
						break;
					case "work_package:created":
						ret = automation.onWorkPackageCreated(params, webhookBody.project, webhookBody.work_package);
						break;
					case "work_package:updated":
						ret = automation.onWorkPackageUpdated(params, webhookBody.project, webhookBody.work_package);
						break;
				}
				if(ret instanceof Promise)
					await ret;
			} catch(e){
				log.error?.(e);
			}
		}
	}
}