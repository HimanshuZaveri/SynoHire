import './CardGrey.css';

const CardGrey = (props) => {

    const headerstyle = props.title ? "card-heading" : "";
    
    return (
        <div className="card-grey">

            <div className={headerstyle}>
                {props.title && <p>{props.title}</p> }
            </div> 

            <div className='content'>
              <section>  {props.children} </section>
              <br />
            </div>
            
        </div>
    );
};
export default CardGrey;
