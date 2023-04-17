import React from "react";
import './Teachers.css'
import agu from '../../img/agu.png';
import Card from "../../components/Card/Card.jsx"
const Teachers = () => {
    return(<div className="mainClass">
  <div class="imageContainer">
    <img src={agu}></img>
    <p class="imageContent">GLB Teachers</p>
  </div>
<Card />
        
    </div>)
}

export default Teachers