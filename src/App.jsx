import { useState } from "react";
import "./App.css";
import Calculator from "/src/components/Calculator/index.jsx";

function App(peopleValue) {
  const [splitAnimation, setSplitAnimation] = useState("split");
  const [growAnimation, setGrowAnimation] = useState("grow");

  return (
    <>
      <div className="m-auto h-28 w-72 my-10">
        <h1 className="text-emerald-200 text-5xl text-left absolute">S P L I</h1>
        <h1
          id="header"
          className={`${splitAnimation} text-emerald-400 text-5xl text-right`}
        >
          T T E R
        </h1>
        <div
          id="divider"
          className={`${growAnimation} w-0 h-1.5 bg-emerald-600`}
        ></div>
      </div>
      <Calculator />
    </>
  );
}

export default App;
