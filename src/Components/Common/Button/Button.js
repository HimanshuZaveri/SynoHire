// props => styles= action or disable or enable
//                  and title

import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.styles}>
      {props.title}
    </button>
  );
};

export default Button;
