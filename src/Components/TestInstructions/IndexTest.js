import React, { useState } from 'react';
import classes from  "./IndexTest.module.css";
import Button from '../Common/Button/Button';
import Footer from '../Common/Footer/Footer';
import TestInstructions from './TestInstructions';

const IndexTest = () => {
    const [checked,setChecked] = useState(false);
    const checkingHandler = () => {
        setChecked (prev=>!prev);
    };
    return (
            <div className={classes.body}>
                <div className={classes.header}>
                    <h1>Instructions</h1>
                </div>
                <div className={classes.content}>
                    <div className={classes.instruction}>
                        <TestInstructions check={checkingHandler}/>
                    </div>
                    <div className={classes.startButton}>
                        <Button styles={checked? "enable" : "disable"} title="Start Test" />
                    </div>
                </div>
                <Footer />
            </div>
        
    )
};

export default IndexTest;