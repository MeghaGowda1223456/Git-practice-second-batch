import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
    </div>
  );
}

export default App;
