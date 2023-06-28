import Image1 from "./gallery-images/gellery1.jpg";
import Image2 from "./gallery-images/gallery2.jpg";
import Image3 from "./gallery-images/gallery3.jpg";
import React, { useState, useEffect } from "react";

const ImageGallery = ({ images, interval = 6000 }) => {
  images = [Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setNextIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setNextIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          width="600px"
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`slide ${index === currentIndex ? "active" : ""} ${
            index === nextIndex ? "next" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
