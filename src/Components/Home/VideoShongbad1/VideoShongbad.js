import React from 'react';
import './VideoShongbad.css';
import videoImg from '../../../images/videoImg.png';
import videoImg2 from '../../../images/videoImg2.png';
import videoImg3 from '../../../images/videoImg3.png';

const VideoShongbad = () => {
  return (
    <div className="videoShongbad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="shorboshesh__title text-center py-4">
              <h1
                className="shorboshesh__title__paragraph"
                style={{ fontWeight: '900' }}
              >
                ভিডিও সংবাদ
              </h1>
            </div>
            <iframe
              className="mt-5 w-100"
              height="635"
              src="https://www.youtube.com/embed/blWSvL7CU6s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
              <div className="col-12">
                <div className="d-flex mt-5 bg-white shadow-lg">
                  <img
                    style={{ width: '180px', height: '180px' }}
                    src={videoImg}
                    alt=""
                  />
                  <div className="p-3">
                    <h4 className="text-danger mb-3">বাংলাদেশ</h4>
                    <h5 className="fw-bold mt-3 fs-4">
                      জার্মানিতে তুলে দেওয়া হলো মাস্কের বাধ্যবাধকতা
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex mt-5 bg-white shadow-lg">
                  <img
                    style={{ width: '180px', height: '180px' }}
                    src={videoImg2}
                    alt=""
                  />
                  <div className="p-3">
                    <h4 className="text-danger mb-3">বাংলাদেশ</h4>
                    <h5 className="fw-bold mt-3 fs-4">
                      জার্মানিতে তুলে দেওয়া হলো মাস্কের বাধ্যবাধকতা
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex mt-5 bg-white shadow-lg">
                  <img
                    style={{ width: '180px', height: '180px' }}
                    src={videoImg3}
                    alt=""
                  />
                  <div className="p-3">
                    <h4 className="text-danger mb-3">বাংলাদেশ</h4>
                    <h5 className="fw-bold mt-3 fs-4">
                      জার্মানিতে তুলে দেওয়া হলো মাস্কের বাধ্যবাধকতা
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-danger">আন্তর্জাতিক</h2>
          <h1 className="mt-4">বিশ্বে করোনায় ফের মৃত্যু বাড়ল</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoShongbad;
