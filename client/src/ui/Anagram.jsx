import styles from "../styles/anagram.module.css";
import Blocks from "./Blocks";
import { useState, useEffect } from "react";

const Anagram = ({ question }) => {
  const solution =
    question.anagramType === "SENTENCE"
      ? question.solution.split(" ").join(" ")
      : question.solution.split("").join("");

  const [submittedSolution, setSubmittedSolution] = useState("");
  const [correctness, setCorrectness] = useState(0);

  const check = (text) => {
    setSubmittedSolution((prev) =>
      question.anagramType === "SENTENCE" ? prev + text + " " : prev + text
    );
  };

  const uncheck = (text) => {
    setSubmittedSolution((prev) =>
      question.anagramType === "SENTENCE"
        ? prev.replace(text + " ", "")
        : prev.replace(text, "")
    );
  };

  const getCorrectnessPercentage = () => {
    console.log(correctness);
    const length = Math.max(solution.length, submittedSolution.trim.length);
    let correctChars = 0;
    for (let i = 0; i < length; i++) {
      if (solution[i] === submittedSolution[i]) {
        correctChars++;
      }
    }
    return (correctChars / length) * 100;
  };

  useEffect(() => {
    console.log(submittedSolution);
    setCorrectness(getCorrectnessPercentage());
  }, [submittedSolution]);

  return (
    <>
      <div className={styles.anagram}>
        <p className={styles.questionType}>Anagram</p>
        <p className={styles.questionTitle}>{question.title}</p>
        {question.blocks.map((block, index) => (
          <Blocks
            key={`${question._id}${index}`}
            text={block.text}
            check={check}
            uncheck={uncheck}
          />
        ))}
        <div className={styles.progressContainer}>
          <div className={styles.progress}>
            <div
              className={styles.loader}
              style={{ width: `${correctness}%` }}
            ></div>
          </div>
          <p className={styles.percentage}>{correctness.toFixed(2)}%</p>
        </div>
      </div>
    </>
  );
};

export default Anagram;
