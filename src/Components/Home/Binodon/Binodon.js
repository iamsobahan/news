import React from 'react';
import './Binodon.css';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Binodon = (props) => {
  const Navigate = useNavigate();

  const clickHandler = () => {
    Navigate(`/details/${props.binodonBoroData.slug}`);
  };

  const clickHandlerChoto = (slug) => {
    Navigate(`/details/${slug}`);
  };
  return (
    <div className="binodon">
      <div className="container">
        <div className="container">
          <div className="shorboshesh__title text-center py-4">
            <h1
              className="shorboshesh__title__paragraph"
              style={{ fontWeight: '900' }}
            >
              বিনোদন
            </h1>
          </div>
          <div className="row mt-3">
            <div className="col-lg-7">
              <div className="binodon__img">
                <img
                  style={{ height: '520px' }}
                  className="img-fluid"
                  src={`https://api.bestaid.com.bd/${props.binodonBoroData.image}`}
                  alt=""
                />
                <div
                  onClick={clickHandler}
                  className="binodon__overlay px-4 pt-3 pb-5 d-flex flex-column justify-content-between"
                >
                  <div className="d-flex text-light justify-content-between">
                    <p style={{ fontSize: '15px' }}>ঢলিউড</p>
                    <small style={{ fontSize: '12px', fontWeight: '600' }}>
                      ২৫ এপ্রিল, ২০২২
                    </small>
                  </div>
                  <div className="d-flex justify-content-between align-items-end text-light">
                    <div>
                      <h4>{props.binodonBoroData.title}</h4>
                      <p>{props.binodonBoroData.sub_title}</p>
                    </div>
                    <a className="text-light" href="/">
                      <BsArrowRight className="fs-2"></BsArrowRight>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                {props.bindodonChotoData.map((item) => {
                  return (
                    <div className="col-lg-6">
                      <img
                        onClick={() => clickHandlerChoto(item.slug)}
                        className="img-fluid"
                        src={`https://api.bestaid.com.bd/${item.image}`}
                        alt=""
                      />
                      <div className="text-center">
                        <p className="pt-2 pb-2">{item.title}</p>
                        <small>{item.sub_title}</small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Binodon;
