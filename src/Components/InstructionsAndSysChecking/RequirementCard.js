import React from 'react';
import "./RequirementCard.css";

const RequirementCard =  (props) => {
    return(
        <div className={props.styles}>
            {props.children}
        </div>
    )
};

export default RequirementCard;