import { useState } from "react";
import Button from "@mui/material/Button";
import styles from "../css/RandomColor.module.css";

function RandomColor() {
  const [rgb, setRgb] = useState([128, 128, 128]);

  const generateValue = () => {
    return Math.floor(Math.random() * 256);
  };

  const handleColorGeneration = () => {
    const red = generateValue();
    const blue = generateValue();
    const green = generateValue();

    setRgb([red, green, blue]);
  };

  const rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

  return (
    <div className={styles.container} style={{ backgroundColor: rgbColor }}>
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleColorGeneration}
      >
        Generate color
      </Button>
    </div>
  );
}

export default RandomColor;
