import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { BiComment, BiTimeFive } from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const DocumentaryBanner = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className="documentaryBanner">
      <div className="container">
        <Modal
          className="bg-transparent"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Body>
            <iframe
              className="documentaryBanner-youtube w-100 h-100"
              src="https://www.youtube.com/embed/6eOCceaS9h0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 mb-2">
            <div className="position-relative">
              <img
                src={`https://api.bestaid.com.bd/${data[0]?.image}`}
                alt="image"
                className="img-fluid"
              />
              <div
                style={{ background: 'rgb(0 0 0 / 73%)' }}
                className="overlay position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center"
              >
                <BsFillPlayCircleFill
                  onClick={() => setShow(true)}
                  className="fs-2 text-danger"
                />
                <br />
                <div
                  className="text-light text__position align"
                  dangerouslySetInnerHTML={{ __html: data[2]?.description }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="d-flex flex-column documentaryBanner__left-response">
              <div className="documentaryBanner__content">
                <img
                  className="documentaryBanner__content-img"
                  src={`https://api.bestaid.com.bd/${data[1]?.image}`}
                  alt=""
                />
                <div className="documentaryBanner__content-overlay">
                  <div className="documentaryBanner__content-overlay-content">
                    <small className="customRed">ইউরোপ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <div
                    className="text-light align"
                    dangerouslySetInnerHTML={{ __html: data[2]?.description }}
                  ></div>
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
                  src={`https://api.bestaid.com.bd/${data[2]?.image}`}
                  alt=""
                />
                <div className="documentaryBanner__content-overlay">
                  <div className="documentaryBanner__content-overlay-content">
                    <small className="customRed">বাংলাদেশ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <div
                    className="text-light align"
                    dangerouslySetInnerHTML={{ __html: data[2]?.description }}
                  ></div>
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
