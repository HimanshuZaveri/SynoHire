import classes from "./Navbar.module.css";
import logo from "../../../Assets/Image/SynoHire.png";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
  
  return (
    <nav className={classes.navContainer}>
      <img className={classes.navLogo} src={logo}/>
      <div className={classes.linksContainer}>
        <NavLink to="/dashboard" activeClassName={classes.activeLink} className={classes.link}>
          Dashboard
        </NavLink>
        <NavLink to="/help" activeClassName={classes.activeLink} className={classes.link}>
          Help
        </NavLink>
        <div className={classes.userInfo}>
        user@name12345
        </div>
      </div>
    </nav>
  );
}

export default Navbar;