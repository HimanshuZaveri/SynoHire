import React, { useRef, useState } from 'react';
import Webcam from "react-webcam";

import classes from './CameraCheck.module.css';

const CameraCheck = (props) => {
    const videoRef = useRef('');
    const [webcamStyle, setWebcamStyle] = useState(false);

    return (
        <Webcam
            ref={videoRef}
            audio={false}
            className={webcamStyle ? classes.webCamValid : classes.webCam }
            onUserMedia={() => {
                setWebcamStyle(true)
                props.valid() }}
            onUserMediaError={() => {
                props.inValid()
            }}
            videoConstraints={{
                facingMode: { exact: "user" },
                aspectRatio: 1 }}
        />
    )
};

export default CameraCheck;