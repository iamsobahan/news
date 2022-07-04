import React from 'react';
import shorbosheshslideImg from '../../../images/shorbo1.png';
import shorbosheshslideImg2 from '../../../images/shorboshesh2.png';
import shorbosheshslideImg3 from '../../../images/shorboshesh3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Shorbosheshslider.css';

const Shorbosheshslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,

    // fade: true,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
  };
  return (
    <div className="shorbosheshSlide">
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="d-flex">
              <div className="w-25 text-center">
                <p className="text-danger fw-bold">রাজনীতি</p>
                <small style={{ fontSize: '12px', fontWeight: '600' }}>
                  ১০ মিনিট আগ
                </small>
              </div>
              <div className="w-75">
                <div>
                  <img
                    className="mx-auto img-fluid"
                    src={shorbosheshslideImg}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h6>
                    রাজধানীর হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর এলাকা থেকে
                    দুইজন রোহিঙ্গা ....
                  </h6>
                  <small>জেলে বসেই ছিনতাইয়ের পরিকল্পনা, টার্গেট ব্যবসায়ী</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="w-25 text-center">
                <p className="text-danger fw-bold">রাজনীতি</p>
                <small style={{ fontSize: '12px', fontWeight: '600' }}>
                  ১০ মিনিট আগ
                </small>
              </div>
              <div className="w-75">
                <div>
                  <img
                    className="mx-auto img-fluid"
                    src={shorbosheshslideImg2}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h6>
                    রাজধানীর হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর এলাকা থেকে
                    দুইজন রোহিঙ্গা ....
                  </h6>
                  <small>জেলে বসেই ছিনতাইয়ের পরিকল্পনা, টার্গেট ব্যবসায়ী</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="w-25 text-center">
                <p className="text-danger fw-bold">রাজনীতি</p>
                <small style={{ fontSize: '12px', fontWeight: '600' }}>
                  ১০ মিনিট আগ
                </small>
              </div>
              <div className="w-75">
                <div>
                  <img
                    className="mx-auto img-fluid"
                    src={shorbosheshslideImg3}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h6>
                    রাজধানীর হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর এলাকা থেকে
                    দুইজন রোহিঙ্গা ....
                  </h6>
                  <small>জেলে বসেই ছিনতাইয়ের পরিকল্পনা, টার্গেট ব্যবসায়ী</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="w-25 text-center">
                <p className="text-danger fw-bold">বিনোদন</p>
                <small style={{ fontSize: '12px', fontWeight: '600' }}>
                  ১০ মিনিট আগ
                </small>
              </div>
              <div className="w-75">
                <div>
                  <img
                    className="mx-auto img-fluid"
                    src={shorbosheshslideImg}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h6>
                    রাজধানীর হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর এলাকা থেকে
                    দুইজন রোহিঙ্গা ....
                  </h6>
                  <small>জেলে বসেই ছিনতাইয়ের পরিকল্পনা, টার্গেট ব্যবসায়ী</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="w-25 text-center">
                <p className="text-danger fw-bold">বিজ্ঞান</p>
                <small style={{ fontSize: '12px', fontWeight: '600' }}>
                  ১০ মিনিট আগ
                </small>
              </div>
              <div className="w-75">
                <div>
                  <img
                    className="mx-auto img-fluid"
                    src={shorbosheshslideImg2}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h6>
                    রাজধানীর হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর এলাকা থেকে
                    দুইজন রোহিঙ্গা ....
                  </h6>
                  <small>জেলে বসেই ছিনতাইয়ের পরিকল্পনা, টার্গেট ব্যবসায়ী</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="w-25 text-center">
                <p className="text-danger fw-bold">বানিজ্য</p>
                <small style={{ fontSize: '12px', fontWeight: '600' }}>
                  ১০ মিনিট আগ
                </small>
              </div>
              <div className="w-75">
                <div>
                  <img
                    className="mx-auto img-fluid"
                    src={shorbosheshslideImg3}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h6>
                    রাজধানীর হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর এলাকা থেকে
                    দুইজন রোহিঙ্গা ....
                  </h6>
                  <small>জেলে বসেই ছিনতাইয়ের পরিকল্পনা, টার্গেট ব্যবসায়ী</small>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Shorbosheshslider;
