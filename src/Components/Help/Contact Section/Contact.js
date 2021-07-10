import classes from './Contact.module.css';
import Button from '../../Common/Button/Button';

const Contact = () => {
    return (
        <div className={classes.contact}>
            <h5>contact us</h5>
            <textarea placeholder='Write Here..' ></textarea>
            <div className={classes['comment-btn']}>
                <Button title='Submit' styles='disable' />
            </div>
        </div>
    );
};

export default Contact;
