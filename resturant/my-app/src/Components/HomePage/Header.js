import React from "react";
import "./Header.css";
// import Image from "./../../assets/1.jpeg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            {/* {<img src={Image} />} */}
            <button>our menu</button>
            <button>about us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
