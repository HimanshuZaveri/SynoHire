// props => bgColor , txtColor, actionHandler, title, fontSize(optional) , width(optional), height(optional)

import styled from "styled-components";

const Button = (props) => {
  const StyledButton = styled.button`
    background-color: ${props.bgColor};
    color: ${props.txtColor};
    border-radius: 0.5rem;
    padding: ${props.padding ? props.padding : "3px calc(0.5rem + 4px)"};
    width: ${props.width ? props.width : "auto"};
    height: ${props.height ? props.height : "auto"};
    font-size: ${props.fontSize ? props.fontSize : "auto"};
    margin: ${props.margin ? props.margin : "3px calc(0.5rem + 4px)"};
  `;
  return <StyledButton>{props.title}</StyledButton>;
};

export default Button;
