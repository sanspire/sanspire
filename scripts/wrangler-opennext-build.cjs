/**
 * Run before Wrangler packages the Worker (see `wrangler.json` `build.command`).
 * Ensures `npx wrangler deploy` and CI that only run Wrangler (no `npm run build`)
 * still produce `.open-next/` first.
 *
 * `WRANGLER_COMMAND` (https://developers.cloudflare.com/workers/wrangler/custom-builds/):
 * - `dev`: skip if `.open-next/worker.js` already exists to avoid 30–60s on every `wrangler dev` refresh.
 * - `deploy` / `versions upload` / `types`: always build.
 */
const { existsSync } = require("fs");
const { execSync } = require("child_process");

const wranglerCmd = process.env.WRANGLER_COMMAND;

if (wranglerCmd === "dev" && existsSync(".open-next/worker.js")) {
  process.stdout.write(
    "[opennext] Skipping pre-bundle build (use `npm run build` to refresh .open-next)\n",
  );
  process.exit(0);
}

process.stdout.write("[opennext] Running opennextjs-cloudflare build before Wrangler…\n");
execSync("npx opennextjs-cloudflare build", {
  stdio: "inherit",
  env: process.env,
  cwd: process.cwd(),
});
