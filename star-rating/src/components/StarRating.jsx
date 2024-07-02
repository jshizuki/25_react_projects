import { useState } from "react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import "../css/StarRating.css";

export default function StarRating({ numberOfStars }) {
  const booleanValues = Array(numberOfStars).fill(false);

  const [stars, setStars] = useState(booleanValues);

  const handleStarHover = (clickedIndex) => {
    setStars((prev) => {
      return prev.map((_, index) => index <= clickedIndex)
    });
  };

  console.log(stars);

  return (
    <div className="container">
      {stars.map((star, index) => {
        return (
          <div
            key={index}
            className="star"
            onClick={() => handleStarHover(index)}
          >
            {star === false ? <IoIosStarOutline /> : <IoIosStar />}
          </div>
        );
      })}
    </div>
  );
}
