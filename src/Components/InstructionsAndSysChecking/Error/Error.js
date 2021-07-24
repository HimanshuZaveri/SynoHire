import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Error.module.css";

const Error = (props) => {
    return (
        <div>
            {props.image}
            <Link className={classes.backdrop} to="/sysCheck" />
            <div className={classes.card}>
                {props.message}
            </div>
        </div>
    )
};

export default Error;