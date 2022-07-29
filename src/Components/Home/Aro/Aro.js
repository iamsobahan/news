import React from 'react';
import './Aro.css';

import { BsArrowRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Aro = (props) => {
  const Navigate = useNavigate();

  const clickHandler = (slug) => {
    Navigate(`/details/${slug}`);
  };

  return (
    <div className="aro pb-5">
      <div className="container">
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            আরও
          </h1>
        </div>
        <div className="aro__contents mt-3 mb-3">
          {props.aroData.map((item, index) => {
            return (
              <div className="aro__hover" key={index}>
                <div className="aro__img">
                  <img
                    src={`https://api.bestaid.com.bd/${item.image}`}
                    alt=""
                  />
                  <div
                    className="aro__overlay"
                    onClick={() => clickHandler(item.slug)}
                  >
                    <div>
                      <div className="d-flex justify-content-between">
                        <p className="text-danger">সরকারি</p>
                        <p className="text-light" style={{ fontSize: '12px' }}>
                          ১২ এপ্রিল, ২০২২
                        </p>
                      </div>
                      <div className="aro__shonali">
                        <h3 className="text-light aro__shonali mb-3">
                          {item.title}
                        </h3>
                        <a
                          className="text-white bg-danger py-1 px-5 rounded-2"
                          href="/"
                        >
                          চাকরি
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center my-5">
          <Link
            to="/aro-news-all"
            className="bg-danger text-light py-1 px-5 rounded"
            href="/"
          >
            আরও <BsArrowRight className="ms-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aro;
