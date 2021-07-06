import React from "react";
import Navbar from "../../Common/NavBar/Navbar";
// import Card from "../../Components/Common/Card/Card";
import DashboardContent from "../DashboardContent/DashboardContent";
import Footer from "../../Common/Footer/Footer";
// import styled from "./Dashboardhome.module.css";

const Exams = [
  {name:"Test for Exam name XYX1",attempt:1},
  {name:"Test for Exam name XYX2",attempt:1},
  {name:"Test for Exam name XYX3",attempt:0}
]


function Dashboardhome() {
  return (
    <div>
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
      <DashboardContent listExam={Exams}/>
      <Footer />
    </div>
  );
}

export default Dashboardhome;
