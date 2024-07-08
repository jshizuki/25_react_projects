import { useState, useEffect } from "react";
import { getImages } from "../utils/pexelsApi";

function ImageSlider() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    getImages().then((images) => {
      setPhotoData(images);
    });
  }, []);

  console.log(photoData);

  return (
    <div>
      {photoData.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.url} alt={data.alt} />
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
