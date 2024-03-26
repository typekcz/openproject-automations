import type { PriorityModel, ProjectModel, RelationModel, StatusModel, TypeModel, UserModel, WorkPackageModel } from "./openproject-api";

type WebhookBody = WebhookProjectBody | WebhookWorkPackageBody;

interface WebhookProjectBody {
	action: "project:created" | "project:updated",
	project: ProjectModel
}

interface WebhookWorkPackageBody {
	action: "work_package:created" | "work_package:updated",
	project: ProjectModel,
	work_package: WorkPackageWithEmbedded
}

interface WorkPackageWithEmbedded extends WorkPackageModel {
	embedded?: {
		type?: TypeModel,
		priority?: PriorityModel,
		status?: StatusModel,
		author?: UserModel
	}
}