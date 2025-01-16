import { describe, expect, it } from "vitest";
import {
  constructAppString,
  constructComponentImports,
  constructStyles,
  dependencies,
  getDependencies,
} from "./utils";
import { outdent } from "outdent";

describe("constructStyles", () => {
  it("should return styles for a single package", () => {
    const componentDependencies = {
      "@blueprintjs/core": [],
    };
    expect(constructStyles(componentDependencies)).toEqual(
      `import "@blueprintjs/core/lib/css/blueprint.css";`
    );
  });

  it("should return css files for multiple packages", () => {
    const componentDependencies = {
      "@blueprintjs/core": [],
      "@blueprintjs/icons": [],
    };
    expect(constructStyles(componentDependencies)).toEqual(outdent`
      import "@blueprintjs/core/lib/css/blueprint.css";
      import "@blueprintjs/icons/lib/css/blueprint-icons.css";`);
  });

  it("should return css files for packages with multiple dependencies", () => {
    const componentDependencies = {
      "@blueprintjs/datetime2": [],
    };
    expect(constructStyles(componentDependencies)).toEqual(outdent`
      import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";
      import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
      import "@blueprintjs/select/lib/css/blueprint-select.css";`);
  });

  it("should de-duplicate css files", () => {
    const componentDependencies = {
      "@blueprintjs/datetime2": [],
      "@blueprintjs/select": [],
    };
    expect(constructStyles(componentDependencies)).toEqual(outdent`
      import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";
      import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
      import "@blueprintjs/select/lib/css/blueprint-select.css";`);
  });
});

describe("constructComponentImports", () => {
  it("should return import for a single package and component", () => {
    const componentDependencies = {
      "@blueprintjs/core": ["Button"],
    };
    const imports = constructComponentImports(componentDependencies);
    expect(imports).toEqual(`import { Button } from "@blueprintjs/core";`);
  });

  it("should return imports for multiple packages and components", () => {
    const componentDependencies = {
      "@blueprintjs/core": ["Button"],
      "@blueprintjs/icons": ["Download"],
    };
    expect(constructComponentImports(componentDependencies)).toEqual(outdent`
      import { Button } from "@blueprintjs/core";
      import { Download } from "@blueprintjs/icons";`);
  });

  it("should return imports for packages with multiple components", () => {
    const componentDependencies = {
      "@blueprintjs/core": ["Button", "Icon"],
    };
    expect(constructComponentImports(componentDependencies)).toEqual(
      `import { Button, Icon } from "@blueprintjs/core";`
    );
  });

  it("should sort components within an import alphabetically", () => {
    const componentDependencies = {
      "@blueprintjs/core": ["Icon", "Button"],
    };
    expect(constructComponentImports(componentDependencies)).toEqual(
      `import { Button, Icon } from "@blueprintjs/core";`
    );
  });

  it("should return import for a package with no components", () => {
    const componentDependencies = {
      "@blueprintjs/core": [],
    };
    expect(constructComponentImports(componentDependencies)).toEqual(
      `import "@blueprintjs/core";`
    );
  });
});

describe("constructAppString", () => {
  it("should ", () => {
    const code = `<Button intent="primary" text="Hello, Blueprint!" />`;
    const componentDependencies = {
      "@blueprintjs/core": ["Icon", "Button"],
      "@blueprintjs/icons": ["Download"],
    };
    const app = constructAppString(code, componentDependencies);
    console.log(app);
  });
});

describe("getDependencies", () => {
  it("should get dependencies for a single package", () => {
    const componentDependencies = { "@blueprintjs/core": [] };
    expect(getDependencies(componentDependencies)).toEqual({
      "@blueprintjs/core": dependencies["@blueprintjs/core"],
    });
  });

  it("should get dependencies for multiple packages", () => {
    const componentDependencies = {
      "@blueprintjs/core": [],
      "@blueprintjs/icons": [],
    };
    expect(getDependencies(componentDependencies)).toEqual({
      "@blueprintjs/core": dependencies["@blueprintjs/core"],
      "@blueprintjs/icons": dependencies["@blueprintjs/icons"],
    });
  });
});
