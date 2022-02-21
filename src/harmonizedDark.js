const syntax = require("./syntax");

module.exports = {
  colors: {
    // "editor.foreground": "#93a1a1",
    "editor.foreground": "#bbbbbb",
    "list.hoverForeground": "#BBBBBB",
    "quickInput.foreground": "#839496",
    "activityBar.foreground": "#BBBBBB",
    "sideBar.foreground": "#839496",
    "editorCursor.foreground": "#DC322FCC",
    "editorLineNumber.foreground": "#586e75",
    "editorLineNumber.activeForeground": "#93a1a1",
    "terminal.foreground": "#839496",
    "badge.foreground": "#fdf6e3",
    "editorIndentGuide.background": "#93A1A133",
    "editorIndentGuide.activeBackground": "#C3E1E140",
    "activityBar.foreground": "#93a1a1",
    "activityBar.activeBorder": "#268bd2",
    "badge.background": "#268bd2CC",
    "dropdown.border": "#268bd2CC",
    focusBorder: "#268bd2CC",
    "inputOption.activeBorder": "#268bd2CC",
    "button.background": "#268bd2CC",
    // don't highlight remote repo in alternate (blue) color
    // "statusBarItem.remoteBackground": "#268bd2CC",
    "pickerGroup.border": "#268bd2CC",
    "pickerGroup.foreground": "#268bd2CC",
    "selection.background": "#268bd259",
    "editor.selectionBackground": "#B5890040",
    "editor.selectionHighlightBackground": "#586e7540",
    "editor.findMatchBackground": "#CB4B1640",
    "editor.findMatchHighlightBackground": "#85990040",
    "titleBar.activeBackground": "#00212b",
    "editorGroupHeader.tabsBackground": "#004052", // Solarized default
    "editorHoverWidget.background": "#004052", // Solarized default
    "editorCursor.background": "#eee8d5", // base2
  },
  tokenColors: [
    /* General styling */
    {
      name: "SOURCE_AND_TEXT",
      scope: ["source", "text"],
      settings: {
        foreground: "#93a1a1",
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
        foreground: "#657b83", // base00
        fontStyle: "",
      },
    },
    {
      name: "COMMENT_BLOCK_VAR",
      scope: ["comment.block.documentation variable.other"],
      settings: {
        foreground: "#657b83",
        fontStyle: "bold italic",
        fontWeight: 500,
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
        fontWeight: 500,
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
        foreground: "#93a1a1",
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
        // "punctuation.section.embedded.begin",
        // "punctuation.section.embedded.end",
        // "punctuation.separator.continuation",
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
        foreground: "#93A1A1",
      },
    },
    {
      scope: ["variable.other.object.property", "variable.other.property"],
      settings: {
        foreground: "#93A1A1",
      },
    },
    {
      scope: ["support.type.primitive"],
      settings: {
        foreground: "#839496",
      },
    },
    {
      scope: ["meta.import variable.other"],
      settings: {
        foreground: "#93a1a1",
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
        foreground: "#839496",
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
