// props => bgColor , txtColor, actionHandler, title, 
//          fontSize(optional) , width(optional), height(optional)

import styled from "styled-components";


const Button = (props) => {
    const StyledButton = styled.button`
        background-color: ${props.bgColor};
        color: ${props.txtColor};
        border: none;
        border-radius: 1rem;
        padding: 4px calc(.5rem + 4px);
        font-size: ${props.fontSize ? props.fontSize : 'auto'};
        font-weight: 500;
    `;
    return (
        <StyledButton>
            {props.title}
        </StyledButton>
    )
};

export default Button;