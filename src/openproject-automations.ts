import type { Server } from "bun";
import AutomationsManager from "./automations-manager";
import { PriorityModelFromJSONTyped, ProjectModelFromJSONTyped, StatusModelFromJSONTyped, TypeModelFromJSONTyped, UserModelFromJSONTyped, WorkPackageModelFromJSONTyped } from "./openproject-api";
import { isProjectMember } from "./openproject-api-gw";
import type { WebhookBody } from "./webhook-body";
import Config from "./config";
import log from "./logger";

export default class OpenProjectAutomations {
	protected server?: Server;
	protected automationsManager: AutomationsManager = new AutomationsManager();

	public async start(){
		await this.automationsManager.registerAutomationsFromDir("./src/automations");
		await this.automationsManager.registerAutomationsFromDir("./custom/automations");
		for(let dir of Config.automationsDirs)
			await this.automationsManager.registerAutomationsFromDir(dir);
		this.startWebServer();
	}

	public startWebServer() {
		this.server = Bun.serve({
			fetch: this.onWebhookRequest.bind(this)
		});
		log.info?.(`Started web server on port ${this.server.port}.`);
	}

	protected async onWebhookRequest(request: Request): Promise<Response> {
		try {
			if(request.body){
				let json = await Bun.readableStreamToJSON(request.body);
				let data: WebhookBody | null = null;
				switch(json.action){
					case "project:created":
					case "project:updated":
						data = {
							action: json.action,
							project: ProjectModelFromJSONTyped(json.project, false)
						};
						break;
					case "work_package:created":
					case "work_package:updated":
						data = {
							action: json.action,
							project: ProjectModelFromJSONTyped(json.work_package._embedded.project, false),
							work_package: {
								...WorkPackageModelFromJSONTyped(json.work_package, false),
								embedded: {
									type: TypeModelFromJSONTyped(json.work_package._embedded.type, false),
									author: UserModelFromJSONTyped(json.work_package._embedded.author, false),
									priority: PriorityModelFromJSONTyped(json.work_package._embedded.priority, false),
									status: StatusModelFromJSONTyped(json.work_package._embedded.status, false)
								}
							}
						};
						break;
					default:
						log.debug?.(`Ignored webhook action "${json.action}".`);
				}
				if(data){
					log.debug?.("Received webhook request.", {action: data.action, d: data.project.name});
					this.runAutomations(data);
				}
			}
		} catch(e){
			log.error?.("Error while processing webhook request.", e);
		}
		return new Response();
	}

	public async runAutomations(webhook: WebhookBody): Promise<void> {
		try {
			if(webhook.project.id && await isProjectMember(webhook.project.id))
				this.automationsManager.run(webhook);
		} catch(e){
			log.error?.("Failed to run automations.", e);
		}
	}
}
