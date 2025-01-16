import { Sandpack } from "@codesandbox/sandpack-react";
import {
  ComponentDependencies,
  constructAppString,
  getDependencies,
} from "./utils";
export interface BlueprintSandpackProps {
  children: string;
  dependencies: ComponentDependencies;
}

function BlueprintSandpack({
  children,
  dependencies: componentDependencies,
}: BlueprintSandpackProps) {
  const app = constructAppString(children, componentDependencies);
  return (
    <Sandpack
      template="react-ts"
      theme="auto"
      customSetup={{ dependencies: getDependencies(componentDependencies) }}
      files={{ "/App.tsx": app }}
    />
  );
}
export default BlueprintSandpack;
