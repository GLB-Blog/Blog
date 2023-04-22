import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SdgGoals.css';
import sdg1 from "../../img/sdg1.png";
import sdg2 from "../../img/sdg2.png";
import sdg3 from "../../img/sdg3.png";
import sdg4 from "../../img/sdg4.png";
import sdg5 from "../../img/sdg5.png";
import sdg6 from "../../img/sdg6.png";
import sdg7 from "../../img/sdg7.png";
import sdg8 from "../../img/sdg8.png";
import sdg9 from "../../img/sdg9.png";
import sdg10 from "../../img/sdg10.png";
import sdg11 from "../../img/sdg11.png";
import sdg12 from "../../img/sdg12.png";
import sdg13 from "../../img/sdg13.png";
import sdg14 from "../../img/sdg14.png";
import sdg15 from "../../img/sdg15.png";
import sdg16 from "../../img/sdg16.png";
import sdg17 from "../../img/sdg17.png";

const SDG = () =>{
  const [sdg, setsdg] = useState([]);

  useEffect(() => {
    const fetchAllsdg = async () => {
      try {
        const res = await axios.get("http://localhost:8800/sdg");
        setsdg(res.data);
      } catch (err) {
        console.log(err); // Log any errors that occur
      }
    };
    fetchAllsdg();
  }, []);  

  console.log(sdg);

  const getImageBySdgId = (id) => {
    switch (id) {
      case 1:
        return sdg1;
      case 2:
        return sdg2;
      case 3:
        return sdg3;
      case 4:
        return sdg4;
      case 5:
        return sdg5;
      case 6:
        return sdg6;
      case 7:
        return sdg7;
      case 8:
        return sdg8;
      case 9:
        return sdg9;
      case 10:
        return sdg10;
      case 11:
        return sdg11;
      case 12:
        return sdg12;
      case 13:
        return sdg13;
      case 14:
        return sdg14;
      case 15:
        return sdg15;
      case 16:
        return sdg16;
      case 17:
        return sdg17;
      default:
        return null;
    }
  }

  return (
    <div className="list-container">
      {sdg.map((item) => (
        <div className="list-item" key={item.id}>
          <img src={getImageBySdgId(item.id)} alt="" />
          <div className="item-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SDG
