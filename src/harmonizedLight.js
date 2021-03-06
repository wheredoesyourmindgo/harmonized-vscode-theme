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
    "statusBarItem.remoteBackground": "#b58900CC",
    "pickerGroup.border": "#b58900CC",
    "pickerGroup.foreground": "#b58900CC",
    "selection.background": "#b5890059",
    "editor.selectionBackground": "#B5890026",
    "editor.selectionHighlightBackground": "#93a1a126",
    "editor.findMatchBackground": "#CB4B1626",
    "editor.findMatchHighlightBackground": "#85990026",
    "titleBar.activeBackground": "#eee8d5",
    "editorGroupHeader.tabsBackground": "#d3cbb7", // be consistent w/ dark theme
    "editorHoverWidget.background":  "#d3cbb7", // be consistent w/ dark theme
    "editorCursor.background": "#eee8d5" // base2
  },
  tokenColors: [    /* General styling */
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
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end",
        "punctuation.separator.continuation",
      ],
      settings: {
        foreground: "#DC322F",
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
    {
      name: "ITALIC",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "entity.other",
        "variable.language",
        "support.type.vendored",
        "support.constant.vendored",
        "markup.quote",
        "markup.italic",
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
        "keyword.control.clojure",
        "source.clojure meta.symbol.dynamic",
        "keyword.other.this.cs",
        "keyword.other.base.cs",
        "variable.other.member.c",
        "support.type.core.rust",
        "variable.other.object.property",
        "variable.other.property",
        "source.r meta.function.r keyword.control.r",
        "comment.line.roxygen.r keyword",
        "comment.line.roxygen.r variable.parameter.r",
        "keyword.control.inheritance.coffee",
        "comment.block.documentation.phpdoc.php keyword",
        "keyword.other.array.phpdoc.php",
        "comment.block.javadoc.java keyword",
        "comment.block.javadoc.java variable.parameter.java",
        "keyword.operator.documentation.powershell",
        "variable.other.table.property.lua",
        "variable.parameter.function.language.special",
        "comment.block.documentation.scala keyword",
        "comment.block.documentation.scala variable.parameter",
        "support.function.builtin.go",
        "constant.other.symbol.hashkey.ruby",
        "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
        "constant.other.symbol.ruby",
        "constant.other.table-name",
        "constant.other.placeholder",
        "variable.other.field",
        "keyword.function.go",
        "entity.alias.import.go",
        "source.swift keyword.other.declaration-specifier",
        "support.variable.swift",
        "keyword.other.capture-specifier",
        "text.tex support.function.emph",
        "constant.other.math",
        "support.function.textit",
        "entity.name.footnote",
        "entity.name.function.directive.graphql",
        "source.graphql support.type.enum",
        "source.ocaml entity.name.filename",
        "source.reason entity.name.filename",
        "abstract.definition.fsharp keyword",
        "abstract.definition.fsharp entity",
        "function.anonymous keyword",
        "entity.name.record.field.accessor.elm",
        "support.type.primitive",
        "support.type.builtin",
        "keyword.type.cs",
        "source.python support.type.python",
        "source.swift support.type",
        "entity.name.type.kotlin",
        "support.type.julia",
        "variable.other.member",
        "keyword.other.import",
        "keyword.package",
        "keyword.import",
        "source.wsd keyword.control.diagram",
        "keyword.language.gherkin.feature.step",
        "source.apex keyword.type",
        "sharing.modifier",
        "meta.preprocessor.pragma.nim",
        "entity.name.scope-resolution.function.call",
        "support.class.builtin",
        "source.tf meta.keyword.string",
        "source.tf meta.keyword.number",
        "source.scala entity.name.class",
        "meta.import keyword.control",
        "keyword.control.export",
        "meta.tag.attributes entity.other.attribute-name",
        "text.html entity.other.attribute-name",
        "meta.attribute-selector entity.other.attribute-name",
      ],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "BOLD",
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.other.template",
        "keyword.other.substitution",
        "constant.other.color",
        "punctuation.accessor",
        "entity.name.section",
        "markup.bold",
        "markup.bold string",
        "markdown.heading",
        "markup.inline.raw punctuation.definition.raw",
        "markup.heading",
        "punctuation.bracket.angle",
        "keyword.other.new",
        "punctuation.separator.question-mark.cs",
        "source.go keyword.operator",
        "punctuation.separator.namespace",
        "constant.other.symbol.ruby punctuation.definition.constant.ruby",
        "variable.parameter",
        "support.function.builtin.rust",
        "entity.name.variable.parameter",
        "punctuation.separator.hash.cs",
        "constant.other.symbol.ruby punctuation.definition.constant.ruby",
        "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
        "meta.function.parameters variable.other",
        "entity.name.type.annotation.kotlin",
        "parameter.variable.function",
        "markup punctuation.definition",
        "punctuation.section.directive",
        "punctuation.definition.preprocessor",
        "source.ruby punctuation.definition.variable",
        "punctuation.separator.method",
        "support.function.textbf",
        "source.graphql support.type.builtin",
        "source.ocaml variable.interpolation string",
        "entity.name.function.definition.special.constructor",
        "entity.name.function.definition.special.member.destructor.",
        "meta.function.parameters variable punctuation.definition.variable.php",
        "source.wsd keyword.other.activity",
        "keyword.control.class.ruby",
        "keyword.control.def.ruby",
        "storage",
      ],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "BOLD-ITALIC",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
        "text.html punctuation.section.embedded",
        "variable.other.c",
        "entity.name.lifetime.rust",
        "source.rust meta.attribute.rust",
        "meta.attribute.id entity.other.attribute-name",
        "keyword.other.fn.rust",
        "source.ocaml punctuation.definition.tag emphasis",
        "source.tf entity.name",
        // "comment.block.documentation variable.other",
        "source.hlsl storage.type.basic",
        "storage.modifier.lifetime.rust",
        "storage.type.core.rust",
        "source.vala storage.type.generic",
        "storage.type.scala",
        "storage.modifier",
        "storage.type.modifier",
        "storage.type.built-in",
        "storage.type.primitive",
        "source.go storage.type",
        "storage.type.php",
        "storage.type.function.kotlin",
        "source.nim storage.type.concrete",
        "storage.type.integral",
        // "comment.block.documentation storage.type.class",
      ],
      settings: {
        fontStyle: "bold italic",
      },
    },
    {
      name: "NORMAL",
      scope: [
        "keyword.begin.tag.ejs",
        "source.python meta.function.decorator.python support.type.python",
        "source.cs keyword.other",
        "keyword.other.var.cs",
        "source.go keyword",
        "variable.parameter.r",
        "variable.parameter.handlebars",
        "keyword.operator.other.powershell",
        "source.css variable.parameter",
        "string.interpolated variable.parameter",
        "source.apacheconf keyword",
        "keyword.other.julia",
        "source.objc keyword.other.property.attribute",
        "source.sql keyword.other",
        "keyword.other.using.vala",
        "keyword.operator.function.infix",
        "keyword.control.directive",
        "keyword.other.rust",
        "keyword.other.declaration-specifier.swift",
        "entity.name.function.swift",
        "keyword.control.function-end.lua",
        "keyword.control.class",
        "keyword.control.def",
        "punctuation.definition.variable",
        "entity.name.section.latex",
        "source.ocaml keyword markup.underline",
        "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
        "source.reason entity.other.attribute-name constant.language constant.numeric",
        "keyword.format.specifier.fsharp",
        "entity.name.section.fsharp",
        "binding.fsharp keyword",
        "binding.fsharp keyword.symbol",
        "record.fsharp keyword",
        "keyword.symbol.fsharp",
        "entity.name.section.fsharp keyword",
        "namespace.open.fsharp keyword",
        "namespace.open.fsharp entity",
        "source.cpp keyword.other",
        "source.c keyword.other",
        "keyword.other.unit",
        "keyword.control.default",
        "meta.import.haskell keyword",
        "keyword.declaration.dart",
        "source.wsd keyword.other",
        "keyword.other.skinparam",
        "source.css keyword.control",
        "source.css keyword.operator",
        "keyword.language.gherkin.feature.scenario",
        "keyword.control.cucumber.table",
        "source.toml entity.other.attribute-name",
        "source.toml keyword",
        "keyword.other.nim",
        "source.nim keyword.other.common.function",
        "source.nim keyword.other",
        "source.scala keyword.declaration",
        "source.scala entity.name.class.declaration",
        "storage.modifier.static.rust",
        "storage.modifier.import",
        "storage.modifier.package",
        "meta.class.identifier storage.modifier",
        "source.lua storage.type.function",
        "storage.modifier.using.vala",
        "storage.modifier.array.bracket",
        "entity.other.attribute-name.pseudo-class",
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
        "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
      ],
      settings: {
        fontStyle: "",
      },
    },
  ],
};
