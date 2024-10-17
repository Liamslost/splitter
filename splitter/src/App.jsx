import "./App.css";
import Container from "./Container";
import HeaderBox from "./HeaderBox";
import { useState } from "react";

function App() {
  
      return (
        <>
      <div className="h-lvh w-100 bg-emerald-100 flex flex-col">
        <HeaderBox />
        <Container />
      </div>
    </>
  );
}

export default App;
