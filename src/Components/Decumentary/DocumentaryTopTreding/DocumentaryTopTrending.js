import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { BiComment, BiTimeFive } from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const DocumentaryTopTrending = ({ tending }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className="documentaryTopTrending customBgColor pt-5">
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
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            টপ ট্রেন্ডিং
          </h1>
        </div>

        <div className="row pt-3">
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                className="w-100"
                src={`https://api.bestaid.com.bd/${tending[0]?.image}`}
                alt="imag"
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
                {/* <div className='text-light text__position align' dangerouslySetInnerHTML={{__html:data[2]?.description}}></div> */}
              </div>
            </div>
            <div className="d-flex pt-2 size">
              <div className="me-3">
                <BiTimeFive className="me-2" />১ ঘণ্টা আগে
              </div>
              <div className="mx-3">
                <AiOutlineEye className="me-2" />
                ১০০০
              </div>
              <div className="mx-3">
                <BiComment className="me-2" />
                ৪৭
              </div>
            </div>
            <h2 className="py-3 black fw-bolder">
              লাহোরে সমাবেশ, ইসলামাবাদে আসার প্রস্তুতি নিতে বললেন ইমরান
            </h2>
            <p className="black">
              লাহোরে ব্যাপক জনসমাগমের মধ্য দিয়ে আরও একবার দলের শক্তি প্রদর্শন
              করল পাকিস্তান তেহরিক-ই-ইনসাফ (পিটিআই)। এবার রাজধানী ইসলামাবাদে
              আসতে নেতা–কর্মীসহ সাধারণ জনগণকে প্রস্তুত থাকতে বলেছেন দলের
              চেয়ারম্যান ও সাবেক প্রধানমন্ত্রী ইমরান খান। গতকাল বৃহস্পতিবার
              পিটিআইয়ের বহুল আলোচিত এই সমাবেশে লাহোরের গ্রেটার ইকবাল পার্কে
              নারী-পুরুষ, শিশু, বয়োজ্যেষ্ঠসহ হাজারো মানুষ অংশ নেন। তাঁরা
              স্লোগানে স্লোগানে সাবেক প্রধানমন্ত্রী ইমরান খানের প্রতি সমর্থন
              জানান। বিদেশি প্রভুদের ছড়ি ঘোরানোর প্রতিবাদ জানান। সার্বভৌমত্ব ও
              আত্মসম্মানবোধের প্রতি সমর্থন জানান।
            </p>
          </div>
          <div className="col-lg-6">
            {tending.map((content) => (
              <div className="d-flex pb-3">
                <div className="documentaryTopTrending__content">
                  <img
                    className="img-fluid"
                    src={`https://api.bestaid.com.bd/${content.image}`}
                    alt=""
                  />
                  <div className="documentaryTopTrending__content-overlay">
                    <div
                      style={{ fontSize: '10px' }}
                      className="d-flex justify-content-between"
                    >
                      <small className="customRed">বাংলাদেশ</small>
                      <small className="text-white">২১ এপ্রিল ২০২২</small>
                    </div>

                    <div className="text-white d-flex align-items-end justify-content-center documentaryTopTrending__content-custom">
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
                <div className="ms-4">
                  <h3>{content.title}</h3>
                  <div className="black d-flex size">
                    <div className="me-3">
                      <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                    </div>
                    <div className="me-3">
                      <AiOutlineEye className="me-1" />
                      ১০০০
                    </div>
                    <div className="me-3">
                      <BiComment className="me-1" />
                      ৪৭
                    </div>
                  </div>
                  <p style={{ fontSize: '12px' }} className="black mt-4">
                    {content.sub_title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentaryTopTrending;
