<p align="center">
   <img width="500" src="https://raw.githubusercontent.com/wheredoesyourmindgo/harmonized-vscode-theme/master/images/logo.png" />
</p>

Harmonized extends the distributed versions of the Solarized Themes from the VSCode repo. Harmonized doesn't differ from the stock Solarized themes too drastically but merely provides predictability and some consistency between the two themes.

### Font Styling Hints

The Solarized Themes make use of **bold** font weights and in effect Harmonized does also. Your mileage will vary with bold fonts, and while bold fonts can be disabled there is alternative option. [Custom CSS And JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) can be used to target the weight used by bold fonts. If your font supports a medium or semi-bold variant you can specify the following in `vscodecustom.css`

```css
[class^="mtk"].mtkb {
  font-weight: 500;
}
```

Optionally, you could specify an entirely different font family. For example, suppose you are using *Fira Code Retina* in VSCode set via `"editor.fontFamily": "FiraCode-Retina"`. You could swap in Fira Code Medium wherever bold fonts are used in `vscodecustom.css` by using

```css
[class^="mtk"].mtkb {
  font-family: "Fira Code";
  font-weight: 500;
}
```

Additionally, to suppress any alert messages during VSCode's startup after enabling Custom CSS And JS Loader consider installing [Fix VSCode Checksums](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums)

### Attribution

Icon template provided via Freepik <a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by studiogstock - www.freepik.com</a>
