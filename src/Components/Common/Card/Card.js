// props => contentFontSize
    // when card has header =>>header , width , fontSize, 

import classes from "./cardStyle.module.css";

const Card = (props) => {
    return (
        <div className={props.header ? classes.cardContainerWithHeader : ""}
            style={props.width && {
                width: props.width,
            }}>
            {props.header && (
                <div className={classes.cardHeader}
                    style={props.fontSize && {
                        fontSize:props.fontSize,
                    }}>
                    {props.header}
                </div>
            )}
            <div className={props.header ? classes.contentHeader : classes.content}
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