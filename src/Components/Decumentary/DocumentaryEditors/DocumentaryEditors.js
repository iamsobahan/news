import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { BiComment, BiTimeFive } from 'react-icons/bi';
import { BsFillPlayCircleFill } from "react-icons/bs";
import Slider from 'react-slick';

const DocumentaryEditors = ({editorPic}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="documentaryEditors">
      <div className="container">
      <Modal className="bg-transparent" centered show={show} onHide={handleClose}>
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
            <div className='position-relative'>
            <img src={`https://api.bestaid.com.bd/${editorPic[0]?.image}`} alt="image" className='img-fluid'/>
            <div style={{background: "rgb(0 0 0 / 73%)"}} className="overlay position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center"><BsFillPlayCircleFill onClick={()=>setShow(true)} className='fs-2 text-danger'/>
            <br />
            <div className='text-light text__position align' dangerouslySetInnerHTML={{__html:editorPic[0]?.description}}></div>
            </div>
          </div>
            </div>
            <div className="w-50">
              <div className="d-flex flex-wrap">
                <div className="w-50">
                  <div className="documentaryEditors__content">
                    <img className="img-fluid" src={`https://api.bestaid.com.bd/${editorPic[1]?.image}`} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <div style={{ paddingTop: '50px' }} className='text-light text-center' dangerouslySetInnerHTML={{__html:editorPic[1]?.description}}></div>
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
                    <img className="img-fluid" src={`https://api.bestaid.com.bd/${editorPic[2]?.image}`} alt="" />
                    <div className="documentaryEditors__content-overlay">
                      <div className="documentaryEditors__content-overlay-content">
                        <small className="customRed">ইউরোপ</small>
                        <small className="text-white">২১ এপ্রিল ২০২২</small>
                      </div>
                      <div style={{ paddingTop: '50px' }} className='text-light text-center' dangerouslySetInnerHTML={{__html:editorPic[2]?.description}}></div>
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
                      src={`https://api.bestaid.com.bd/${editorPic[3]?.image}`}
                      alt=".."
                    />
                    <div
                      style={{ paddingTop: '150px' }}
                      className="documentaryBanner__content-overlay"
                    >
                      <div className='text-light' dangerouslySetInnerHTML={{__html:editorPic[3]?.description}}></div>
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
