import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import top from '../../../images/top.jpg';
import top2 from '../../../images/top2.jpg';
import top3 from '../../../images/top3.jpg';
import top4 from '../../../images/top4.jpg';
import top5 from '../../../images/top5.jpg';
import top6 from '../../../images/top6.jpg';
import './TopNews.css';

const New = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    // fade: true,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
  };
  return (
    <div className="container">
      <div className="title text-center py-4">
        <h1 style={{ fontWeight: '900' }}>টপ নিউজ</h1>
      </div>
      <Slider {...settings}>
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center p-3 pb-0">
            <small className="text-danger fw-bolder">বাংলাদেশ</small>
            <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
          </div>
          <h3 className="text-dark fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
            'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
          </h3>
          <img className="w-100" src={top} alt="" />
        </div>
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center p-3 pb-0">
            <small className="text-danger fw-bolder">বাংলাদেশ</small>
            <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
          </div>
          <h3 className="text-dark fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
            'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
          </h3>
          <img className="w-100" src={top} alt="" />
        </div>
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center p-3 pb-0">
            <small className="text-danger fw-bolder">বাংলাদেশ</small>
            <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
          </div>
          <h3 className="text-dark fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
            'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
          </h3>
          <img className="w-100" src={top} alt="" />
        </div>
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center p-3 pb-0">
            <small className="text-danger fw-bolder">বাংলাদেশ</small>
            <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
          </div>
          <h3 className="text-dark fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
            'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
          </h3>
          <img className="w-100" src={top} alt="" />
        </div>
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center p-3 pb-0">
            <small className="text-danger fw-bolder">বাংলাদেশ</small>
            <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
          </div>
          <h3 className="text-dark fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
            'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
          </h3>
          <img className="w-100" src={top} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default New;
