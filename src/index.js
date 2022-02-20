const fs = require("fs");
const getTheme = require("./theme");
const harmonizedDark = require("./harmonizedDark");
const harmonizedDarkHc = require("./harmonizedDarkHc");
const harmonizedLight = require("./harmonizedLight");
const harmonizedLightHc = require("./harmonizedLightHc");

const solarizedDarkUrl =
  "https://api.github.com/repos/microsoft/vscode/contents/extensions/theme-solarized-dark/themes/solarized-dark-color-theme.json";
const solarizedLightUrl =
  "https://api.github.com/repos/microsoft/vscode/contents/extensions/theme-solarized-light/themes/solarized-light-color-theme.json";
const commonAccentColors = {
  "statusBar.debuggingBackground": "#859900",
  "statusBar.foreground": "#ffffff",
  "statusBar.debuggingForeground": "#ffffff",
  "statusBar.noFolderForeground": "#ffffff",
  "statusBarItem.remoteForeground": "#ffffff",
};

// Light
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
        // default "open in remote window" button background to status bar background
        "statusBarItem.remoteBackground":
          solarizedLight.colors["statusBar.background"],
        "statusBarItem.remoteForeground":
          solarizedLight.colors["statusBar.foreground"],
      },
    };
    const theme_ = {
      ...theme,
      colors: {
        ...theme.colors,
        ...commonAccentColors,
        "statusBar.background": "#268BD2",
        "statusBarItem.remoteBackground": "#268BD2",
        "statusBar.noFolderBackground": "#93a1a1",
      },
    };
    fs.writeFileSync("./themes/light.json", JSON.stringify(theme, null, 2));
    fs.writeFileSync("./themes/light_.json", JSON.stringify(theme_, null, 2));
  })
  .catch((e) => console.error("Oops", e))
  .finally(() => console.log("Harmonized light themes written."));

// Light hc
getTheme({
  name: "Harmonized light (hc)",
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
        ...harmonizedLightHc.colors,
        "statusBarItem.remoteBackground":
          solarizedLight.colors["statusBar.background"],
        "statusBarItem.remoteForeground":
          solarizedLight.colors["statusBar.foreground"],
      },
    };
    const theme_ = {
      ...theme,
      colors: {
        ...theme.colors,
        ...commonAccentColors,
        "statusBar.background": "#268BD2",
        "statusBarItem.remoteBackground": "#268BD2",
        "statusBar.noFolderBackground": "#93a1a1",
      },
    };
    fs.writeFileSync("./themes/light-hc.json", JSON.stringify(theme, null, 2));
    fs.writeFileSync(
      "./themes/light-hc_.json",
      JSON.stringify(theme_, null, 2)
    );
  })
  .catch((e) => console.error("Oops", e))
  .finally(() => console.log("Harmonized light (hc) themes written."));

// Dark
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
        "statusBarItem.remoteBackground":
          solarizedDark.colors["statusBar.background"],
        "statusBarItem.remoteForeground":
          solarizedDark.colors["statusBar.foreground"],
      },
    };
    const theme_ = {
      ...theme,
      colors: {
        ...theme.colors,
        ...commonAccentColors,
        "statusBar.background": "#2aa198",
        "statusBarItem.remoteBackground": "#2aa198",
        "statusBar.noFolderBackground": "#586e75",
      },
    };
    fs.writeFileSync("./themes/dark.json", JSON.stringify(theme, null, 2));
    fs.writeFileSync("./themes/dark_.json", JSON.stringify(theme_, null, 2));
  })
  .catch((e) => console.error("Oops", e))
  .finally(() => console.log("Harmonized dark themes written."));

// Dark hc
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
        ...harmonizedDarkHc.colors,
        "statusBarItem.remoteBackground":
          solarizedDark.colors["statusBar.background"],
        "statusBarItem.remoteForeground":
          solarizedDark.colors["statusBar.foreground"],
      },
    };
    const theme_ = {
      ...theme,
      colors: {
        ...theme.colors,
        ...commonAccentColors,
        "statusBar.background": "#2aa198",
        "statusBarItem.remoteBackground": "#2aa198",
        "statusBar.noFolderBackground": "#586e75",
      },
    };
    fs.writeFileSync("./themes/dark-hc.json", JSON.stringify(theme, null, 2));
    fs.writeFileSync("./themes/dark-hc_.json", JSON.stringify(theme_, null, 2));
  })
  .catch((e) => console.error("Oops", e))
  .finally(() => console.log("Harmonized dark (hc) themes written."));
