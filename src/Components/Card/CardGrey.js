import './CardGrey.css';

const CardGrey = (props) => {
    return (
        <div className="card-grey">
            <div className="card-heading">
                <p>Card Heading</p>
            </div> <br/> 
            {props.children}
        </div>
    );
};

export default CardGrey;
