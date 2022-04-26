import React from 'react';
import './TopNews.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper';
import top from '../../../images/top.jpg';
import top2 from '../../../images/top2.jpg';
import top3 from '../../../images/top3.jpg';
import top4 from '../../../images/top4.jpg';
import top5 from '../../../images/top5.jpg';
import top6 from '../../../images/top6.jpg';

const TopNews = () => {
  return (
    <>
      <div className="container top-container">
        <div className="title text-center py-4">
          <h1 style={{ fontWeight: '900' }}>টপ নিউজ</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          slidesPerGroup={3}
          navigation={true}
          modules={[Navigation]}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="custom__container">
              <div className="custom__img__overlay__contentActive">
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <small className="text-danger fw-bolder">বাংলাদেশ</small>
                  <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                </div>
                <h3 className="text-dark  fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                  'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                </h3>
              </div>
              <img className="custom__img" src={top} alt="" />
              <div className="custom__img__overlay ">
                <div className="custom__img__overlay__content">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 custom__overlay__hover">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <div style={{ padding: '80px 0' }}>
                    <h3
                      style={{ fontWeight: '500' }}
                      className="text-dark text-center fs-5 mb-0 mt-4 px-3 pb-3"
                    >
                      'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="custom__container">
              <div className="custom__img__overlay__contentActive">
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <small className="text-danger fw-bolder">বাংলাদেশ</small>
                  <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                </div>
                <h3 className="text-dark  fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                  'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                </h3>
              </div>
              <img className="custom__img" src={top4} alt="" />
              <div className="custom__img__overlay ">
                <div className="custom__img__overlay__content">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 custom__overlay__hover">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <div style={{ padding: '80px 0' }}>
                    <h3
                      style={{ fontWeight: '500' }}
                      className="text-dark text-center fs-5 mb-0 mt-4 px-3 pb-3"
                    >
                      'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="custom__container">
              <div className="custom__img__overlay__contentActive">
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <small className="text-danger fw-bolder">বাংলাদেশ</small>
                  <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                </div>
                <h3 className="text-dark  fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                  'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                </h3>
              </div>
              <img className="custom__img" src={top5} alt="" />
              <div className="custom__img__overlay ">
                <div className="custom__img__overlay__content">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 custom__overlay__hover">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <div style={{ padding: '80px 0' }}>
                    <h3
                      style={{ fontWeight: '500' }}
                      className="text-dark text-center fs-5 mb-0 mt-4 px-3 pb-3"
                    >
                      'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom__container">
              <div className="custom__img__overlay__contentActive">
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <small className="text-danger fw-bolder">বাংলাদেশ</small>
                  <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                </div>
                <h3 className="text-dark  fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                  'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                </h3>
              </div>
              <img className="custom__img" src={top2} alt="" />
              <div className="custom__img__overlay ">
                <div className="custom__img__overlay__content">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 custom__overlay__hover">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <div style={{ padding: '80px 0' }}>
                    <h3
                      style={{ fontWeight: '500' }}
                      className="text-dark text-center fs-5 mb-0 mt-4 px-3 pb-3"
                    >
                      'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="custom__container">
              <div className="custom__img__overlay__contentActive">
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <small className="text-danger fw-bolder">বাংলাদেশ</small>
                  <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                </div>
                <h3 className="text-dark  fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                  'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                </h3>
              </div>
              <img className="custom__img" src={top3} alt="" />
              <div className="custom__img__overlay ">
                <div className="custom__img__overlay__content">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 custom__overlay__hover">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <div style={{ padding: '80px 0' }}>
                    <h3
                      style={{ fontWeight: '500' }}
                      className="text-dark text-center fs-5 mb-0 mt-4 px-3 pb-3"
                    >
                      'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom__container">
              <div className="custom__img__overlay__contentActive">
                <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                  <small className="text-danger fw-bolder">বাংলাদেশ</small>
                  <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                </div>
                <h3 className="text-dark  fs-5 mb-0 mt-4 px-3 pb-3 fw-bold text-center">
                  'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                </h3>
              </div>
              <img className="custom__img" src={top6} alt="" />
              <div className="custom__img__overlay ">
                <div className="custom__img__overlay__content">
                  <div className="d-flex justify-content-between align-items-center p-3 pb-0 custom__overlay__hover">
                    <small className="text-danger fw-bolder">বাংলাদেশ</small>
                    <small className="text-dark fw-normal">১ ঘণ্টা আগে</small>
                  </div>
                  <div style={{ padding: '80px 0' }}>
                    <h3
                      style={{ fontWeight: '500' }}
                      className="text-dark text-center fs-5 mb-0 mt-4 px-3 pb-3"
                    >
                      'ডাবল ডোজেই ঢুকছে ভারতীরা, বাংলাদেশিদের যে ভিন্ন নিম'
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="custom__img" src={top2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TopNews;
