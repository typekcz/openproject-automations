import AbstractAutomation from "@src/abstract-automation";
import type { ProjectModel } from "@src/openproject-api";
import openprojectApi from "@src/openproject-api-gw";
import type { WorkPackageWithEmbedded } from "@src/webhook-body";

export default class AutoEndAutomation extends AbstractAutomation {
	public async onWorkPackageUpdated(params: URLSearchParams, _project: ProjectModel, workPackage: WorkPackageWithEmbedded) {
		if(workPackage.dueDate)
			return;
	
		let enabledStates = params.get("s")?.split(",") ?? [];
		let enabledTypes = params.get("t")?.split(",") ?? [];

		if(!enabledTypes.includes(`${workPackage.embedded?.type?.id}`))
			return;

		if(!enabledStates.includes(`${workPackage.embedded?.status?.id}`))
			return;

		workPackage.dueDate = new Date().toISOString().substring(0, 10);
		await openprojectApi.WorkPackagesApi.updateWorkPackage({
			id: workPackage.id,
			notify: false,
			workPackageModel: workPackage
		});
	}
}