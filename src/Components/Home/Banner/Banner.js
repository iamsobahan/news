import React from 'react';
import banner from '../../../images/banner.jpg';
import banner2 from '../../../images/banner2.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active img-container">
          <img src={banner} className="d-block w-100 customHeight" alt="..." />
          <div className="img-overlay">
            <div className="container">
              <h5>বাংলাদেশ</h5>
              <h1 className="mt-3">
                নিউমার্কেটে সংঘর্ষ: বেরিয়ে এল নেপথ্যের কারণ
              </h1>
              <h3 className="mt-2 w-50">
                রাজধানীর নিউমার্কেটে ঢাকা কলেজের শিক্ষার্থীদের সঙ্গে ব্যবসায়ীদের{' '}
                দফায় দফায় সংঘর্ষের নেপথ্যের কারণ বের হয়ে এসেছে
              </h3>
            </div>
          </div>
        </div>
        <div className="carousel-item img-container">
          <img src={banner2} className="d-block w-100 customHeight" alt="..." />
          <div className="img-overlay">
            <div className="container">
              <h5>রাজনীতি</h5>
              <h1 className="mt-3">
                নিউমার্কেটে সংঘর্ষ: বেরিয়ে এল নেপথ্যের কারণ
              </h1>
              <h3 className="mt-2 w-50">
                রাজধানীর নিউমার্কেটে ঢাকা কলেজের শিক্ষার্থীদের সঙ্গে ব্যবসায়ীদের{' '}
                দফায় দফায় সংঘর্ষের নেপথ্যের কারণ বের হয়ে এসেছে
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
