import React from 'react';
import bcsImg from '../../../images/bcsImg.png';

const BcsBanner = () => {
  return (
    <div className="bcsBanner">
      <div className="bcsBanner__overlay">
        <div className="container">
          <div>
            {[...Array(4).keys()].map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white my-4 p-4 d-flex w-75 mx-auto customCss shadow-lg"
                >
                  <div>
                    <small className="customRed">পরামর্শ</small>
                    <div className="mt-3">
                      <h2>৪৪তম বিসিএস পরীক্ষার্থীদের জন্য পিএসসির নির্দেশনা</h2>
                    </div>
                    <p className="mt-4">
                      ৪৪তম বিসিএসের আবেদন ইতিমধ্যে শেষ হয়েছে। আবেদন করেছেন ...
                    </p>
                  </div>

                  <div className="text-end">
                    <small className="fw-bolder">১৭ এপ্রিল, ২০২২</small>
                    <img className="img-fluid" src={bcsImg} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BcsBanner;
