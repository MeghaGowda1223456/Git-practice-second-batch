// import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
<<<<<<< HEAD
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
=======
import Mukesh from "./components/Mukesh";
import Pradeep from "./components/Pradeep";
import Hemant from "./components/Hemant";
>>>>>>> b25ca652c97ec38b9ab409916780286df3cde307

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Pradeep/>
      <ComponentB/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
<<<<<<< HEAD
<<<<<<< HEAD
      <Suhas/>
=======
=======
      <Mukesh />
>>>>>>> b25ca652c97ec38b9ab409916780286df3cde307
      <Hemant/>
>>>>>>> cf120229d70354a58bf6f1944831b9790f14321f
    </div>
  );
}

export default App;
