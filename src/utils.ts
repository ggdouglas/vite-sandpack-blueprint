const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

type BlueprintPackage = [
  "@blueprintjs/core",
  "@blueprintjs/datetime",
  "@blueprintjs/datetime2",
  "@blueprintjs/icons",
  "@blueprintjs/select",
  "@blueprintjs/table"
][number];

export const dependencies: Record<BlueprintPackage, string> = {
  "@blueprintjs/core": "5.16.4",
  "@blueprintjs/datetime": "5.3.21",
  "@blueprintjs/datetime2": "2.3.21",
  "@blueprintjs/icons": "5.17.1",
  "@blueprintjs/select": "5.3.9",
  "@blueprintjs/table": "5.3.3",
};

const cssDependencyMap: Record<BlueprintPackage, string[]> = {
  "@blueprintjs/core": ["@blueprintjs/core/lib/css/blueprint.css"],
  "@blueprintjs/datetime": [
    "@blueprintjs/datetime/lib/css/blueprint-datetime.css",
  ],
  "@blueprintjs/datetime2": [
    "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css",
    "@blueprintjs/datetime/lib/css/blueprint-datetime.css",
    "@blueprintjs/select/lib/css/blueprint-select.css",
  ],
  "@blueprintjs/icons": ["@blueprintjs/icons/lib/css/blueprint-icons.css"],
  "@blueprintjs/select": ["@blueprintjs/select/lib/css/blueprint-select.css"],
  "@blueprintjs/table": ["@blueprintjs/table/lib/css/table.css"],
};

export type ComponentDependencies = Partial<Record<BlueprintPackage, string[]>>;

export const getDependencies = (
  componentDependencies: ComponentDependencies
): Record<BlueprintPackage, string> => {
  const packages = getKeys(componentDependencies);
  return packages.reduce((acc, pkg) => {
    acc[pkg] = dependencies[pkg];
    return acc;
  }, {} as Record<BlueprintPackage, string>);
};

export const constructStyles = (
  componentDependencies: ComponentDependencies
) => {
  const packages = getKeys(componentDependencies);
  const cssFiles = packages.map((pkg) => cssDependencyMap[pkg]).flat();
  const uniqueCssFiles = Array.from(new Set(cssFiles));
  return uniqueCssFiles.map((css) => `import "${css}";`).join("\n");
};

export const constructComponentImports = (
  componentDependencies: ComponentDependencies
) => {
  const packages = getKeys(componentDependencies);
  return packages
    .map((pkg) => {
      const components = componentDependencies[pkg] ?? [];
      if (components.length === 0) {
        return `import "${pkg}";`;
      }
      return `import { ${components.sort().join(", ")} } from "${pkg}";`;
    })
    .join("\n");
};

export function constructAppString(
  code: string,
  componentDependencies: ComponentDependencies
) {
  const imports = constructComponentImports(componentDependencies);
  const styles = constructStyles(componentDependencies);
  return `${imports}\n${styles}\n\nexport default function App() {\n  return (\n    ${code}\n  );\n}`;
}
