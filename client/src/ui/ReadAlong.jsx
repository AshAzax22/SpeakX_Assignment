import styles from "../styles/readAlong.module.css";
const ReadAlong = ({ question }) => {
  return (
    <>
      <div className={styles.readAlong}>
        <p className={styles.questionType}>{question.type}</p>
        <p className={styles.content}>{question.title}</p>
      </div>
    </>
  );
};

export default ReadAlong;
