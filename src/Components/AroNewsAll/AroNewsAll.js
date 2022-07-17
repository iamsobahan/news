import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AroNewsAll = () => {
  const Navigate = useNavigate();

  const clickHandler = (slug) => {
    Navigate(`/details/${slug}`);
  };
  window.scroll(0, 0);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/aro-news-all')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-5">
      <div className="container">
        <div className="row g-0">
          {Object.keys(data).length > 0 ? (
            <div className="aro__contents ">
              {data.map((item) => {
                return (
                  <div className="col-lg-3">
                    <div className="aro__hover">
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
                              <p
                                className="text-light"
                                style={{ fontSize: '12px' }}
                              >
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
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{ width: '3rem', height: '3rem' }}
              class="spinner-border position-absolute start-50"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AroNewsAll;
