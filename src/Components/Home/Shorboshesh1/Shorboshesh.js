import React from 'react';
import './Shorboshesh.css';
import shorbosheshImg from '../../../images/sorboshesh.png';

const Shorboshesh = () => {
  return (
    <div className="shorboshesh">
      <div className="container">
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            সর্বশেষ সংবাদ
          </h1>
        </div>
        <div className="row pt-4">
          <div className="col-lg-1">
            <div className="text-center">
              <p className="text-danger fw-bold">রাজনীতি</p>
              <small style={{ fontSize: '12px', fontWeight: '600' }}>
                ১০ মিনিট আগ
              </small>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-fluid" src={shorbosheshImg} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="text-end">
              <h1 className="pb-5 mt-4">
                শ্রীলঙ্কায় নতুন অর্থমন্ত্রী, গভর্নর নিয়োগ
              </h1>
              <h3 className="pt-5">
                শ্রীলঙ্কায় চলমান অস্থিরতার মধ্যেই নতুন অর্থমন্ত্রী নিয়োগ দেওয়া
                হয়েছে । একই ....
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorboshesh;
