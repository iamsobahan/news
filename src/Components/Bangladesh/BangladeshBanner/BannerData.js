import React from 'react';
import { Link } from 'react-router-dom';

const BannerData = (props) => {
  return (
    <div className="col-lg-4">
      <Link to={`/details/${props?.item?.id}`}>
        <div
          style={{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '20px',
          }}
          className="bg-light"
        >
          <div className="d-flex justify-content-between">
            <small className="text-danger">বাংলাদেশ</small>
            <small>
              {new Date(props?.item?.created_at).toLocaleDateString('bn-BD')}
            </small>
          </div>
          <div style={{ paddingTop: '35px' }} className="d-flex">
            <div>
              <img
                style={{ height: '124px', width: '137px' }}
                src={`https://api.bestaid.com.bd/${props?.item?.image}`}
                alt=""
              />
            </div>
            <div className="ms-3">
              <h4>{props?.item?.title.slice(0, 35)}..</h4>
              <h5 className="bannerBottom__paragraph">
                {props?.item?.sub_title.slice(0, 40)}...
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BannerData;
