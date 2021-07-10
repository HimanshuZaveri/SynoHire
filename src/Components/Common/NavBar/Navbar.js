import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import synoHireLogo from "../../../Assets/Image/SynoHire.png";
import menuIcon from "../../../Assets/Image/menuIcon.png";

const Navbar = (props) => {
  const style = props.tabsHidden ? classes.inVisible : classes.link;
  const [showMenu, setShowMenu] = useState(false);

  var logo = props.logo ? props.logo : synoHireLogo;

  return (
    <nav className={classes.navContainer}>
      <img className={classes.navLogo} src={logo} alt="logo" />
      <div>

        <div className={classes.menu}>
          <select title={<img src={menuIcon} alt="menu" onClick={() => setShowMenu(prev => !prev)} />} />
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
    </nav>
  );
}

export default Navbar;