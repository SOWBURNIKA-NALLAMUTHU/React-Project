import React, { useState } from "react";
import "./ToggleImage.css";
const ToggleImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://img.freepik.com/free-vector/hand-drawn-abstract-leaves-pattern_23-2149007620.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-collage-background_23-2149590537.jpg?t=st=1703798723~exp=1703799323~hmac=901c312cb9212839ad8b9431a70ac1676f0393060069e7eef30f239a20135968",
  ];
  const handleToggleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <div className="full-page-container">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt="ToggleImage"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <button onClick={handleToggleClick}>Toggle Image</button>
    </div>
  );
};
export default ToggleImage;
