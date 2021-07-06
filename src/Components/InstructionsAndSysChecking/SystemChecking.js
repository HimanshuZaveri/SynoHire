import React from 'react';
import "./SystemChecking.css";

// import Footer from '../Common/Footer/Footer';
import RequirementCard from './RequirementCard';
import Button from '../Common/Button/Button';
import Instructions from './Instructions';

import CameraImg from '../../Assets/Image/camera.png';
import MeterImg from '../../Assets/Image/speedMeter.png';
import MicImg from '../../Assets/Image/mic.png';

const SystemChecking = () => {
    const checkedAll = true;

    return (
        <div className="container">
            <div className="header">
                <h1> Navbar Here </h1>
            </div>
            <div className="body">
                <div className="row1">
                    <div className="heading">
                        System Checking
                    </div>
                    <div className="instruction">
                        <Instructions />
                    </div>
                </div>

                <div className="row2">

                    <RequirementCard styles="card">
                        <RequirementCard styles="innerCard">
                            <img alt="WebCam" src={CameraImg} width="130px" height="auto" />
                        </RequirementCard>
                        <Button
                            title="Check"
                            styles="disable" />
                    </RequirementCard>

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
                <Footer/>
            </div>
            

        </div>
    )
};

export default SystemChecking;