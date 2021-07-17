import React from 'react';
import classes from "./Landing.module.css";
import synoHireLogo from "../../Assets/Image/synohirelogo.png";
import Footer from "../Common/Footer/Footer";
import Login from '../Login/Login';

const Landing =  (props) => {
    return(
        <div className={classes.container}>
        <img src={synoHireLogo} className={classes.logo} alt="product_logo"/>
        <h1>
            SynoHire
        </h1>
        <h2>The Ultimate Hiring Test Platform</h2><h2>by <span>Synoriq</span></h2>
        {props.login && <Login />}
        <Footer />
        </div>
    )
};

export default Landing;