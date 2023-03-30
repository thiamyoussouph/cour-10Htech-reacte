
import './App.css';
import React,{useState} from 'react';

import Sidebard from "./Compemens/Sidebard";
import Cards from "./Compemens/Cards";
import Header from "./Compemens/header/Header";
import Formulaire from "./Compemens/Formulaire/Formulaire";

function App() {
    const [title, setTitle] = useState("salutes");
    const [subtitle, setSubtitle] = useState("texte");
    const [icon, setIcon] = useState("iconn");


function changeur(){
    setTitle("merciiiii")
    setSubtitle("New texte")
    setIcon("New iconn")
}
function dufils(){
    alert("je suis declencher")
}
  return (
    <div className="d-flex">
        <Header/>
        <Formulaire/>

    <Cards fun={dufils} title={title} subtitle={subtitle} icon={icon}/>
        <button onClick={changeur}>clic ici </button>
    </div>
  );
}

export default App;
