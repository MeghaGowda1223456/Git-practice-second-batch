import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
<<<<<<< HEAD
import Suhas from "./components/Suhas";
=======
import Pradeep from "./components/Pradeep";
>>>>>>> 120c2ae5227dcccd53a38adf2bc5dc6bbd5c2be4

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Pradeep/>
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
      <Suhas/>
    </div>
  );
}

export default App;
