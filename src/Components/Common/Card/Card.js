// props => contentFontSize
    // when card has header =>>header , width , fontSize, 

import "./cardStyle.css";

const Card = (props) => {
    return (
        <div className={props.header ? "cardContainerWithHeader" : ""}
            style={props.width && {
                width: props.width,
            }}>
            {props.header && (
                <div className="cardHeader"
                    style={props.fontSize && {
                        fontSize:props.fontSize,
                    }}>
                    {props.header}
                </div>
            )}
            <div className={props.header ? "contentHeader" : "content"}
                    style={props.contentFontSize && {
                        fontSize: props.contentFontSize,
                    }}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Card;