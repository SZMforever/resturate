import React from "react";

const MenuItem = ({ img, title, price, description }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${img})` }}></div>
      <h5>{title}</h5>
      <p>{description}</p>
      <h6>{price}</h6>
    </div>
  );
};

export default MenuItem;
