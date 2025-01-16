import { Sandpack } from "@codesandbox/sandpack-react";

const app = `import { Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

export default function App() {
  return (
    <Button intent="primary" text="Hello, Blueprint!" />
  );
}`;

const dependencies = {
  "@blueprintjs/core": "5.16.4",
};

function BlueprintSandpack() {
  return (
    <Sandpack
      template="react-ts"
      customSetup={{ dependencies }}
      files={{ "/App.tsx": app }}
    />
  );
}

export default BlueprintSandpack;
