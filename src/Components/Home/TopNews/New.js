import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import top from '../../../images/top.jpg';

import './TopNews.css';
import { useNavigate } from 'react-router-dom';

const New = (props) => {
  const Navigate = useNavigate();

  const clickHandler = (slug) => {
    Navigate(`/details/${slug}`);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="title text-center py-4">
        <h1 style={{ fontWeight: '900' }}>টপ নিউজ</h1>
      </div>
      {props.newData ? (
        <Slider {...settings}>
          {props?.newData.map((item) => {
            return (
              <div className="topNews" onClick={() => clickHandler(item.slug)}>
                <div className="custom__img__overlay__contentActive">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 ">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <h3 className="text-dark fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                    {item.title}
                  </h3>
                </div>

                <img
                  className="w-100"
                  src={`https://api.bestaid.com.bd/${item.image}`}
                  alt=""
                />
                <div className="TopNewsoverlay">
                  <div className="TopNewsoverlay__content">
                    <div className="d-flex justify-content-between align-items-center p-3 pb-0 TopNewsoverlay__hover">
                      <small className="text-danger fw-bolder">বাংলাদেশ</small>
                      <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                    </div>
                    <div style={{ padding: '80px 0' }}>
                      <h3
                        style={{ fontWeight: '500' }}
                        className="text-white fw-normal text-center fs-5 mb-0 mt-4 px-3 pb-3"
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div
          style={{ width: '3rem', height: '3rem' }}
          class="spinner-border position-absolute start-50"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default New;
