import Navbar from "../Common/NavBar/Navbar";
import Footer from '../Common/Footer/Footer';
import FrequentQuestions from "../Help/Frequent Questions/FrequentQuestions";
import Contact from "../Help/Contact Section/Contact";
import classes from '../Help/Help.module.css';
import photo from '../../Assets/Image/help.jpg';

const Help = () => {
  return (
    <>
      <Navbar
        compo={[
          {
            title: "Dashboard ",
          },
          {
            title: "Help ",
          },
          {
            title: "User171254 ",
          },
        ]}
      />

      <div className={classes['help-section']}>

        <div className={classes.left}>
          <img src={photo} alt='loading error!' />
        </div>

        <div className={classes.right}>
          <FrequentQuestions />
          <Contact />
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Help;
