import { useState } from "react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import "../css/StarRating.css";

export default function StarRating({ numberOfStars }) {
  const booleanValues = Array(numberOfStars).fill(false);
  const [rating, setRating] = useState(booleanValues);

  const handleRating = (clickedIndex) => {
    setRating((prev) => {
      return prev.map((_, index) => index <= clickedIndex);
    });
  };

  return (
    <div>
      <div className="background" onClick={() => handleRating(-1)}></div>
      <div className="stars">
        {rating.map((value, index) => {
          return (
            <div
              key={index}
              className="star"
              onClick={() => handleRating(index)}
            >
              {value ? <IoIosStar /> : <IoIosStarOutline />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
