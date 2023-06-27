import React from "react";
import Logo from "../../img/HARAZ DENTAL GROUP.png"
import "./Navbar.css"
import { useState } from "react";
import { Link } from 'react-scroll'
import Patient from "../Patient Info/Patient";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    
    <>
      <div className="navbar">
        <div className="items">
          <div className="logo">
            <img src={Logo} width={200} height={60} alt="" />
          </div>
          <div className="download">
            Download
          </div>
        </div>
          
      </div>  
    
      {/* <div className="links">
        <div className="linkItems">
          <span >Patient Info</span>
          <span >Insurance Details</span>
          <span >Reffering Info</span>
          <span >Reason For Refferal</span>
          <span >Extraction Information</span>
          <span >Special Instruction</span>
          <span >Medications</span> */}
         
        
        <div className="links">
        <div className="menuButton" onClick={toggleMenu}>
        Menu
      </div>
      
          <div className={`linkItems ${isMenuOpen ? 'open' : ''}`}>
          <Link spy={true} smooth={true} to='patient'   offset={-70}
        duration={500} activeClass="active">

            <span>Patient Info</span>
            </Link>
            <Link spy={true} smooth={true} to='insurance'   offset={-70}
        duration={500} activeClass="active">
                 <span>Insurance Details</span>
        </Link>
        <Link spy={true} smooth={true} to='reffer'   offset={-70}
        duration={500} activeClass="active">
            <span>Referring Info</span>
        </Link>
          
          
            <Link spy={true} smooth={true} to='reason'   offset={-70}
        duration={500} activeClass="active">
           <span>Reason For Referral</span>
        </Link>
           
            <Link spy={true} smooth={true} to='extraction'   offset={-70}
        duration={500} activeClass="active">
            <span>Extraction Information</span>

        </Link>
            <Link spy={true} smooth={true} to='instruction'   offset={-70}
        duration={500} activeClass="active">
            <span>Special Instruction</span>

        </Link>
            <Link spy={true} smooth={true} to='medication'   offset={-70}
        duration={500} activeClass="active">
            <span>Medications</span>
          
        </Link>

          </div>
        </div>
        
      

    
    </>
  );
}

export default Navbar;