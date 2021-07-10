// props => styles= action or disable or enable
//                  and title

import classes from "./Button.module.css";

const Button = (props) => {
    let style;
    if(props.styles === "action"){
        style=classes.action;
    }else if(props.styles === "disable"){
        style = classes.disable;
    }else if(props.styles === "enable"){
        style = classes.enable;
    }
    return (
        <button className={style}>
            {props.title}
        </button>
    )
};

export default Button;
