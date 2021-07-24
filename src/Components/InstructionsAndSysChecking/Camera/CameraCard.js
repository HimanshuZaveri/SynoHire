import React, { useState } from 'react';

import Button from '../../Common/Button/Button';
import RequirementCard from '../RequirementCard';

import CameraImg from '../../../Assets/Image/camera.png';
import CameraCheck from './CameraCheck';
import Error from '../Error/Error';

let camDisp = <img alt="WebCam" src={CameraImg} width="130px" height="auto" />;

const CameraCard = () => {
    const [camCheck, setCamCheck] = useState(null);

    const valid = () => {
        console.log("Validated")
    };
    const inValid = () => {
        camDisp = <Error 
        image={<img alt="WebCam" src={CameraImg} width="130px" height="auto" />}
        message="Please allow Camera or check your camera!"
        />
        setCamCheck("false")
    };

    const camCheckHandler = () => {
        camDisp = <CameraCheck valid={valid} inValid={inValid} />
        setCamCheck(true)
    }

    return (
        <RequirementCard styles="card">
            <RequirementCard styles="innerCard">
                {camDisp}
            </RequirementCard>
            <Button
                title="Check"
                styles="disable"
                onClick={camCheckHandler}
            />
        </RequirementCard>
    )
};

export default CameraCard;

