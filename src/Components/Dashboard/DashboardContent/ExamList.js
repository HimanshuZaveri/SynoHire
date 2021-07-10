import React from 'react'
import styles from './ExamList.module.css'
import Button from '../../Common/Button/Button';
import { v4 as uuidv4 } from "uuid";

function ExamList(props) {
    return (
        <>
            {props.listExam?.map((items) => (
            <div className={styles.card_with_button} key={uuidv4()}>
                <h3>{items.name}</h3>
                <Button title="Start Test" styles = {((items.attempt===0)?"disable":"action")}></Button>
            </div>
        ))}
        </>
    )
}

export default ExamList
