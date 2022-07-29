import React from 'react';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import documentaryImg2 from '../../../images/documentaryBanner2.png';
import job from '../../../images/job.png';
import topStories from '../../../images/topStories.png';
import '../JobMain/JobMain.css';
import { useNavigate } from 'react-router-dom';
const JobBanner = (props) => {
  const Navigate = useNavigate();
  const clickHandler = (slug) => {
    Navigate(`/details/${slug}`);
  };
  return (
    <div className="jobBanner mt-4">
      <div className="jobBanner__main">
        <div className="jobBannerLeft__mobile first">
          <div className="documentaryBanner__content mb-0 w-100 h-100">
            <img
              className="w-100 h-100"
              src={`https://api.bestaid.com.bd/${props.bannerData[0].image}`}
              alt=""
            />
            <div className="documentaryBanner__content-overlay">
              <div className="documentaryEditors__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <div className="documentaryBanner__content__middle">
                <h3 className="fs-2">{props.bannerData[0].sub_title}</h3>
                <button
                  onClick={() => clickHandler(props.bannerData[0].slug)}
                  type="button"
                  class="btn btn-danger mt-5 customRedBg px-5"
                >
                  বিস্তারিত পড়ুন
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="documentaryBanner__content mb-0 second">
          <img
            className="w-100 h-100"
            src={`https://api.bestaid.com.bd/${props.bannerData[1].image}`}
            alt=""
          />
          <div className="documentaryBanner__content-overlay">
            <div className="d-flex justify-content-between">
              <small className="customRed">ইউরোপ</small>
              <small className="text-white">২১ এপ্রিল ২০২২</small>
            </div>
            <div className="documentaryBanner__content__middle">
              <h3>{props.bannerData[1].sub_title}</h3>
              <button
                onClick={() => clickHandler(props.bannerData[1].slug)}
                type="button"
                class="btn btn-danger mt-5 customRedBg px-5"
              >
                বিস্তারিত পড়ুন
              </button>
            </div>
          </div>
        </div>
        <div className="third">
          <div className="documentaryEditors__content">
            <img
              className="w-100 h-100"
              src={`https://api.bestaid.com.bd/${props.bannerData[2].image}`}
              alt=""
            />
            <div className="documentaryEditors__content-overlay h-100">
              <div className="documentaryEditors__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3 className="text-center px-4">
                {props.bannerData[2].sub_title}
              </h3>
              <div style={{ paddingTop: '100px', textAlign: 'center' }}>
                <button
                  onClick={() => clickHandler(props.bannerData[2].slug)}
                  type="button"
                  class="btn btn-danger mt-5 customRedBg px-5"
                >
                  বিস্তারিত পড়ুন
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="four">
          <div className="documentaryEditors__content">
            <img
              className="w-100 h-100"
              src={`https://api.bestaid.com.bd/${props.bannerData[3].image}`}
              alt=""
            />
            <div className="documentaryEditors__content-overlay">
              <div className="documentaryEditors__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3 className="text-center px-4">
                {props.bannerData[3].sub_title}
              </h3>
              <div style={{ paddingTop: '100px', textAlign: 'center' }}>
                <button
                  onClick={() => clickHandler(props.bannerData[3].slug)}
                  type="button"
                  class="btn btn-danger mt-5 customRedBg px-5"
                >
                  বিস্তারিত পড়ুন
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="jobBannerLeft__mobile">
          <div>
            <div>
             
            </div>
           
           
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default JobBanner;
