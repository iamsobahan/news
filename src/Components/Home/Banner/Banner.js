import React from 'react';

import './Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = (props) => {
  const Navigate = useNavigate();

  const clickHandler = () => {
    Navigate(`/details/${props?.bannerData[0]?.slug}`);
  };
  return (
    <div className="position-relative">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        onClick={clickHandler}
      >
        <div className="carousel-inner">
          <div className="carousel-item active img-container">
            <img
              src={`https://api.bestaid.com.bd/${props.bannerData[0]?.image}`}
              className="d-block w-100 customHeight"
              alt="..."
            />

            <div className="img-overlay">
              <div className="container">
                <h5>বাংলাদেশ</h5>

                <h1 className="mt-3">{props.bannerData[0].title}</h1>

                <h3 className="mt-2 w-50">{props.bannerData[0].sub_title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
