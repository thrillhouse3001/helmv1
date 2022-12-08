import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageOne from "../public/images/1.png";
import imageTwo from "../public/images/4.png";
import imageThree from "../public/images/3.png";

import nextButton from "../public/images/next.svg";
import prevButton from "../public/images/prev.svg";

import YoutubeEmbed from "./YoutubeEmbed";

const featuredImages = [imageOne, imageTwo, imageThree];
let count = 0;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageType, setImageType] = useState(true);

  /*
  useEffect(() => {
    document.title = `index: ${currentIndex} it: ${imageType}`;
  }, [currentIndex]);\*/

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);

    if (count == 0) {
      setImageType(true);
    } else {
      setImageType(false);
    }
  };

  const handleOnPrevClick = () => {
    const imagesLength = featuredImages.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);

    if (count == 0) {
      setImageType(true);
    } else {
      setImageType(false);
    }
  };

  const renderImage = () => (
    <div className="items-center">
      <Image
        src={featuredImages[currentIndex]}
        className="aspect=w-16 aspect-h-9"
        alt="/"
      />
    </div>
  );

  const renderYoutube = () => (
    <div className="items-center ">
      <YoutubeEmbed embedId="H1WQI6IVF_U" className="aspect=w-16 aspect-h-9" />
    </div>
  );

  return (
    <div className="select-none">
      <div className="w-[960px] h-[540px]">
        {imageType ? renderYoutube() : renderImage()}
      </div>
      <div className="absolute w-[960px] top-1/2 transform translate-y-[85px] flex justify-between items-center align-middle px-[10px]">
        <button onClick={handleOnPrevClick}>
          <Image
            src={prevButton}
            className="opacity-40 hover:opacity-100"
            alt="/"
          />
        </button>
        <button onClick={handleOnNextClick}>
          <Image
            src={nextButton}
            className="opacity-40 hover:opacity-100"
            alt="/"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
//https://youtu.be/ho93e0IhdTA?t=606
