import classes from "./TestInstruction.module.css"

const TestInstructions = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <h2 className={classes.firstHeading}>Test Guidelines:</h2>
                    <ol>
                        <li>This is MCQ, numerical and coding test.</li>
                        <li>There are 4 sections of MCQ-based questions (Quantitative, Verbal, Reasoning, and Technical).</li>
                        <li>One section of programming [ You are free to choose any programming language from the list].</li>
                        <li>In the coding section, you are expected to write full code, all inputs from STDIN and output to STDOUT.</li>
                        <li>We recommend that you close all other tabs to ensure that there are no distractions.</li>
                    </ol>
                </li>
                <li>
                    <h2 className={classes.secondHeading}>Note: </h2>
                    <ul type="circle">
                        <li>Webcam will capture images periodically.</li>
                        <li>Any unfair means can lead to the cancellation of candidature.</li>
                    </ul>
                </li>
                <label>
                    <input type="checkbox" className={classes.checkbox} onClick={props.check}/>

                    <span className={classes.thirdHeading}>
                        Terms and Conditions
                    </span>
                    <ul type="disc">
                        <li>Once the test has started, the timer cannot be paused. You have to complete the test in one attempt.</li>
                        <li>Do not close the browser window or tab of the test interface before you submit your final answers.</li>
                        <li>Copy and paste is disabled.</li>
                        <li>You need to allow full screen mode.</li>
                    </ul>
                </label>
            </ul>
        </div>
    )
};

export default TestInstructions;