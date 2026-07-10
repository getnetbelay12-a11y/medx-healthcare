import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await rm("dist/client", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");

const serverOnlyEntries = new Set([".openai", "client", "dev", "server"]);

for (const entry of await readdir("dist")) {
  if (serverOnlyEntries.has(entry)) {
    continue;
  }

  await cp(`dist/${entry}`, `dist/client/${entry}`, { recursive: true });
}

await writeFile(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    if (!url.pathname.includes(".")) {
      const fallbackPath = url.pathname === "/" ? "/index.html" : \`\${url.pathname}.html\`;
      const fallbackUrl = new URL(fallbackPath, url);
      response = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    }

    return response;
  },
};
`,
);
