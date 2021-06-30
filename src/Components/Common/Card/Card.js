// props => bgColor , txtColor, fontSize(optional) , width(optional), height(optional),

import styled from "styled-components";

const Card = (props) => {
    const StyledCard = styled.span`
        background-color: ${props.bgColor};
        color: ${props.txtColor};
        border-radius: 0.5rem;
        padding: 3px calc(.5rem + 4px);
        width: ${props.width ? props.width : 'auto'};
        height: ${props.height ? props.height : 'auto'};
        font-size: ${props.fontSize ? props.fontSize : 'auto'};
    `;

    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
};

export default Card;