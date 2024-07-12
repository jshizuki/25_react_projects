import { useState, useEffect } from "react";
import { getImages } from "../utils/pexelsApi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./styles.css";

function ImageSlider() {
  const [photoData, setPhotoData] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    getImages().then((images) => {
      setPhotoData(images);
    });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNextImage(currentImage);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [currentImage]);

  const handlePreviousImage = (photoIndex) => {
    setCurrentImage(photoIndex === 0 ? photoData.length - 1 : currentImage - 1);
  };

  const handleNextImage = (photoIndex) => {
    setCurrentImage(photoIndex === photoData.length - 1 ? 0 : currentImage + 1);
  };

  const handleIndicatorClick = (photoIndex) => {
    setCurrentImage(photoIndex);
  };

  return (
    <div className="container">
      <MdOutlineKeyboardArrowLeft
        className="arrow arrow-left"
        onClick={() => handlePreviousImage(currentImage)}
      />
      {photoData.map((photoItem, index) => {
        return (
          <img
            key={photoItem.id}
            src={photoItem.src}
            alt={photoItem.alt}
            className={
              currentImage === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        );
      })}
      <MdOutlineKeyboardArrowRight
        className="arrow arrow-right"
        onClick={() => handleNextImage(currentImage)}
      />
      <div className="circle-indicators">
        {photoData.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={
                currentImage === index
                  ? "circle-indicator current"
                  : "circle-indicator"
              }
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
