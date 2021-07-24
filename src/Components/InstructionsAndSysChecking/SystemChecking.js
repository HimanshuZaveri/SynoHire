import React, { useEffect, useState } from 'react';
import classes from "./SystemChecking.module.css";

import Footer from '../Common/Footer/Footer';
import RequirementCard from './RequirementCard';
import Button from '../Common/Button/Button';
import Instructions from './Instructions';

import CameraImg from '../../Assets/Image/camera.png';
import MeterImg from '../../Assets/Image/speedMeter.png';
import MicImg from '../../Assets/Image/mic.png';

import CameraCheck from './Camera/CameraCheck';
import CameraCard from './Camera/CameraCard';

const SystemChecking = () => {
    const checkedAll = false;
    const [camCheck,setCamCheck] = useState(false);
    const [iCheck,setICheck] = useState(false);
    const [micCheck,setMicCheck] = useState(false);

    useEffect(() => 
        {if(camCheck && iCheck && micCheck){ 
            checkedAll = true;
        }}
    , [camCheck, iCheck, micCheck]);

    return (
        <div className={classes.body}>
            <div className={classes.row1}>
                <div className={classes.heading}>
                    <h1>System Checking</h1>
                </div>
                <div className={classes.instruction}>
                    <Instructions />
                </div>
            </div>

            <div className={classes.row2}>

                <CameraCard />

                <RequirementCard styles="card">
                    <RequirementCard styles="innerCard">
                        <img alt="SpeedTest" src={MeterImg} width="120px" height="auto" />
                    </RequirementCard>
                    <Button
                        title="Check"
                        styles="disable" />
                </RequirementCard>

                <RequirementCard styles="card">
                    <RequirementCard styles="innerCard">
                        <img alt="SpeedTest" src={MicImg} width="120px" height="auto" />
                    </RequirementCard>
                    <Button
                        title="Check"
                        styles="disable" />
                </RequirementCard>

                <Button
                    title="NEXT"
                    styles={checkedAll ? "enable" : "disable"} />
            </div>
            <Footer />
        </div>

    )
};

export default SystemChecking;