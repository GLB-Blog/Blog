import React from "react";
import './Teachers.css';
import agu from '../../img/agu.png';
import Card from "../../components/Card/Card.jsx";
const Teachers = () => {
    return(<div className="mainClass">
  <div className="imageContainer">
    <img src={agu} alt=""></img>
    <p className="imageContent">GLB Teachers</p>
  </div>

<div className="CardContainer"><Card /></div>



        
    </div>);
};

export default Teachers