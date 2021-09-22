import React from "react";
import './App.css';
import Msg from "./Profile/Msg";
import Profile from "./Profile/Profile.js";
import Pic from "./Profile/Pic";



function App() {
  const handleName = Me => alert(Me);
 
 
  return (
    <div className="final"> 
    
    <Profile FullName='Rimel Jabnoun'
            Bio='https://www.linkedin.com/in/rimeljabnoun'
             Profession="Web developper Js"/>
    <Pic></Pic>
    <Msg handle={handleName}/>
    </div>
     
  )
}

export default App;
