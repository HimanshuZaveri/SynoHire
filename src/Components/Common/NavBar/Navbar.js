import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import synoHireLogo from "../../../Assets/Image/SynoHire.png";
import menuIcon from "../../../Assets/Image/menuIcon.png";
import synoriqLogo from "../../../Assets/Image/synoriq.webp";

const Navbar = (props) => {
  const style = props.tabsHidden ? classes.inVisible : classes.link;
  const [showMenu, setShowMenu] = useState(false);

  var logo = props.logo === "synoriq" ? synoriqLogo : synoHireLogo;

  return (
    <nav className={classes.navContainer}>
      <img className={classes.navLogo} src={logo} alt="logo" />
      
      {props.logo && <Link to="/login" className={classes.loginButton}>Login</Link>}  {/*For login on navbar*/}

      {/* For Navbar on rest pages */}
      <div className={props.logo==="synoriq"?classes.inVisible:{}}>
        <div className={classes.menu}>    {/* For making Navbar responsive */}
          <select title={<img src={menuIcon} alt="menu" onClick={() => setShowMenu(prev => !prev)} />} />
        </div>

        <div className={classes.linksContainer}>
          <NavLink to="/dashboard" activeClassName={classes.activeLink} className={style}>
            Dashboard
          </NavLink>
          <NavLink to="/help" activeClassName={classes.activeLink} className={style}>
            Help
          </NavLink>
          <div className={props.logo==='synoriq'?classes.inVisible:classes.userInfo}>
            user@name12345
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;