import React from 'react';
import classes from "./RequirementCard.module.css";

const RequirementCard =  (props) => {
    return(
        <div className={props.styles === "card"? classes.card: classes.innerCard} >
            {props.children}
        </div>
    )
};

export default RequirementCard;