import React, { useRef, useState } from "react";
import Slider from "react-slick";
export const SliderUstara = () => {
  const [sliderCount, setSliderCounnt] = useState({
    activeSlide: null,
    activeSlide2: null,
    count: [],
  });
  const ref = useRef();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rtl: true,
    beforeChange: (current, next) => {
      setSliderCounnt({ ...sliderCount, activeSlide: next });
    },
    afterChange: (current) =>
      setSliderCounnt({ ...sliderCount, activeSlide: current }),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(ref);

  const nextClick = () => {
    ref.current.slickNext();
  };
  const PrevClick = () => {
    ref.current.slickPrev();
  };
  return (
    <div className="ustaraCorusel">
      <div className="sliderHeader pad">
        <h1>
          Barcha <br /> mahsulotlar
        </h1>
        <div className="sliderScroll">
          <span className="sliderBox activ start" data-key = "01"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox"></span>
          <span className="sliderBox end" data-key = "11"></span>
        </div>
      </div>
      <br />
      <br />
      <img src="./img/BlobShape__1.svg"  className="coruselDetil" alt="suzuchi" />
      <Slider ref={ref} {...settings}>
        <div>
          <div>
            <div className="cardUstara">
              <img src="./img/ustara.png" alt="ustara" />
              <div className="ustaraText">
                <div className="ustarBox">
                  <h1>AI - MA7</h1>
                  <p>Bo‘yoq berilgan nerjaveyka</p>
                </div>
                <p className="ustarBox">250 000 so‘m</p>
              </div>
              <button className="zoom_">
                <img src="./img/zoom.svg" alt="zoom" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cardUstara">
              <img src="./img/ustara.png" alt="ustara" />
              <div className="ustaraText">
                <div className="ustarBox">
                  <h1>AI - MA7</h1>
                  <p>Bo‘yoq berilgan nerjaveyka</p>
                </div>
                <p className="ustarBox">250 000 so‘m</p>
              </div>
              <button className="zoom_">
                <img src="./img/zoom.svg" alt="zoom" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cardUstara">
              <img src="./img/ustara.png" alt="ustara" />
              <div className="ustaraText">
                <div className="ustarBox">
                  <h1>AI - MA7</h1>
                  <p>Bo‘yoq berilgan nerjaveyka</p>
                </div>
                <p className="ustarBox">250 000 so‘m</p>
              </div>
              <button className="zoom_">
                <img src="./img/zoom.svg" alt="zoom" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cardUstara">
              <img src="./img/ustara.png" alt="ustara" />
              <div className="ustaraText">
                <div className="ustarBox">
                  <h1>AI - MA7</h1>
                  <p>Bo‘yoq berilgan nerjaveyka</p>
                </div>
                <p className="ustarBox">250 000 so‘m</p>
              </div>
              <button className="zoom_">
                <img src="./img/zoom.svg" alt="zoom" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cardUstara">
              <img src="./img/ustara.png" alt="ustara" />
              <div className="ustaraText">
                <div className="ustarBox">
                  <h1>AI - MA7</h1>
                  <p>Bo‘yoq berilgan nerjaveyka</p>
                </div>
                <p className="ustarBox">250 000 so‘m</p>
              </div>
              <button className="zoom_">
                <img src="./img/zoom.svg" alt="zoom" />
              </button>
            </div>
          </div>
        </div>
      </Slider>
    <a href="#maxsulotHaqida">
    <button className="btn_ maxsulot_btn">MAHSULOT HAQIDA</button>
    </a>
      <button
        className="sliderItems sliderItems sliderPrev"
        onClick={PrevClick}
      >
        <img src="./img/left.svg" alt="left" />
      </button>
      <button className="slidernex sliderItems" onClick={nextClick}>
        <img src="./img/left.svg" alt="left" />
      </button>
    </div>
  );
};
