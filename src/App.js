import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Suhas from "./components/Suhas";
import Viddd from "./components/Viddd";
import Mukesh from "./components/Mukesh";
import Pradeep from "./components/Pradeep";
import Hemant from './components/Hemant';

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Viddd/>
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
      <Suhas/>
      


      <Mukesh />
      <Hemant/>
    </div>
  );
}

export default App;
