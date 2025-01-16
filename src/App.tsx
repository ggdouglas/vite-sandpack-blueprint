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

      <BlueprintSandpack
        dependencies={{ "@blueprintjs/core": ["Button"] }}
        title="Button Minimal Example"
      >
        {outdent`
<div>
      <Button text="Minimal" minimal={true} />
      <Button text="Primary" minimal={true} intent="primary" />
      <Button text="Disabled" minimal={true} disabled={true} />
    </div>`}
      </BlueprintSandpack>

      <BlueprintSandpack
        dependencies={{ "@blueprintjs/core": ["Button"] }}
        title="Button Outlined Example"
      >
        {outdent`
<div>
      <Button text="Outlined" outlined={true} />
      <Button text="Primary" outlined={true} intent="primary" />
      <Button text="Disabled" minimal={true} disabled={true} />
    </div>`}
      </BlueprintSandpack>
    </div>
  );
}

export default App;
