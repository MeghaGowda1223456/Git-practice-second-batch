// import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Tanmoy from "./components/Tanmoy";
import Pradeep from "./components/Pradeep";
import Hemant from "./components/Hemant";


import Mukesh from "./components/Mukesh";



function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Tanmoy/>
      <Pradeep/>
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
      <Mukesh />
      <Hemant/>
    </div>
  );
}

export default App;
