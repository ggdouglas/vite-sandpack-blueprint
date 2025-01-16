import BlueprintSandpack from "./BlueprintSandpack";
import "./App.css";
import { outdent } from "outdent";

function App() {
  return (
    <div className="app">
      <BlueprintSandpack
        dependencies={{ "@blueprintjs/core": ["Button"] }}
        title="Button Basic Example"
      >
        {`<Button text="Click Me" />`}
      </BlueprintSandpack>

      <BlueprintSandpack
        dependencies={{ "@blueprintjs/core": ["Button"] }}
        title="Button Intent Example"
      >
        {outdent`
<div>
      <Button text="Primary" intent="primary" />
      <Button text="Success" intent="success" />
      <Button text="Warning" intent="warning" />
      <Button text="Danger" intent="danger" />
    </div>`}
      </BlueprintSandpack>
    </div>
  );
}

export default App;
