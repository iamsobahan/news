import React from 'react';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import documentaryImg2 from '../../../images/documentaryBanner2.png';
import job from '../../../images/job.png';
import topStories from '../../../images/topStories.png';

const JobBanner = () => {
  return (
    <div className="jobBanner mt-4">
      <div className="d-flex">
        <div className="w-50">
          <div className="documentaryBanner__content h-100">
            <img className="h-100" src={job} alt="" />
            <div className="documentaryBanner__content-overlay">
              <div className="documentaryEditors__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <div style={{ paddingTop: '250px' }}>
                <h3 className="fs-2">
                  পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
                </h3>
                <button
                  type="button"
                  class="btn btn-danger mt-5 customRedBg px-5"
                >
                  বিস্তারিত পড়ুন
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-50">
          <div className="d-flex flex-wrap">
            <div className="w-100">
              <div className="documentaryBanner__content mb-0">
                <img
                  className="documentaryBanner__content-img"
                  src={documentaryImg2}
                  alt=""
                />
                <div className="documentaryBanner__content-overlay">
                  <div className="d-flex justify-content-between">
                    <small className="customRed">ইউরোপ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <div style={{ paddingTop: '120px' }}>
                    <h3>
                      পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস
                      জনসন
                    </h3>
                    <button
                      type="button"
                      class="btn btn-danger mt-5 customRedBg px-5"
                    >
                      বিস্তারিত পড়ুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="documentaryEditors__content">
                <img className="img-fluid" src={topStories} alt="" />
                <div className="documentaryEditors__content-overlay h-100">
                  <div className="documentaryEditors__content-overlay-content">
                    <small className="customRed">ইউরোপ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <h3 className="text-center px-4">
                    পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
                  </h3>
                  <div style={{ paddingTop: '100px', textAlign: 'center' }}>
                    <button
                      type="button"
                      class="btn btn-danger mt-5 customRedBg px-5"
                    >
                      বিস্তারিত পড়ুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50 h-100">
              <div className="documentaryEditors__content">
                <img className="img-fluid" src={topStories} alt="" />
                <div className="documentaryEditors__content-overlay">
                  <div className="documentaryEditors__content-overlay-content">
                    <small className="customRed">ইউরোপ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>
                  <h3 className="text-center px-4">
                    পুতিনের সঙ্গে কথা বলা মানে কুমিরের মুখে পা দেওয়া: বরিস জনসন
                  </h3>
                  <div style={{ paddingTop: '100px', textAlign: 'center' }}>
                    <button
                      type="button"
                      class="btn btn-danger mt-5 customRedBg px-5"
                    >
                      বিস্তারিত পড়ুন
                    </button>
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

export default JobBanner;
