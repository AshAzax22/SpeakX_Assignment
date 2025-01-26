import { useState } from "react";
import Styles from "../styles/blocks.module.css";

const Blocks = ({ text, check, uncheck }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      uncheck(text);
    } else {
      check(text);
    }
  };

  return (
    <>
      <div
        className={Styles.block}
        style={
          isChecked
            ? { backgroundColor: "#003cff", color: "#fff" }
            : { backgroundColor: "#fff", color: "#000" }
        }
        onClick={handleCheckboxChange}
      >
        {text}
      </div>
    </>
  );
};

export default Blocks;
