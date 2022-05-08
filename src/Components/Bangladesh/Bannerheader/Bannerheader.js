import React from 'react';
import './Bannerheader.css';
import { Link } from 'react-router-dom';
import bangladeshBanImg from '../../../images/bangladeshbanchoto.png';
import bangladeshBanImg2 from '../../../images/bangladeshbanchoto2.png';
import bangladeshBanImg3 from '../../../images/bangladeshbanchoto3.png';

const Bannerheader = () => {
  return (
    <>
      <div className="bannerHeader">
        <div className="bannerHeader__overlay">
          <div className="container">
            <div className="text-light">
              <h1 className="bannerHeader__header">
                ঈদে লঞ্চে মোটরসাইকেল বহন নিষিদ্ধ
              </h1>
              <p className="bannerHeader__paragraph">
                যাত্রীবাহী লঞ্চে মোটরসাইকেল বহন নিষিদ্ধ করেছে বাংলাদেশ
                অভ্যন্তরীণ নৌ-পরিবহন কর্তৃপক্ষ...
              </p>
              <Link
                className="bg-danger px-4 py-1 rounded-1 text-white "
                to="/"
              >
                বিস্তারিত পড়ুন
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerBottom ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                }}
                className="bg-light"
              >
                <div className="d-flex justify-content-between">
                  <small className="text-danger">বাংলাদেশ</small>
                  <small>১৭ এপ্রিল, ২০২২</small>
                </div>
                <div style={{ paddingTop: '35px' }} className="d-flex">
                  <div>
                    <img src={bangladeshBanImg} alt="" />
                  </div>
                  <div className="ms-3">
                    <h5>চট্টগ্রামে মাদকের ৬৫ গডফাদার!</h5>
                    <p className="bannerBottom__paragraph">
                      বৃহত্তর চট্টগ্রামে মাদকের সাম্রাজ্যের নিয়ন্ত্রণ ৬৫
                      গডফাদারের হাতে। ইয়াবা...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                }}
                className="bg-light"
              >
                <div className="d-flex justify-content-between">
                  <small className="text-danger">বাংলাদেশ</small>
                  <small>১৭ এপ্রিল, ২০২২</small>
                </div>
                <div style={{ paddingTop: '35px' }} className="d-flex">
                  <div>
                    <img src={bangladeshBanImg2} alt="" />
                  </div>
                  <div className="ms-3">
                    <h5>চট্টগ্রামে মাদকের ৬৫ গডফাদার!</h5>
                    <p className="bannerBottom__paragraph">
                      বৃহত্তর চট্টগ্রামে মাদকের সাম্রাজ্যের নিয়ন্ত্রণ ৬৫
                      গডফাদারের হাতে। ইয়াবা...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                }}
                className="bg-light"
              >
                <div className="d-flex justify-content-between">
                  <small className="text-danger">বাংলাদেশ</small>
                  <small>১৭ এপ্রিল, ২০২২</small>
                </div>
                <div style={{ paddingTop: '35px' }} className="d-flex">
                  <div>
                    <img src={bangladeshBanImg3} alt="" />
                  </div>
                  <div className="ms-3">
                    <h5>চট্টগ্রামে মাদকের ৬৫ গডফাদার!</h5>
                    <p className="bannerBottom__paragraph">
                      বৃহত্তর চট্টগ্রামে মাদকের সাম্রাজ্যের নিয়ন্ত্রণ ৬৫
                      গডফাদারের হাতে। ইয়াবা...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerheader;
