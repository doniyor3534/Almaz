import React, { Component, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";


const ProductItemCorusel = ({show})=>{
    const [slider,setSlider] = useState( {
        slideIndex: 0,
        updateCount: 0
      })
      const ref = useRef()
    var settings = {
        dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        afterChange: (next,n) =>{
            
            setSlider({...slider,updateCount:next})
        },
    //   beforeChange: (current, next) => {
    //     setSlider({...slider,slideIndex:next})
    //     this.setState({ slideIndex: next })},
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
      console.log(ref);
      const shows = (i)=>{
        console.log(i);
        if(3%i===0){
            // ref.current.slickPrev();
        }
      }
      return (
        <div>
          <h2> Responsive {slider.updateCount} </h2>
          <Slider ref={ref} {...settings}>
           {show.map((item,i)=>(
            <div key={i} >
                <div onClick={()=>shows(i)}>
                <LazyLoadImage
              className="d-block m-auto animate-img imgSlider"
              alt="sano one"
              effect="blur"
              src={item}  // use normal <img> attributes as props
            />
                </div>
            </div>
           ))}
          </Slider>
        </div>
      );
}
export default ProductItemCorusel;