import React from 'react';
import classes from './LoginForm.module.css';
import Button from "../../Common/Button/Button";

const LoginForm =  () => {
    return(
        <form className={classes.formContainer}>
            <label htmlFor="userName" className={classes.formLabel}>
                Username
                <input 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="enter username" 
                    className={classes.inputField} />
            </label>
            <label htmlFor="password" className={classes.formLabel}>
                Password 
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="enter password" 
                    className={classes.inputField} />
            </label>
            <lable className={classes.submitButton}>
                <Button styles="enable" title="LOGIN"/>
                </lable>
        </form>
    )
};

export default LoginForm;