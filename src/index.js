const fs = require("fs");
const getTheme = require("./theme");
const harmonizedDark = require("./harmonizedDark");
const harmonizedLight = require("./harmonizedLight");

const solarizedDarkUrl =
  "https://api.github.com/repos/microsoft/vscode/contents/extensions/theme-solarized-dark/themes/solarized-dark-color-theme.json";
const solarizedLightUrl =
  "https://api.github.com/repos/microsoft/vscode/contents/extensions/theme-solarized-light/themes/solarized-light-color-theme.json";
const commonAccentColors = {
  "statusBar.debuggingBackground": "#859900",
  "statusBar.noFolderBackground": "#b58900",
  "statusBar.foreground": "#ffffff",
  "statusBar.debuggingForeground": "#ffffff",
  "statusBar.noFolderForeground": "#ffffff",
};

getTheme({
  name: "Harmonized light",
  url: solarizedLightUrl,
})
  .then((solarizedLight) => {
    const theme = {
      ...solarizedLight,
      tokenColors: [
        ...solarizedLight.tokenColors,
        ...harmonizedLight.tokenColors,
      ],
      colors: {
        ...solarizedLight.colors,
        ...harmonizedLight.colors,
      },
    };
    const theme_ = {
      ...theme,
      colors: {
        ...theme.colors,
        ...commonAccentColors,
        "statusBar.background": "#268BD2"
      },
    };
    fs.writeFileSync("./themes/light.json", JSON.stringify(theme, null, 2));
    fs.writeFileSync("./themes/light_.json", JSON.stringify(theme_, null, 2));
  })
  .catch((e) => console.error("Oops", e))
  .finally(() => console.log("Harmonized light themes written."));

getTheme({
  name: "Harmonized dark",
  url: solarizedDarkUrl,
})
  .then((solarizedDark) => {
    const theme = {
      ...solarizedDark,
      tokenColors: [
        ...solarizedDark.tokenColors,
        ...harmonizedDark.tokenColors,
      ],
      colors: {
        ...solarizedDark.colors,
        ...harmonizedDark.colors,
      },
    };
    const theme_ = {
      ...theme,
      colors: {
        ...theme.colors,
        ...commonAccentColors,
        "statusBar.background": "#2aa198"
      },
    };
    fs.writeFileSync("./themes/dark.json", JSON.stringify(theme, null, 2));
    fs.writeFileSync("./themes/dark_.json", JSON.stringify(theme_, null, 2));
  })
  .catch((e) => console.error("Oops", e))
  .finally(() => console.log("Harmonized dark themes written."));
