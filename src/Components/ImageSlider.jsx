import React from "react";
import Data from "./Data";

const ImageSlider = () => {
  return (
    <>
      {Data.map((slide, index) => {
        return <img src={slide} alt="travel" key={index} />;
      })}
    </>
  );
};

export default ImageSlider;