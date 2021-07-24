import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Login.module.css";
import synohireLogo from "../../Assets/Image/synohirelogo.png";
import LoginForm from './Form/LoginForm';

const Login = () => {

    return (
        <div className={classes.container}>
            <Link className={classes.backdrop} to="/" />
            <div className={classes.loginContainer}>
                <div className={classes.header}>Login Credentials</div>
                <div className={classes.loginContainer2}>
                    <div className={classes.loginLogoContainer}>
                        <img src={synohireLogo} className={classes.loginLogo} />
                    </div>
                    <div className={classes.credential}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;