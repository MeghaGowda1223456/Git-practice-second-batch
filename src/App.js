import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Mukesh from "./components/Mukesh";
import Pradeep from "./components/Pradeep";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Pradeep/>
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
      <Mukesh />
    </div>
  );
}

export default App;
