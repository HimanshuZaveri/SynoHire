import React from "react";
import Card from "../../Common/Card/Card";
import styles from "./DashboardContent.module.css";
import Button from "../../Common/Button/Button";
import ExamList from "./ExamList";

function DashboardContent(props) {
  return (
    <div className={styles.component_window}>
      <Card
        className={styles.margin_items}
        header="Active Test"
        fontSize="25px"
      >
            <ExamList listExam={props.listExam}/>
      </Card>
      <div className={styles.center_content}>
        <Button
          className={styles.margin_items}
          title={"Sample test"}
          styles={"navbar_button " + styles.margin_items}
        ></Button>
      </div>
    </div>
  );
}

export default DashboardContent;
