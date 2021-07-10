import { useRef } from "react";
import Card from "../../Common/Card/Card";
import Button from "../../Common/Button/Button";
import Footer from "../../Common/Footer/Footer";
import classes from './Feedback.module.css';
import logo from '../../../Assets/Image/SynoHire.png';
import StarRating from "../Star Rating/StarRating";

const FeedbackContent = () => {
    const suggestedComments = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(suggestedComments.current.value);
        console.log("LWE");
    };

    return (
        <main className={classes['main-section']}>

            <img 
                src={logo} 
                className={classes.logo} 
                alt='logo loading error!' 
            />

            <div className={classes.card}>
                <Card header='Rate Your Experience' width='60vw' fontSize="25px">
                    <div>

                        <div className={classes.content}>
                            <p>Question Difficuly</p> 
                            <StarRating className={classes.Feedback__star}/> 
                        </div>

                        <div className={classes.content}> 
                            <p>User Experience</p>  
                            <StarRating className={classes.Feedback__star} /> 
                        </div>

                        <div className={classes.content}> 
                            <p>Connectivity</p>  
                            <StarRating className={classes.Feedback__star} /> 
                        </div>

                    </div>

                    <form onSubmit={submitHandler}>
                        <h4>Suggestion</h4>
                        <textarea 
                            ref={suggestedComments} 
                        />

                        <div className={classes.btn}>
                            <Button title='Submit Feedback & Exit' styles='disable'/>
                        </div>
                    </form>

                </Card> 
            </div>  
            <Footer />
        </main>
    );
};

export default FeedbackContent;
