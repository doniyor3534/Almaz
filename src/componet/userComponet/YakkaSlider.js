import React from "react";

const YakkaSlider = () => {
  return (
    <div id="maxsulotHaqida">
      <div className="pad  yakkaCorus" >
        <img src="./img/BlobShape_view.svg" className="yakkaDoira" alt="animatsiya" />
        <div className="firstCorus">
          <img src="./img/pachka.png" alt="karobka" />
        </div>
        <div className="firstCorus">
          <h1>
            ai - ma7 <br />
            Xavfsiz ustarasi
          </h1>
          <p>
            Bo‘yoq berilgan chidamli nerjaveykadan yasalgan ustara. <br />{" "}
            <br /> Lezviyani qulay almashtirish uchun qulayliklarga ega
            bo‘lganligi bilan boshqa ustaralardan farq qiluvchi yangicha
            maxsulot. <br /> <br /> Endigina ish boshlagan barberlar uchun ham,
            professional barberlar uchun ham qulay.
          </p>
              <p>Keyingi rasmlar</p>
          <div className="sliderCounters">
            <button className="sliderItems sliderItems sliderPrev">
              <img src="./img/left.svg" alt="left" />
            </button>
            <div className="sliderScroll">
              <span className="sliderBox activ start" data-key="01"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox"></span>
              <span className="sliderBox end" data-key="11"></span>
            </div>
            <button className="slidernex sliderItems">
              <img src="./img/left.svg" alt="left" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YakkaSlider;
