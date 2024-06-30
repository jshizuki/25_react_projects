import { useState } from "react";
import styles from "../css/RandomColor.module.css";

export default function RandomColor() {
  const [rgb, setRgb] = useState([128, 128, 128]); // Gray by default
  const [hex, setHex] = useState("#808080");

  const generateValue = () => {
    return Math.floor(Math.random() * 256);
  };

  const handleColorGeneration = () => {
    const red = generateValue();
    const blue = generateValue();
    const green = generateValue();

    const newRgb = [red, green, blue];

    setRgb(newRgb);
    setHex(convertRgbToHex(newRgb));
  };

  function convertRgbToHex(arr) {
    const letters = Array.from({ length: 6 }, (_, i) =>
      String.fromCharCode(65 + i)
    );
    const lettersHexConversion = Array.from({ length: 6 }, (_, i) => 10 + i);

    const hexArray = [];

    arr.forEach((value, i) => {
      const hex = Math.floor(value / 16);

      const firstHex =
        hex < 10 ? hex : letters[lettersHexConversion.indexOf(hex)];

      const remainingValue = value - hex * 16;
      const secondHex =
        remainingValue < 10
          ? remainingValue
          : letters[lettersHexConversion.indexOf(remainingValue)];

      hexArray.push(firstHex, secondHex);
    });

    return `#${hexArray.join("")}`;
  }

  const rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

  return (
    <div className={styles.container} style={{ backgroundColor: rgbColor }}>
      <div>
        <h1 onClick={handleColorGeneration}>What's your color today?</h1>
        <p>{rgbColor}</p>
        <p>{hex}</p>
      </div>
    </div>
  );
}
