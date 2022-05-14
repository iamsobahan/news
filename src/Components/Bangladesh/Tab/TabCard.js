import React from 'react';
import './Tab.css';

const TabCard = (props) => {
  return (
    <div className="card mx-3 mt-5">
      <div className="cardMother">
        <img
          src={props.img}
          className="card-img-top"
          style={{ height: '400px' }}
          alt="..."
        />
        <div className="cardOverlay">
          <div className="d-flex justify-content-between">
            <small className="text-danger fw-bold">বাংলাদেশ</small>
            <small className="text-light">৩ ঘণ্টা আগে</small>
          </div>
        </div>
      </div>
      <div className="card-body bg-dark text-white">
        <p className="card-text text-center px-5">
          এবারও ভোগাবে ঢাকা-ময়মনসিংহ-সিরাজগঞ্জ মহাসড়ক
        </p>
      </div>
    </div>
  );
};

export default TabCard;
