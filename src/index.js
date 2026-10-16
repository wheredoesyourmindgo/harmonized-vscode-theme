import fs from "node:fs";
import getTheme from "./theme.js";
import harmonizedDark from "./harmonizedDark.js";
import harmonizedDarkHc from "./harmonizedDarkHc.js";
import harmonizedLight from "./harmonizedLight.js";
import harmonizedLightHc from "./harmonizedLightHc.js";

const commonAccentColors = {
  "statusBar.debuggingBackground": "#859900",
  "statusBar.foreground": "#ffffff",
  "statusBar.debuggingForeground": "#ffffff",
  "statusBar.noFolderForeground": "#ffffff",
  "statusBarItem.remoteForeground": "#ffffff",
};

const variants = [
  {
    name: "Harmonized light",
    file: "light",
    solarized: "light",
    harmonized: [harmonizedLight],
    accent: { background: "#268BD2", noFolderBackground: "#93a1a1" },
  },
  {
    name: "Harmonized light (hc)",
    file: "light-hc",
    solarized: "light",
    harmonized: [harmonizedLight, harmonizedLightHc],
    accent: { background: "#268BD2", noFolderBackground: "#93a1a1" },
  },
  {
    name: "Harmonized dark",
    file: "dark",
    solarized: "dark",
    harmonized: [harmonizedDark],
    accent: { background: "#2aa198", noFolderBackground: "#586e75" },
  },
  {
    name: "Harmonized dark (hc)",
    file: "dark-hc",
    solarized: "dark",
    harmonized: [harmonizedDark, harmonizedDarkHc],
    accent: { background: "#2aa198", noFolderBackground: "#586e75" },
  },
];

for (const { name, file, solarized: variant, harmonized, accent } of variants) {
  const solarized = getTheme({ name, variant });
  // Only the base palette (light or dark) adds token colors; the hc palettes only change colors
  const theme = {
    ...solarized,
    tokenColors: [...solarized.tokenColors, ...harmonized[0].tokenColors],
    colors: {
      ...solarized.colors,
      ...Object.assign({}, ...harmonized.map((palette) => palette.colors)),
      // default "open in remote window" button background to status bar background
      "statusBarItem.remoteBackground": solarized.colors["statusBar.background"],
      "statusBarItem.remoteForeground": solarized.colors["statusBar.foreground"],
    },
  };
  // Accented variant ("_"): colored status bar
  const accented = {
    ...theme,
    name: `${name} _`,
    colors: {
      ...theme.colors,
      ...commonAccentColors,
      "statusBar.background": accent.background,
      "statusBarItem.remoteBackground": accent.background,
      "statusBar.noFolderBackground": accent.noFolderBackground,
    },
  };
  fs.writeFileSync(`./themes/${file}.json`, JSON.stringify(theme, null, 2));
  fs.writeFileSync(`./themes/${file}_.json`, JSON.stringify(accented, null, 2));
  console.log(`${name} themes written.`);
}
