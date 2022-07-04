import React from 'react';
import './Binodon.css';
import binodonBoro from '../../../images/binodon.jpg';
import binodonChoto from '../../../images/binodonright.png';
import binodonChoto2 from '../../../images/binodon2.png';
import { BsArrowRight } from 'react-icons/bs';

const Binodon = () => {
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
                  src={binodonBoro}
                  alt=""
                />
                <div className="binodon__overlay px-4 pt-3 pb-5 d-flex flex-column justify-content-between">
                  <div className="d-flex text-light justify-content-between">
                    <p style={{ fontSize: '15px' }}>ঢলিউড</p>
                    <small style={{ fontSize: '12px', fontWeight: '600' }}>
                      ২৫ এপ্রিল, ২০২২
                    </small>
                  </div>
                  <div className="d-flex justify-content-between align-items-end text-light">
                    <div>
                      <h4>আবারও পরিচালনায় রোজিনা</h4>
                      <p>
                        ঢাকাই সিনেমার দর্শকনন্দিত অভিনেত্রী রোজিনা আবারও
                        পরিচালনায় আসছেন। গত...
                      </p>
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
                <div className="col-lg-6">
                  <img className="img-fluid" src={binodonChoto} alt="" />
                  <div className="text-center">
                    <p className="pt-2 pb-2">
                      ‘কারাগার’ নিয়ে আসছে চঞ্চল চৌধুরী
                    </p>
                    <small>
                      টিভি নাটক, সিনেমা ও ওয়েব সিরিজ তিন মাধ্যমেই জনপ্রিয়
                      অভিনেতা চঞ্চল চৌধুরী। মনপুরা...
                    </small>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img className="img-fluid" src={binodonChoto2} alt="" />
                  <div className="text-center">
                    <p className="pt-2 pb-2">
                      ‘কারাগার’ নিয়ে আসছে চঞ্চল চৌধুরী
                    </p>
                    <small>
                      টিভি নাটক, সিনেমা ও ওয়েব সিরিজ তিন মাধ্যমেই জনপ্রিয়
                      অভিনেতা চঞ্চল চৌধুরী। মনপুরা...
                    </small>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <img className="img-fluid" src={binodonChoto2} alt="" />
                  <div className="text-center">
                    <p className="pt-2 pb-2">
                      ‘কারাগার’ নিয়ে আসছে চঞ্চল চৌধুরী
                    </p>
                    <small>
                      টিভি নাটক, সিনেমা ও ওয়েব সিরিজ তিন মাধ্যমেই জনপ্রিয়
                      অভিনেতা চঞ্চল চৌধুরী। মনপুরা...
                    </small>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <img className="img-fluid" src={binodonChoto} alt="" />
                  <div className="text-center">
                    <p className="pt-2 pb-2">
                      ‘কারাগার’ নিয়ে আসছে চঞ্চল চৌধুরী
                    </p>
                    <small>
                      টিভি নাটক, সিনেমা ও ওয়েব সিরিজ তিন মাধ্যমেই জনপ্রিয়
                      অভিনেতা চঞ্চল চৌধুরী। মনপুরা...
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Binodon;
