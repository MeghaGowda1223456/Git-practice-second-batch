// import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
<<<<<<< HEAD
<<<<<<< HEAD
import Suhas from "./components/Suhas";
=======
import Pradeep from "./components/Pradeep";
>>>>>>> 120c2ae5227dcccd53a38adf2bc5dc6bbd5c2be4
=======
import Hemant from "./components/Hemant";
import Pradeep from "./components/pradeep";

>>>>>>> cf120229d70354a58bf6f1944831b9790f14321f

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Pradeep/>
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
<<<<<<< HEAD
      <Suhas/>
=======
      <Hemant/>
>>>>>>> cf120229d70354a58bf6f1944831b9790f14321f
    </div>
  );
}

export default App;
