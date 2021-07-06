import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Image/synohirelogo.png";
import { v4 as uuidv4 } from "uuid";
function Navbar(props) {
  //   console.log(props.compo);
  return (
    <nav className="nav">
      <img className="nav_logo" src={logo} />
      <span className="nav_container">
        {props.compo?.map((res) => (
          // <Link key={uuidv4()} to={res.path}>
            <Button key={uuidv4()}
              title={res.title}
              styles="navbar_button"
              // bgColor={res.bgColor}
              // margin={res.margin}
            />
          // </Link>
        ))}
      </span>
    </nav>
  );
}

export default Navbar;
