/*
Sanity checks on the generated themes, run after every build: each theme listed in package.json
exists, its name matches its label, and every color is a valid hex value.
*/
import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const hex = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const problems = [];

for (const { label, path } of pkg.contributes.themes) {
  if (!fs.existsSync(path)) {
    problems.push(`${label}: ${path} doesn't exist`);
    continue;
  }
  const theme = JSON.parse(fs.readFileSync(path, "utf8"));
  if (theme.name !== label) {
    problems.push(`${path}: name "${theme.name}" doesn't match label "${label}"`);
  }
  const colors = [
    ...Object.entries(theme.colors),
    ...theme.tokenColors.flatMap((token, i) =>
      ["foreground", "background"]
        .filter((key) => token.settings?.[key] !== undefined)
        .map((key) => [`tokenColors[${i}].${key}`, token.settings[key]])
    ),
  ];
  for (const [key, value] of colors) {
    if (!hex.test(value)) {
      problems.push(`${path}: ${key} is not a hex color: ${JSON.stringify(value)}`);
    }
  }
}

if (problems.length > 0) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`Checked ${pkg.contributes.themes.length} themes.`);
