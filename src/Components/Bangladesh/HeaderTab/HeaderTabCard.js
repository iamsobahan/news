import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTabCard = (props) => {
  return (
    <Link to={`/details/${props?.item?.id}`} className="text-white">
      <div className="card mx-3 mt-5">
        <div className="cardMother">
          <img
            src={`https://api.bestaid.com.bd/${props?.item?.image}`}
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
          <p className="card-text text-center px-5">{props?.item?.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default HeaderTabCard;
