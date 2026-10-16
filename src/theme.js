import fs from "node:fs";
import JSON5 from "json5";

// Reads a pinned copy of a VS Code Solarized theme (see update-solarized.js). The files are JSONC.
function getTheme({ name, variant }) {
  const source = fs.readFileSync(`./src/solarized/solarized-${variant}.json`, "utf8");
  return {
    ...JSON5.parse(source),
    name,
  };
}

export default getTheme;
