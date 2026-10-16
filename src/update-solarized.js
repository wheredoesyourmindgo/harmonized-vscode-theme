/*
Snapshot VS Code's built-in Solarized themes into src/solarized/, which the build reads from.
Pinning a copy keeps builds reproducible; run `npm run update-solarized [-- ref]` to pull in upstream
changes on purpose (ref defaults to main), then review the diff of src/solarized/ and themes/.
*/
import fs from "node:fs";

const ref = process.argv[2] ?? "main";
const repo = "microsoft/vscode";
// Optional: GitHub limits anonymous API requests, so use a token when one is available
// (e.g. GITHUB_TOKEN=$(gh auth token) npm run update-solarized)
const headers = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {};

const commit = await (
  await fetch(`https://api.github.com/repos/${repo}/commits/${ref}`, { headers })
).json();
if (!commit.sha) {
  throw new Error(`Couldn't resolve ${repo}@${ref}: ${commit.message}`);
}

for (const variant of ["light", "dark"]) {
  const path = `extensions/theme-solarized-${variant}/themes/solarized-${variant}-color-theme.json`;
  const response = await fetch(
    `https://raw.githubusercontent.com/${repo}/${commit.sha}/${path}`
  );
  if (!response.ok) {
    throw new Error(`Couldn't download ${path}: ${response.status}`);
  }
  fs.writeFileSync(`./src/solarized/solarized-${variant}.json`, await response.text());
}

fs.writeFileSync(
  "./src/solarized/source.json",
  JSON.stringify(
    { repo, ref, commit: commit.sha, date: commit.commit.committer.date },
    null,
    2
  ) + "\n"
);
console.log(`Solarized themes updated from ${repo}@${commit.sha.slice(0, 10)}.`);
