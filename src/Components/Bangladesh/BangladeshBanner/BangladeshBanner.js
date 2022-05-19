import React from 'react';
import { Link } from 'react-router-dom';
import { BannerData } from '../BangladeshImport/BangladeshImport';
const BangladeshBanner = (props) => {
  return (
    <>
      <div
        className="bannerHeader"
        style={{
          backgroundImage: `url(https://api.bestaid.com.bd/${props?.data[0]?.image})`,
        }}
      >
        <div className="bannerHeader__overlay">
          <div className="container">
            <div className="text-light">
              <h1 className="bannerHeader__header">{props?.data[0]?.title}</h1>
              <p className="bannerHeader__paragraph">
                {props?.data[0]?.sub_title}...
              </p>
              <Link
                to={`/details/${props?.data[0]?.id}`}
                className="bg-danger px-4 py-1 rounded-1 text-white "
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
            {props?.subHeaderData?.map((item, index) => (
              <BannerData key={index} item={item}></BannerData>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BangladeshBanner;
