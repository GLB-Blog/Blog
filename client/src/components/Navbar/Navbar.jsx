import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
import { useContext } from "react";
import axios from "axios";
import Logo from "../../img/logo.png";
import sdglogo from "../../img/sdglogo.png";
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
import "./Navbar.css";

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  const [isTeacher, setIsTeacher] = useState(false);

  const fetchIsTeacher = async () => {
    try {
      const response = await axios.get(`/navbar/${currentUser.userId}`);
      const { isTeacher } = response.data;
      setIsTeacher(isTeacher);
    } catch (error) {
      console.log(error);
    }
  };  
  useEffect(() => {
    if (currentUser) {
      fetchIsTeacher();
    }
  }, [currentUser]);
  
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt=""/>
          </Link>
        </div>
        <div className="sdglogo">
          <img src={sdglogo} alt=""/>
        </div>
        <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
      
      <div className = "dropdownMenu">
       <ul>
         <li><a>About </a>
           <ul class="dropdown">
          <Link to= '/teachers'><li><a>Teachers</a>   </li></Link> 
         <Link to= '/SdgGoals'><li><a>Sdg Goals</a></li></Link> 
      </ul>
      </li>
  </ul>
       </div>
        
       {isTeacher ? (
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        ) : (
          <></>
        )}

       <div className="links">
        <Link className='link' to='/?sdg=Goal-1'> <div className="sdg"><img src={sdg1} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-2'> <div className="sdg"><img src={sdg2} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-3'> <div className="sdg"><img src={sdg3} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-4'> <div className="sdg"><img src={sdg4} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-5'> <div className="sdg"><img src={sdg5} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-6'> <div className="sdg"><img src={sdg6} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-7'> <div className="sdg"><img src={sdg7} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-8'> <div className="sdg"><img src={sdg8} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-9'> <div className="sdg"><img src={sdg9} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-10'> <div className="sdg"><img src={sdg10} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-11'> <div className="sdg"><img src={sdg11} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-12'> <div className="sdg"><img src={sdg12} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-13'> <div className="sdg"><img src={sdg13} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-14'> <div className="sdg"><img src={sdg14} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-15'> <div className="sdg"><img src={sdg15} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-16'> <div className="sdg"><img src={sdg16} alt=""/></div> </Link> 
        <Link className='link' to='/?sdg=Goal-17'> <div className="sdg"><img src={sdg17} alt=""/></div> </Link>
       </div>

      </div>
    </div>
  );
};

export default Navbar