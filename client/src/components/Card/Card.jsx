import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

const Card = () =>{
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/teachers");
        setTeachers(res.data);
      } catch (err) {
        console.log(err); // Log any errors that occur
      }
    };
    fetchAllTeachers();
  }, []);  

  console.log(teachers);

    return(<div>
      {teachers.map((teacher) => {
    return(
    <div className='teacher-card' key={teacher.id}>
        <img src = {teacher.img} className= "teacherImg"></img>
        <div className="rightcontent"> 
        <h5> {teacher.name}</h5>
        <p> <strong>Email:</strong> {teacher.email}</p></div>
        
      </div> )
    })}
  </div>);
};

export default Card