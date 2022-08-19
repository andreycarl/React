import React from "react";
import "./footer.css";
import { FaInstagram,FaTelegramPlane  } from "react-icons/fa";
import { BiChat  } from "react-icons/bi";

const Footer = () => (
  <div className="footer">
    <div className='box'>
        <p></p>
    </div>
    <div className='vacio'>
    </div>
    <div className='icons'>
      <FaInstagram />
    </div>
    <div className='icons'>
      <FaTelegramPlane />
    </div>
    <div className='icons'>
      <BiChat />
    </div>
  </div>
);

export default Footer;