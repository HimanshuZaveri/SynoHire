import classes from './FrequentQuestion.module.css';

const FrequentQuestions = () => {
    return (
        <div className={classes.questions}>
            <h3>Frequent Questions</h3>
            <ul>
                <li> <span>Some frequently asked questions and answer</span></li>
                <li> <span>Some frequently asked questions and answer</span></li>
                <li> <span>Some frequently asked questions and answer</span></li>
                <li> <span>Some frequently asked questions and answer</span></li>
            </ul>
        </div>
    );
};

export default FrequentQuestions;
