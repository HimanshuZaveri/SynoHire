// props => styles= action or disable or enable
//                  and title

import classes from "./Button.module.css";

const Button = (props) => {
<<<<<<< HEAD
  return (
    <button className={props.styles}>
      {props.title}
    </button>
  );
=======
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
>>>>>>> remotes/origin/Himanshu
};

export default Button;
