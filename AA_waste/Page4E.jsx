import React from 'react'
import img1 from './Asset/IMG4_1.jpg'
import './page4.css'

// npm install react-slick --save
// npm install slick-carousel --save

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Page4E() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className='container'>
            <h1 className='header'> OUR EXPERTS </h1>
            <div className="body">
                <div className='slide-container'>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.name} className="slide-content">
                                <div className="card-wrapper">
                                    <div className="card">
                                        <div className="image-content">
                                            <span className='overlayc'></span>

                                            <div className="card-image">
                                                <img src={d.img} alt="" className="card-img" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="name">{d.name}</h2>
                                            <p className="description">{d.review}</p>
                                            <button className="button">View more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: `ALOK RAJ`,
        img: img1,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Ellie Anderson`,
        img: img1,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Nia Adebayo`,
        img: img1,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Rigo Louie`,
        img: img1,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Mia Williams`,
        img: img1,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

];

export default Page4E;