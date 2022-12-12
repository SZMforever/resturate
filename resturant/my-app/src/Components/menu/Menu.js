import React from "react";
import Data from "../../Data";
import MenuItem from "./MenuItem";
// import  Link  from "react-bootstrap";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {Data.map((menuItem, key) => {
            return (
              // <Link to="/details" className="btn btn-primary"> </Link>

              <MenuItem
                key={key}
                img={menuItem.img}
                title={menuItem.title}
                description={menuItem.description}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
