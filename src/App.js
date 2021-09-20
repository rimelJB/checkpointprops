import React from "react";
import './App.css';
import Bio from "./Profile/Components/Bio";
import FullName from "./Profile/Components/FullName";
import Profession from "./Profile/Components/Profession";

function App() {
  return (
    <div >
    <FullName name="Rimel Jabnoun"/>
    <Bio biog="Rimel"/>
    <Profession/>
    </div>
  );
}

export default App;
