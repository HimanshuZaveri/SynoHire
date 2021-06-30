// props => bgColor , txtColor, actionHandler, title, fontSize(optional) , width(optional), height(optional)

import styled from "styled-components";


const Button =  (props) => {
    const StyledButton = styled.button`
        background-color: ${props.bgColor};
        color: ${props.txtColor};
        border-radius: 0.5rem;
        padding: 3px calc(.5rem + 4px);
        width: ${props.width? props.width: 'auto'};
        height: ${props.height? props.height: 'auto'};
        font-size: ${props.fontSize? props.fontSize: 'auto'};
    `;
    return(
        <StyledButton bgColor="#011627">
        {props.title}
        </StyledButton>
        )
    };

export default Button;