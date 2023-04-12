import React from 'react';
import Logo from "../img/logo.png";
import sdglogo from "../img/sdglogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="sdglogo">
          <img src={sdglogo} alt=""/>
        </div>
        <span className='usernametext'>Login</span>
        <span className='logouttext'>Logout</span>
        <span className='write'> <Link className='link' to='/write'>Write</Link> </span>
        <div className="links">
          <Link className='link' to='/?sdg=Goal-1'> <h6> SDG-1 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-2'> <h6> SDG-2 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-3'> <h6> SDG-3 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-4'> <h6> SDG-4 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-5'> <h6> SDG-5 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-6'> <h6> SDG-6 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-7'> <h6> SDG-7 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-8'> <h6> SDG-8 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-9'> <h6> SDG-9 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-10'> <h6> SDG-10 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-11'> <h6> SDG-11 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-12'> <h6> SDG-12 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-13'> <h6> SDG-13 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-14'> <h6> SDG-14 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-15'> <h6> SDG-15 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-16'> <h6> SDG-16 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-17'> <h6> SDG-17 </h6> </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar