import React, { useState } from 'react';
import './VideoShongbad.css';
import { Modal } from 'react-bootstrap';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const VideoShongbad = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div className="videoShongbad">
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
              src={`https://www.youtube.com/embed/${props.videoShongbadData[0].youtube_link}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="shorboshesh__title text-center py-4">
              <h1
                className="shorboshesh__title__paragraph"
                style={{ fontWeight: '900' }}
              >
                ভিডিও সংবাদ
              </h1>
            </div>
            <div className="position-relative mt-5">
              <img
                src={`https://api.bestaid.com.bd/${props.videoShongbadData[0]?.image}`}
                alt="imag"
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
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="shorboshesh__title text-center py-4">
              <h1
                className="shorboshesh__title__paragraph"
                style={{ fontWeight: '900' }}
              >
                পরবর্তী ভিডিও
              </h1>
            </div>
            <div className="row">
              {props.videoShongbadSliderData.map((item) => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex mt-5 bg-white shadow-lg">
                        <img
                          style={{ width: '180px', height: '180px' }}
                          src={`https://api.bestaid.com.bd/${item.image}`}
                          alt=""
                        />
                        <div className="p-3">
                          <h4 className="text-danger mb-3">বাংলাদেশ</h4>
                          <h5 className="fw-bold mt-3 fs-4">
                            {item.sub_title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-danger">আন্তর্জাতিক</h2>
            <h1 className="mt-4">{props.videoShongbadData[0].sub_title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShongbad;
