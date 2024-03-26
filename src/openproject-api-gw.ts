import Config from "./config";
import { Configuration } from "./openproject-api";
import * as apis from "./openproject-api/apis";

let config = new Configuration(Config.openApi);

// Type for instantiated APIs
type InstantiatedApis<T> = {
	[K in keyof T]: T[K] extends new () => infer R ? R : never;
};

// Instantiate each API with common configuration
const openprojectApi = Object.fromEntries(
	Object.entries(apis)
		.map(entry => [entry[0], new entry[1](config)])
) as InstantiatedApis<typeof apis>;

export default openprojectApi;

// Helper functions using the APIs
export async function getCurrentUserId(){
	let user = await openprojectApi.UsersApi.viewUser({id: "me"});
	return user.id;
}

export async function isProjectMember(projectId: number): Promise<boolean> {
	let filters = [
		{
			"project": {
				"operator": "=",
				"values": [projectId]
			}
		}, {
			"principal": {
				"operator": "=",
				"values": [await getCurrentUserId()]
			}
		}
	];
	let memberships = await openprojectApi.MembershipsApi.listMemberships({filters: JSON.stringify(filters)});
	return memberships.count > 0;
}