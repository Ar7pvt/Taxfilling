import React from 'react'
import './page4.css'


// npm install react-slick --save
// npm install slick-carousel --save

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../Asset/IMG4_1.jpg'

export default function Page4() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
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
    <div className="container">
      <h1 className='header'> OUR EXPERTS </h1>
      <div className="body">
        <div className='slide-container'>
        <Slider {...settings}>
              <div className="slide-content">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-content">
                      <span className='overlayc'></span>

                      <div className="card-image">
                        <img src={img1} className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Alok raj </h2>
                      <p className="description">This is alok raj from cse ai 3rd year and
                        my domain is Computing </p>

                      <button className="button">View more</button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="slide-content">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-content">
                      <span className='overlayc'></span>

                      <div className="card-image">
                        <img src={img1} className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Alok raj </h2>
                      <p className="description">This is alok raj from cse ai 3rd year and
                        my domain is Computing </p>

                      <button className="button">View more</button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="slide-content">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-content">
                      <span className='overlayc'></span>

                      <div className="card-image">
                        <img src={img1} className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Alok raj </h2>
                      <p className="description">This is alok raj from cse ai 3rd year and
                        my domain is Computing premrawani </p>

                      <button className="button">View more</button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="slide-content">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-content">
                      <span className='overlayc'></span>

                      <div className="card-image">
                        <img src={img1} className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Alok raj </h2>
                      <p className="description">This is alok raj from cse ai 3rd year and
                        my domain is Computing  shivshankar</p>

                      <button className="button">View more</button>
                    </div>
                  </div>
                </div>
              </div>
           </Slider>
        </div>
      </div>
    </div>
  )
}
