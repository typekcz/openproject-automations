import type { ProjectModel } from "./openproject-api";
import type { WorkPackageWithEmbedded } from "./webhook-body";

export default abstract class AbstractAutomation {
	public onProjectCreated(_params: URLSearchParams, _project: ProjectModel): void | Promise<void> {}
	public onProjectUpdated(_params: URLSearchParams, _project: ProjectModel): void | Promise<void> {}

	public onWorkPackageCreated(_params: URLSearchParams, _project: ProjectModel, _workPackage: WorkPackageWithEmbedded): void | Promise<void> {}
	public onWorkPackageUpdated(_params: URLSearchParams, _project: ProjectModel, _workPackage: WorkPackageWithEmbedded): void | Promise<void> {}
}