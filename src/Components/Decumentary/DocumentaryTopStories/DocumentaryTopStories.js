import React from 'react';
import Slider from 'react-slick';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import topStories from '../../../images/topStories.png';

const DocumentaryTopStories = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="documentaryTopStories">
      <div className="container">
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            টপ স্টোরিজ
          </h1>
        </div>
        <Slider {...settings}>
          <div className="documentaryTopStories__content">
            <img
              className="documentaryTopStories__content-img"
              src={topStories}
              alt=""
            />
            <div className="documentaryTopStories__content-overlay">
              <div className="documentaryTopStories__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3>
                পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
              </h3>
              <div className="documentaryTopStories__content-overlay-content-icon">
                <div className="mx-3">
                  <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                </div>
                <div className="mx-3">
                  <AiOutlineEye className="me-1" />
                  ১০০০
                </div>
                <div className="mx-3">
                  <BiComment className="me-1" />
                  ৪৭
                </div>
              </div>
            </div>
          </div>
          <div className="documentaryTopStories__content">
            <img
              className="documentaryTopStories__content-img"
              src={topStories}
              alt=""
            />
            <div className="documentaryTopStories__content-overlay">
              <div className="documentaryTopStories__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3>
                পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
              </h3>
              <div className="documentaryTopStories__content-overlay-content-icon size">
                <div className="mx-3">
                  <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                </div>
                <div className="mx-3">
                  <AiOutlineEye className="me-1" />
                  ১০০০
                </div>
                <div className="mx-3">
                  <BiComment className="me-1" />
                  ৪৭
                </div>
              </div>
            </div>
          </div>
          <div className="documentaryTopStories__content">
            <img
              className="documentaryTopStories__content-img"
              src={topStories}
              alt=""
            />
            <div className="documentaryTopStories__content-overlay">
              <div className="documentaryTopStories__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3>
                পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
              </h3>
              <div className="documentaryTopStories__content-overlay-content-icon">
                <div className="mx-3">
                  <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                </div>
                <div className="mx-3">
                  <AiOutlineEye className="me-1" />
                  ১০০০
                </div>
                <div className="mx-3">
                  <BiComment className="me-1" />
                  ৪৭
                </div>
              </div>
            </div>
          </div>
          <div className="documentaryTopStories__content">
            <img
              className="documentaryTopStories__content-img"
              src={topStories}
              alt=""
            />
            <div className="documentaryTopStories__content-overlay">
              <div className="documentaryTopStories__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3>
                পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
              </h3>
              <div className="documentaryTopStories__content-overlay-content-icon">
                <div className="mx-3">
                  <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                </div>
                <div className="mx-3">
                  <AiOutlineEye className="me-1" />
                  ১০০০
                </div>
                <div className="mx-3">
                  <BiComment className="me-1" />
                  ৪৭
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default DocumentaryTopStories;
