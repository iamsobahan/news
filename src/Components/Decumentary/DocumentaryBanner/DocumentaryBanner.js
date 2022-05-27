import React from 'react';
import documentaryImg from '../../../images/documentaryBannner.png';
import documentaryImg2 from '../../../images/documentaryBanner2.png';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const DocumentaryBanner = () => {
  return (
    <div className="documentaryBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 mb-2">
            <iframe
              className="documentaryBanner-youtube"
              src="https://www.youtube.com/embed/6eOCceaS9h0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="d-flex flex-column documentaryBanner__left-response">
              <div className="documentaryBanner__content">
                <img
                  className="documentaryBanner__content-img"
                  src={documentaryImg}
                  alt=""
                />
                <div className="documentaryBanner__content-overlay">
                  <div className="documentaryBanner__content-overlay-content">
                    <small className="customRed">ইউরোপ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <h3>
                    পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
                  </h3>
                  <div className="documentaryBanner__content-overlay-content-icon">
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
              <div className="documentaryBanner__content">
                <img
                  className="documentaryBanner__content-img"
                  src={documentaryImg2}
                  alt=""
                />
                <div className="documentaryBanner__content-overlay">
                  <div className="documentaryBanner__content-overlay-content">
                    <small className="customRed">বাংলাদেশ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <h3>
                    পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
                  </h3>
                  <div className="documentaryBanner__content-overlay-content-icon">
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
    </div>
  );
};

export default DocumentaryBanner;
