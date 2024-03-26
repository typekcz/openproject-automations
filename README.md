# OpenProject Automations

This project uses OpenProject's API and webhooks to perform automatic actions on projects or work packages.

This project uses [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Install & run

To install dependencies:

```bash
bun install
```

Configure via environment variables:

- **OPENPROJECT_URL** - URL of your OpenProject instance
- **API_KEY** - access tokey, generated in your profile settings
- **BUN_PORT** or **PORT** or **NODE_PORT** - listening port for the webhook (defaults to 3000)

Alternatively you can place `config.json` in `custom/` directory.

To run:

```bash
bun run index.ts
```

## Usage

You have to configure webhook in OpenProject's administration to port 3000 of this project or what you configured.

Access token's user must be member of the project where you want automations to run.

In the project's description, you must configure which automations can run and specify parameters.

Example in markdown:

```markdown
[🤖](openproject-automations:wp-auto-start?t=1,4,7&s=7,8,9,10,11,12)
```

It's just markdown link, where text doesn't matter, but URL specifies name of the automation file (wp-auto-start) and query part specifies parameters that are passed to the automation.

## Automations

You can put custom automation scripts to the custom/automations directory.

### wp-auto-start

Sets work package's start date to current one, if none was set already and type and status matches configured ids.

Parameters:
 - **t** - comma separated list of work package type ids
 - **s** - comma separated list of work package status ids

### wp-auto-end

Sets work package's end date to current one, if none was set already and type and status matches configured ids.

Parameters:
 - **t** - comma separated list of work package type ids
 - **s** - comma separated list of work package status ids

