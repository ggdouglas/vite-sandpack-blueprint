import BlueprintSandpack from "./BlueprintSandpack";
import "./App.css";

function App() {
  const componentDependencies = {
    "@blueprintjs/icons": ["Download"],
    "@blueprintjs/core": ["Icon", "Button"],
  };
  return (
    <BlueprintSandpack dependencies={componentDependencies}>
      {`<Button intent="primary" text="Hello, Blueprint!" />`}
    </BlueprintSandpack>
  );
}

export default App;
