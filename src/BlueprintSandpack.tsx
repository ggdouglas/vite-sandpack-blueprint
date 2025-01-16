import { Sandpack } from "@codesandbox/sandpack-react";
import {
  ComponentDependencies,
  constructAppString,
  constructIndexString,
  getDependencies,
} from "./utils";

export interface BlueprintSandpackProps {
  children: string;
  dependencies: ComponentDependencies;
  title?: string;
}

function BlueprintSandpack({
  children,
  dependencies: componentDependencies,
  title,
}: BlueprintSandpackProps) {
  const index = constructIndexString(componentDependencies);
  const app = constructAppString(children, componentDependencies, title);
  return (
    <Sandpack
      template="react-ts"
      theme="auto"
      customSetup={{ dependencies: getDependencies(componentDependencies) }}
      files={{
        "/App.tsx": { code: app, active: true },
        "/index.tsx": { code: index, hidden: true },
      }}
    />
  );
}
export default BlueprintSandpack;
