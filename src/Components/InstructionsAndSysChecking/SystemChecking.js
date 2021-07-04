import React from 'react';
import "./SystemChecking.css";

import Footer from '../Common/Footer/Footer';
import RequirementCard from './RequirementCard';
import Button from '../Common/Button/Button';

const SystemChecking = () => {
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
                        <ul>
                            <li>
                                This test will be proctored by the hiring officials.
                            </li>
                            <li>
                                Ensure the room is lit properly and the background is dark.
                            </li>
                            <li>
                                Try to attempt the test in a quiet place.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row2">
                    <RequirementCard style="card">
                        <RequirementCard style="innerCard">
                        
                        </RequirementCard>
                        <Button
                            bgColor="rgb(224, 224, 224)"
                            txtColor="#011627"
                            title="Check"
                            fontSize=".8rem" />
                    </RequirementCard>
                    <RequirementCard style="card">
                        <RequirementCard style="innerCard">
                        </RequirementCard>
                        <Button
                            bgColor="rgb(224, 224, 224)"
                            txtColor="#011627"
                            title="Check"
                            fontSize=".8rem" />
                    </RequirementCard>
                    <RequirementCard style="card">
                        <RequirementCard style="innerCard">
                        </RequirementCard>
                        <Button
                            bgColor="rgb(224, 224, 224)"
                            txtColor="#011627"
                            title="Check"
                            fontSize=".8rem" />
                    </RequirementCard>
                    <Button
                        bgColor="#2ec4b6"
                        txtColor="#011627"
                        title="START"
                        fontSize="1.5rem" />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
};

export default SystemChecking;