import React from 'react';
import classes from  "./TestPage.module.css"

const TestPage = () => {
    return (
        <div className="container">
            <div className="navbar">
                <h1>NavBar</h1>
            </div>
            <div className="body">
                <div className="header"></div>
                <div className="content">
                    <div className="instructions"></div>
                    <div className="startButton"></div>
                </div>
            </div>
        </div>
    )
};

export default TestPage;