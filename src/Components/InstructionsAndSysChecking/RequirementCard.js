import React from 'react';
import "./RequirementCard.css";

const RequirementCard =  (props) => {
    return(
        <div className={props.style}>
            {props.children}
        </div>
    )
};

export default RequirementCard;