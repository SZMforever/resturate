import React from "react";
import prideImage from "../../assets/3.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <section className="number1">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <div className="container">
        <h1>ABOUT US</h1>
        <div className="row">
          <div className="col-md-6">
            <img src={prideImage} title="prideImage" />
          </div>
          <div className="col-md-6">
            <h1>About us </h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam et purus a odio finibus bibendum in sit amet leo. Mauris
              feugiat erat tellus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam et purus a odio finibus bibendum in sit
              amet leo. Mauris feugiat erat tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
