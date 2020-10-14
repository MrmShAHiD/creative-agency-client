import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carImage1 from '../../../images/carousel-1.png';
import carImage2 from '../../../images/carousel-2.png';
import carImage3 from '../../../images/carousel-3.png';
import carImage4 from '../../../images/carousel-4.png';
import carImage5 from '../../../images/carousel-5.png';

const OurWorks = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        initialSlide: 0,
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
      };
    return (
        <div style={{backgroundColor:'#111430'}} class="bg-color p-5">
        <h2 class="text-center text-white"> Here are some of <span style={{color:'#7AB259'}}>our works</span></h2>
        <Slider {...settings} class="mt-5">
          <div>
            <img class="img-fluid p-3" src={carImage1} alt=""/>
          </div>
          <div>
            <img class="img-fluid p-3" src={carImage2} alt=""/>
          </div>
          <div>
            <img style={{width:'500px', height:'370px'}} class="img-fluid p-3" src={carImage3} alt=""/>
          </div>
          <div>
            <img class="img-fluid p-3" src={carImage4} alt=""/>
          </div>
          <div>
            <img class="img-fluid p-3" src={carImage5} alt=""/>
          </div>
          <div>
            <img style={{width:'500px', height:'370px'}} class="img-fluid p-3" src={carImage3} alt=""/>
          </div>
          <div>
            <img class="img-fluid p-3" src={carImage1} alt=""/>
          </div>
          <div>
            <img class="img-fluid p-3" src={carImage2} alt=""/>
          </div>
        </Slider>
      </div>
    );
};

export default OurWorks;