import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsFacebook />
        <BsInstagram />
        <GrTwitter />
       
      </div>
    </div>
  );
};

export default Footer;
