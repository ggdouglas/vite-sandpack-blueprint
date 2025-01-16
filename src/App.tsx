import BlueprintSandpack from "./BlueprintSandpack";
import "./App.css";

function App() {
  return (
    <BlueprintSandpack
      dependencies={{ "@blueprintjs/core": ["Button"] }}
      title="Basic Example"
    >
      {`<Button intent="primary" text="Hello, Blueprint!" />`}
    </BlueprintSandpack>
  );
}

export default App;
