import styles from "../styles/mcq.module.css";
import { useState } from "react";
import Options from "./Options";

const MCQ = ({ question }) => {
  const [selected, setSelected] = useState("");
  return (
    <div className={styles.mcq}>
      <p className={styles.questionType}>MCQ</p>
      <p className={styles.questionTitle}>{question.title}</p>
      {question.options.map((option, index) => (
        <Options
          key={`${question._id}${index}`}
          text={option.text}
          selected={selected}
          setSelected={setSelected}
          isCorrectAnswer={option.isCorrectAnswer}
        />
      ))}
    </div>
  );
};

export default MCQ;
