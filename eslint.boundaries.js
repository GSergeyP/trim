import boundaries from "eslint-plugin-boundaries";

const elementTypesError =
  "Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})";
const entryPointError =
  "Модуль (${file.type}) должен импортироваться через public API. Прямой импорт из ${dependency.source} запрещен";
const eslintBoundariesConfig = {
  plugins: {
    boundaries,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },

    "boundaries/elements": [
      {
        type: "app",
        pattern: "./src/app",
      },
      {
        type: "pages",
        pattern: "./src/pages",
      },
      {
        type: "widgets",
        pattern: "./src/widgets/*",
      },
      {
        type: "features",
        pattern: "./src/features/*",
      },
      {
        type: "entities",
        pattern: "./src/entities/*",
      },
      {
        type: "shared",
        pattern: "./src/shared/",
      },
    ],
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "boundaries/element-types": [
      2,
      {
        default: "allow",
        rules: [
          {
            from: ["shared"],
            disallow: ["app", "pages", "widgets", "features", "entities"],
            message: elementTypesError,
          },
          {
            from: ["entities"],
            disallow: ["app", "pages", "widgets", "features"],
            message: elementTypesError,
          },
          {
            from: ["features"],
            disallow: ["app", "pages", "widgets"],
            message: elementTypesError,
          },
          {
            from: ["widgets"],
            disallow: ["app", "pages"],
            message: elementTypesError,
          },
          {
            from: ["pages"],
            disallow: ["app"],
            message: elementTypesError,
          },
        ],
      },
    ],
    "boundaries/entry-point": [
      2,
      {
        default: "disallow",
        message: entryPointError,
        rules: [
          {
            target: ["shared"],
            allow: "**",
          },
          {
            target: ["app", "pages", "widgets", "features", "entities"],
            allow: "index.(ts|tsx)",
          },
        ],
      },
    ],
  },
};

export { eslintBoundariesConfig };
