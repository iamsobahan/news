import React from 'react';
import Slider from 'react-slick/lib/slider';
import jobslide from '../../../images/jobslider.png';

const JobSearchSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="jobSearchSlider">
      <div className="container">
        <Slider {...settings}>
          <div className="jobSearchSlider__main">
            <img className="w-100" src={jobslide} alt="" />
            <div className="jobSearchSlider__overlay">
              <h3>Hot Jobs</h3>
              <h4>Plan International</h4>
              <p>Dhaka</p>
            </div>
          </div>
          <div className="jobSearchSlider__main">
            <img className="w-100" src={jobslide} alt="" />
            <div className="jobSearchSlider__overlay">
              <h3>Hot Jobs</h3>
              <h4>Plan International</h4>
              <p>Dhaka</p>
            </div>
          </div>
          <div className="jobSearchSlider__main">
            <img className="w-100" src={jobslide} alt="" />
            <div className="jobSearchSlider__overlay">
              <h3>Hot Jobs</h3>
              <h4>Plan International</h4>
              <p>Dhaka</p>
            </div>
          </div>
          <div className="jobSearchSlider__main">
            <img className="w-100" src={jobslide} alt="" />
            <div className="jobSearchSlider__overlay">
              <h3>Hot Jobs</h3>
              <h4>Plan International</h4>
              <p>Dhaka</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default JobSearchSlider;
