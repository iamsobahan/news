import React from 'react';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import documentaryImg2 from '../../../images/documentaryBanner2.png';
import topStories from '../../../images/topStories.png';
import Slider from 'react-slick';

const DocumentaryEditors = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    arrow: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="documentaryEditors">
      <div className="container">
        <div className="shorboshesh__title text-center py-4 mb-3">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            এডিটরস পিক
          </h1>
        </div>
        <Slider {...settings}>
          <div className="d-flex">
            <div className="w-50">
              <iframe
                width="100%"
                height="606"
                src="https://www.youtube.com/embed/4ykAepVkG5Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-50">
              <div className="d-flex flex-wrap">
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={topStories} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryEditors__content-overlay-content-icon">
                        <div className="mx-2">
                          <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                        </div>
                        <div className="mx-2">
                          <AiOutlineEye className="me-1" />
                          ১০০০
                        </div>
                        <div className="mx-2">
                          <BiComment className="me-1" />
                          ৪৭
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={topStories} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryEditors__content-overlay-content-icon">
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
                </div>
                <div className="w-100">
                  <div className="documentaryBanner__content">
                    <img
                      className="documentaryBanner__content-img"
                      src={documentaryImg2}
                      alt=""
                    />
                    <div
                      style={{ paddingTop: '150px' }}
                      className="documentaryBanner__content-overlay"
                    >
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryBanner__content-overlay-content-icon size">
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
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50">
              <iframe
                width="100%"
                height="590"
                src="https://www.youtube.com/embed/4ykAepVkG5Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-50">
              <div className="d-flex flex-wrap">
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={topStories} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryEditors__content-overlay-content-icon">
                        <div className="mx-2">
                          <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                        </div>
                        <div className="mx-2">
                          <AiOutlineEye className="me-1" />
                          ১০০০
                        </div>
                        <div className="mx-2">
                          <BiComment className="me-1" />
                          ৪৭
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={topStories} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryEditors__content-overlay-content-icon">
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
                </div>
                <div className="w-100">
                  <div className="documentaryBanner__content">
                    <img
                      className="documentaryBanner__content-img"
                      src={documentaryImg2}
                      alt=""
                    />
                    <div
                      style={{ paddingTop: '150px' }}
                      className="documentaryBanner__content-overlay"
                    >
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryBanner__content-overlay-content-icon size">
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
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="w-50">
              <iframe
                width="100%"
                height="590"
                src="https://www.youtube.com/embed/4ykAepVkG5Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-50">
              <div className="d-flex flex-wrap">
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={topStories} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryEditors__content-overlay-content-icon">
                        <div className="mx-2">
                          <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                        </div>
                        <div className="mx-2">
                          <AiOutlineEye className="me-1" />
                          ১০০০
                        </div>
                        <div className="mx-2">
                          <BiComment className="me-1" />
                          ৪৭
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={topStories} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryEditors__content-overlay-content-icon">
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
                </div>
                <div className="w-100">
                  <div className="documentaryBanner__content">
                    <img
                      className="documentaryBanner__content-img"
                      src={documentaryImg2}
                      alt=""
                    />
                    <div
                      style={{ paddingTop: '150px' }}
                      className="documentaryBanner__content-overlay"
                    >
                      <h3>
                        পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                        জনসন
                      </h3>
                      <div className="documentaryBanner__content-overlay-content-icon size">
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
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default DocumentaryEditors;
