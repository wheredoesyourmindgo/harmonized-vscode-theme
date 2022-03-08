const syntax = require("./syntax");

module.exports = {
  colors: {
    // "editor.foreground": "#586e75",
    "editor.foreground": "#333333",
    "list.hoverForeground": "#333333",
    "quickInput.foreground": "#657b83",
    "activityBar.foreground": "#333333",
    "sideBar.foreground": "#657b83",
    "editorCursor.foreground": "#DC322FCC",
    "editorLineNumber.foreground": "#93a1a1",
    "editorLineNumber.activeForeground": "#586e75",
    "terminal.foreground": "#657b83",
    "badge.foreground": "#fdf6e3",
    "editorIndentGuide.background": "#586E7533",
    "editorIndentGuide.activeBackground": "#081E2540",
    "activityBar.foreground": "#586e75",
    "activityBar.activeBorder": "#b58900",
    "badge.background": "#b58900CC",
    "dropdown.border": "#b58900CC",
    focusBorder: "#b58900CC",
    "inputOption.activeBorder": "#b58900CC",
    "button.background": "#b58900CC",
    // don't highlight remote repo in alternate (yellow) color
    // "statusBarItem.remoteBackground": "#b58900CC",
    "pickerGroup.border": "#b58900CC",
    "pickerGroup.foreground": "#b58900CC",
    "selection.background": "#b5890059",
    "editor.selectionBackground": "#B5890026",
    "editor.selectionHighlightBackground": "#93a1a126",
    "editor.findMatchBackground": "#CB4B1626",
    "editor.findMatchHighlightBackground": "#85990026",
    "titleBar.activeBackground": "#eee8d5",
    "editorGroupHeader.tabsBackground": "#d3cbb7", // be consistent w/ dark theme
    "editorHoverWidget.background": "#d3cbb7", // be consistent w/ dark theme
    "editorCursor.background": "#eee8d5", // base2
    // need to be explicit about the following since they are not getting set in solarized
    "editorInlayHint.background": "#b5890033",
    "editorInlayHint.foreground": "#333333cc",
    "editorInlayHint.parameterBackground": "#b5890033",
    "editorInlayHint.parameterForeground": "#333333cc",
    "editorInlayHint.typeBackground": "#b5890033",
    "editorInlayHint.typeForeground": "#333333cc",
  },
  tokenColors: [
    /* General styling */
    {
      name: "SOURCE_AND_TEXT",
      scope: ["source", "text"],
      settings: {
        foreground: "#586e75",
        fontStyle: "",
      },
    },
    /* TSDoc/JSDoc styling */
    {
      name: "COMMENT_BLOCK_EMPHASIS",
      scope: [
        "comment.block.documentation storage.type.class",
        "comment.block.documentation punctuation.definition.block.tag",
        "comment.block.documentation punctuation.definition.inline.tag",
        "comment.block.documentation variable.other",
      ],
      settings: {
        foreground: "#839496", // base0
        fontStyle: "",
      },
    },
    {
      name: "COMMENT_BLOCK_VAR",
      scope: ["comment.block.documentation variable.other"],
      settings: {
        foreground: "#839496",
        fontStyle: "bold italic",
        // fontWeight: 500,
      },
    },
    /* */
    // Use violet to highlight character escaping
    {
      name: "ESCAPE-HIGHLIGHT",
      scope: "string constant.character.escape.backslash",
      settings: {
        foreground: "#6c71c4",
        fontStyle: "bold",
        // fontWeight: 500,
      },
    },
    // Use orange color for CSS ID Selector.
    {
      name: "CSS-ID-SELECTOR",
      scope: [
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.id punctuation.definition.entity",
      ],
      settings: {
        foreground: "#cb4b16",
      },
    },
    {
      name: "STORAGE",
      scope: "storage",
      settings: {
        foreground: "#586e75",
      },
    },
    {
      name: "PSEUDO-SELECTORS",
      scope: [
        "entity.other.attribute-name.pseudo-class",
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
        "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
      ],
      settings: {
        foreground: "#6c71c4",
      },
    },
    {
      name: "ARROW-FUNC",
      scope: ["storage.type.function.arrow"],
      settings: {
        foreground: "#CB4B16",
      },
    },
    {
      name: "USE-SOLARIZED-RED",
      scope: [
        "string.regexp",
        //   "punctuation.section.embedded.begin",
        //   "punctuation.section.embedded.end",
        //   "punctuation.separator.continuation",
      ],
      settings: {
        foreground: "#DC322F",
      },
    },
    {
      name: "USE-SOLARIZED-ORANGE",
      scope: [
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end",
        "punctuation.separator.continuation",
      ],
      settings: {
        foreground: "#CB4B16",
      },
    },
    {
      name: "INHERITED-CLASS",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#6c71c4",
      },
    },
    {
      scope: [
        "source.js meta.definition.variable variable.other",
        "source.jsx meta.definition.variable variable.other",
        "source.ts meta.definition.variable variable.other",
        "source.tsx meta.definition.variable variable.other",
        "source.java meta.definition.variable variable.other",
      ],
      settings: {
        foreground: "#268BD2",
      },
    },
    {
      name: "CANCEL-VAR-COLOR",
      scope: [
        "source.js variable.other",
        "source.jsx variable.other",
        "source.ts variable.other",
        "source.tsx variable.other",
        "source.java variable.other",
      ],
      settings: {
        foreground: "#586e75",
      },
    },
    {
      scope: ["variable.other.object.property", "variable.other.property"],
      settings: {
        foreground: "#586e75",
      },
    },
    {
      scope: ["support.type.primitive"],
      settings: {
        foreground: "#657b83",
      },
    },
    {
      scope: ["meta.import variable.other"],
      settings: {
        foreground: "#586e75",
      },
    },
    {
      name: "Support.construct",
      scope: ["support.function.construct", "keyword.other.new"],
      settings: {
        foreground: "#CB4B16",
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "entity.name.namespace",
        "entity.name.scope-resolution",
      ],
      settings: {
        foreground: "#CB4B16",
      },
    },
    {
      name: "Type",
      scope: ["entity.name.type"],
      settings: {
        foreground: "#657B83",
      },
    },
    {
      name: "Tag attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#b58900",
      },
    },
    syntax.italic,
    syntax.bold,
    syntax.boldItalic,
    syntax.normal,
  ],
};
