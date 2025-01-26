import styles from "../styles/options.module.css";

const Options = ({ isCorrectAnswer, text, selected, setSelected }) => {
  return (
    <>
      <p
        className={styles.option}
        onClick={() => setSelected(text)}
        style={{
          backgroundColor:
            selected === text
              ? isCorrectAnswer
                ? "rgb(89, 255, 56)"
                : "rgb(255, 56, 56)"
              : "white",
          color: selected === text ? "white" : "black",
        }}
      >
        {text}
      </p>
    </>
  );
};

export default Options;
