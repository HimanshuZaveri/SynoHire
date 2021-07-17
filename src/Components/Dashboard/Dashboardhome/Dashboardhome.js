import React from "react";
import DashboardContent from "../DashboardContent/DashboardContent";
import Footer from "../../Common/Footer/Footer";

const Exams = [
  {name:"Test for Exam name XYX1",attempt:1},
  {name:"Test for Exam name XYX2",attempt:1},
  {name:"Test for Exam name XYX3",attempt:0}
]

function Dashboardhome() {
  return (
    <div>      
      <DashboardContent listExam={Exams}/>
      <Footer />
    </div>
  );
}

export default Dashboardhome;
