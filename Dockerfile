FROM oven/bun:1
WORKDIR /usr/src/app

COPY bun.lockb .
COPY package.json .

RUN bun install --frozen-lockfile --production

COPY . .

RUN mkdir -p custom/automations

USER bun
ENTRYPOINT [ "bun", "run", "index.ts" ]