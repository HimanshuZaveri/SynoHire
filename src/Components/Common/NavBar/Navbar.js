<<<<<<< HEAD
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
=======
// if tabsHidden is passed true then tabs will not be present

import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import synoHireLogo from "../../../Assets/Image/SynoHire.png";
import menuIcon from "../../../Assets/Image/menuIcon.png";

const Navbar = (props) =>{
  const style = props.tabsHidden?classes.inVisible:classes.link;
  const [ showMenu , setShowMenu ] = useState(false);

  var logo = props.logo?props.logo:synoHireLogo;
  
  return (
    <nav className={classes.navContainer}>
      <img className={classes.navLogo} src={logo} alt="logo"/>
      <div>
      
      <div className={classes.menu}>
        <select title={<img src={menuIcon} alt="menu" onClick={() => setShowMenu(prev => !prev)} />}/>
      </div>

      <div className={classes.linksContainer}>
        <NavLink to="/dashboard" activeClassName={classes.activeLink} className={style}>
          Dashboard
        </NavLink>
        <NavLink to="/help" activeClassName={classes.activeLink} className={style}>
          Help
        </NavLink>
        <div className={classes.userInfo}>
        user@name12345
        </div>
      </div>
      </div>
>>>>>>> remotes/origin/Himanshu
    </nav>
  );
}

export default Navbar;