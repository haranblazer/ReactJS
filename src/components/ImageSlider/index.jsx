import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider(url, page, limit) {
  const [Images, setImages] = useState([]);
  const [Slide, setSlide] = useState(0);
  const [ErrMessage, setErrMesssage] = useState(null);
  const [Laoding, setLoading] = useState(false);

  function handlePrevious() {
    setSlide(Slide === 0 ? Images.length - 1 : Slide - 1);
  }

  function handleNext() {
    setSlide(Slide === Images.length - 1 ? 0 : Slide + 1);
  }

  async function fetchImages(getURL) {
    try {
      console.log("URL : ", getURL.url);
      const response = await fetch(
        `${getURL.url}?page=${getURL.page}&limit=${getURL.limit}`
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(true);
      } else {
        setErrMesssage("Not Found");
      }
    } catch (err) {
      setErrMesssage(`Error Occured : ${err}`);
    }
  }

  useEffect(() => {
    fetchImages(url);
  }, [url]);

  return (
    <div className="header">
      <h1>Project 4 : Image Slider</h1>
      <div className="row colorblue">
      Current Slide No is : {Slide}
      </div>
      <div className="main">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {Images.map((item, index) => (
          <img
            className={Slide === index ? "image" : "image hide-image"}
            key={item.id}
            src={item.download_url}
            alt={item.author}
          />
        ))}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {Images.map((_, index) => (
            <button
              key={index}
              className={
                Slide === index ? "current-indicator" : "current-indicator hide-indicator"
              }
              onClick={() => setSlide(index)}
            ></button>
          ))}
        </span>
      </div>
    
      {!Laoding && <>Loading.... Please wait!</>}
      {ErrMessage !== "" && ErrMessage}
    </div>
  );
}
