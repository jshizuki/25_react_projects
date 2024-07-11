import { useState, useEffect } from "react";
import { getImages } from "../utils/pexelsApi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "./styles.css";

function ImageSlider() {
  const [photoData, setPhotoData] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    getImages().then((images) => {
      setPhotoData(images);
    });
  }, []);

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
      <IoIosArrowRoundBack
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
      <IoIosArrowRoundForward
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
