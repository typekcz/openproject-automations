import type { ConfigurationParameters } from "./openproject-api";

let openApiConfig: ConfigurationParameters = {
	username: "apikey"
};
let automationsDirs: string[] = [];

let configFile = Bun.file("../custom/config.json");
if(await configFile.exists()){
	let configJson = await configFile.json();

	if(configJson.openApi)
		openApiConfig = { ...configJson.openApi };

	if(configJson.automationsDirs && configJson.automationsDirs instanceof Array)
		automationsDirs = configJson.automationsDirs as string[];
}

if(process.env["OPENPROJECT_URL"])
	openApiConfig.basePath = process.env["OPENPROJECT_URL"];

if(process.env["API_KEY"])
	openApiConfig.password = process.env["API_KEY"];

// Remove trailing slashes from URL.
if(openApiConfig.basePath)
	openApiConfig.basePath = openApiConfig.basePath.replace(/\/+$/, "");

const Config = {
	openApi: openApiConfig,
	automationsDirs
}

export default Config;