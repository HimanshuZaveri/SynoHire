import Navbar from "../Common/NavBar/Navbar";
import Button from '../Common/Button/Button';
import Footer from '../Common/Footer/Footer';
import classes from './Help.module.css';
import photo from '../../Assets/Image/help.jpg';

const Help = () => {
  return (

    <div className={classes['help-section']}>

      <div className={classes.left}>
        <img src={photo} alt='loading error!' />
      </div>

      <div className={classes.right}>

        <div className={classes.questions}>
          <h3>Frequent Questions</h3>
          <ul>
            <li> <span>Some frequently asked questions and answer</span></li>
            <li> <span>Some frequently asked questions and answer</span></li>
            <li> <span>Some frequently asked questions and answer</span></li>
            <li> <span>Some frequently asked questions and answer</span></li>
          </ul>
        </div>

        <div className={classes.contact}>
          <h5>contact us</h5>
          <textarea placeholder='Write Here..' ></textarea>
          <div className={classes['comment-btn']}>
            <Button title='Submit' styles='disable' />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Help;
