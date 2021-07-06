import Navbar from "../../Common/NavBar/Navbar";
import Button from '../../Common/Button/Button';
import Footer from '../../Common/Footer/Footer';
import './Help.css';
import photo from '../../Assets/Images/help.jpg';

const Help = () => {
  return (
    <>
      <Navbar
        compo={[
          {
            title: "Dashbord",
            path: "/dashbord",
            margin: "0px 5px 0px 5px",
            bgColor: "#C6FFDD",
          },
          {
            title: "Help",
            path: "/help",
            margin: "0px 5px 0px 5px",
            bgColor: "#FBD786",
          }
        ]}
      />

      <div className="help-section">

        <div className='left'>
          <img src={photo} alt='loading error!' />
        </div>
        <div className='right'>
        <div className='questions'>
          <h3>Frequent Questions</h3>
          <ul>
            <li> <span>Some frequently asked questions and answer</span></li>
            <li> <span>Some frequently asked questions and answer</span></li>
            <li> <span>Some frequently asked questions and answer</span></li>
            <li> <span>Some frequently asked questions and answer</span></li>
          </ul>
        </div>
        <h5>contact us</h5>
        <textarea  placeholder='Write Here..' ></textarea>
        <div className='comt-btn'><Button margin="4px 9vw" bgColor='#011627' title='Submit' txtColor='#FDFFFC' fontSize="1.5vw" width='9vw' height='2.5vw'/>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;
