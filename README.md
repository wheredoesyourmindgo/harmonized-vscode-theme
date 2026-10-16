# Harmonized

[![CI](https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/actions/workflows/ci.yml)

Solarized light and dark themes for VS Code, refined to be more readable and consistent with each other.

Harmonized starts from the Solarized themes that ship with VS Code and keeps their palette, but fixes what makes them feel uneven: the light and dark themes treat the same things differently, and the editor text is low in contrast. Each theme also comes in a high-contrast version and an accented version.

<p align="center">
  <img src="https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/raw/main/images/light.png" alt="Harmonized light" width="700" />
</p>

<p align="center">
  <img src="https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/raw/main/images/dark.png" alt="Harmonized dark" width="700" />
</p>

## What's different from VS Code's Solarized

- **Light and dark match.** Both themes override the same UI colors and add the same syntax rules, so switching between them changes the palette, not the behavior.
- **More readable text.** Editor text is darker in light (`#333333`) and brighter in dark (`#bbbbbb`) than stock Solarized.
- **Consistent accents.** Focus borders, buttons, and badges use Solarized yellow in light and blue in dark. Both themes use a red cursor and a warm yellow selection.
- **Consistent font styles.** Comments, modifiers, and similar tokens are italic, and a few kinds of tokens are bold, the same way in both themes.
- **More syntax colors where they help**, such as regular expressions, escape sequences, CSS pseudo-selectors, inherited classes, arrow functions, and variable definitions.
- **Kept current with VS Code.** Colors that VS Code's own Solarized themes add for newer parts of the UI are pulled in with each update.

## Themes

| Theme | Description |
| --- | --- |
| **Harmonized light** / **Harmonized dark** | The main themes. |
| **Harmonized light (hc)** / **Harmonized dark (hc)** | Higher contrast, with lighter or darker backgrounds. Useful on dim displays or in bright rooms. |
| **Harmonized light \_** / **Harmonized dark \_** | Accented: a colored status bar (blue in light, cyan in dark). |
| **Harmonized light (hc) \_** / **Harmonized dark (hc) \_** | High contrast and accented. |

<details>
<summary><strong>High-contrast and accented previews</strong></summary>

<p align="center">
  <img src="https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/raw/main/images/light_hc.png" alt="Harmonized light (hc)" width="700" />
</p>

<p align="center">
  <img src="https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/raw/main/images/dark_hc.png" alt="Harmonized dark (hc)" width="700" />
</p>

<p align="center">
  <img src="https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/raw/main/images/light_accent.png" alt="Harmonized light _" width="700" />
</p>

<p align="center">
  <img src="https://github.com/wheredoesyourmindgo/harmonized-vscode-theme/raw/main/images/dark_accent.png" alt="Harmonized dark _" width="700" />
</p>

</details>

## Recommended settings

To switch between light and dark with your OS appearance:

```jsonc
"window.autoDetectColorScheme": true,
"workbench.preferredLightColorTheme": "Harmonized light",
"workbench.preferredDarkColorTheme": "Harmonized dark"
```

## Building

The themes are generated from copies of VS Code's Solarized themes in `src/solarized/`, pinned to the VS Code commit in `src/solarized/source.json`.

```sh
npm install
npm run build              # regenerate themes/ and check them
npm run update-solarized   # pull the latest Solarized from VS Code, then rebuild and review the diff
```

## Credits

- [Solarized](https://ethanschoonover.com/solarized/) by Ethan Schoonover.
- The [Solarized Light](https://github.com/microsoft/vscode/tree/main/extensions/theme-solarized-light) and [Solarized Dark](https://github.com/microsoft/vscode/tree/main/extensions/theme-solarized-dark) themes that ship with VS Code, which Harmonized builds on.

## License

[MIT](LICENSE)
