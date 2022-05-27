import React from 'react';
import documentaryImg2 from '../../../images/documentaryBanner2.png';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const DocumentaryTopTrending = () => {
  return (
    <div className="documentaryTopTrending customBgColor pt-5">
      <div className="container">
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            টপ ট্রেন্ডিং
          </h1>
        </div>

        <div className="row pt-3">
          <div className="col-lg-6">
            <div>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/kEFIdXzQXYw?list=PLHiZ4m8vCp9O5_QoMvQbOAOR5WolyZ4OS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="d-flex pt-2 size">
              <div className="me-3">
                <BiTimeFive className="me-2" />১ ঘণ্টা আগে
              </div>
              <div className="mx-3">
                <AiOutlineEye className="me-2" />
                ১০০০
              </div>
              <div className="mx-3">
                <BiComment className="me-2" />
                ৪৭
              </div>
            </div>
            <h2 className="py-3 black fw-bolder">
              লাহোরে সমাবেশ, ইসলামাবাদে আসার প্রস্তুতি নিতে বললেন ইমরান
            </h2>
            <p className="black">
              লাহোরে ব্যাপক জনসমাগমের মধ্য দিয়ে আরও একবার দলের শক্তি প্রদর্শন
              করল পাকিস্তান তেহরিক-ই-ইনসাফ (পিটিআই)। এবার রাজধানী ইসলামাবাদে
              আসতে নেতা–কর্মীসহ সাধারণ জনগণকে প্রস্তুত থাকতে বলেছেন দলের
              চেয়ারম্যান ও সাবেক প্রধানমন্ত্রী ইমরান খান। গতকাল বৃহস্পতিবার
              পিটিআইয়ের বহুল আলোচিত এই সমাবেশে লাহোরের গ্রেটার ইকবাল পার্কে
              নারী-পুরুষ, শিশু, বয়োজ্যেষ্ঠসহ হাজারো মানুষ অংশ নেন। তাঁরা
              স্লোগানে স্লোগানে সাবেক প্রধানমন্ত্রী ইমরান খানের প্রতি সমর্থন
              জানান। বিদেশি প্রভুদের ছড়ি ঘোরানোর প্রতিবাদ জানান। সার্বভৌমত্ব ও
              আত্মসম্মানবোধের প্রতি সমর্থন জানান।
            </p>
          </div>
          <div className="col-lg-6">
            <div className="d-flex pb-3">
              <div className="documentaryTopTrending__content">
                <img className="img-fluid" src={documentaryImg2} alt="" />
                <div className="documentaryTopTrending__content-overlay">
                  <div
                    style={{ fontSize: '10px' }}
                    className="d-flex justify-content-between"
                  >
                    <small className="customRed">বাংলাদেশ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>

                  <div className="text-white d-flex align-items-end justify-content-center documentaryTopTrending__content-custom">
                    <div className="mx-2">
                      <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                    </div>
                    <div className="mx-2">
                      <AiOutlineEye className="me-1" />
                      ১০০০
                    </div>
                    <div className="mx-2">
                      <BiComment className="me-1" />
                      ৪৭
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-4">
                <h3>মারিউপোলে প্রতিরোধ অব্যাহত, দাবি জেলেনস্কির</h3>
                <div className="black d-flex size">
                  <div className="me-3">
                    <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                  </div>
                  <div className="me-3">
                    <AiOutlineEye className="me-1" />
                    ১০০০
                  </div>
                  <div className="me-3">
                    <BiComment className="me-1" />
                    ৪৭
                  </div>
                </div>
                <p style={{ fontSize: '12px' }} className="black mt-4">
                  ইউক্রেনের দক্ষিণাঞ্চলীয় বন্দর নগরী মারিউপোলে এখনো প্রতিরোধ
                  অব্যাহত রয়েছে বলে ...
                </p>
              </div>
            </div>
            <div className="d-flex pb-3">
              <div className="documentaryTopTrending__content">
                <img className="img-fluid" src={documentaryImg2} alt="" />
                <div className="documentaryTopTrending__content-overlay">
                  <div
                    style={{ fontSize: '10px' }}
                    className="d-flex justify-content-between"
                  >
                    <small className="customRed">বাংলাদেশ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>

                  <div className="text-white d-flex align-items-end justify-content-center documentaryTopTrending__content-custom">
                    <div className="mx-2">
                      <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                    </div>
                    <div className="mx-2">
                      <AiOutlineEye className="me-1" />
                      ১০০০
                    </div>
                    <div className="mx-2">
                      <BiComment className="me-1" />
                      ৪৭
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-4">
                <h3>মারিউপোলে প্রতিরোধ অব্যাহত, দাবি জেলেনস্কির</h3>
                <div className="black d-flex size">
                  <div className="me-3">
                    <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                  </div>
                  <div className="me-3">
                    <AiOutlineEye className="me-1" />
                    ১০০০
                  </div>
                  <div className="me-3">
                    <BiComment className="me-1" />
                    ৪৭
                  </div>
                </div>
                <p style={{ fontSize: '12px' }} className="black mt-4">
                  ইউক্রেনের দক্ষিণাঞ্চলীয় বন্দর নগরী মারিউপোলে এখনো প্রতিরোধ
                  অব্যাহত রয়েছে বলে ...
                </p>
              </div>
            </div>
            <div className="d-flex pb-3">
              <div className="documentaryTopTrending__content">
                <img className="img-fluid" src={documentaryImg2} alt="" />
                <div className="documentaryTopTrending__content-overlay">
                  <div
                    style={{ fontSize: '10px' }}
                    className="d-flex justify-content-between"
                  >
                    <small className="customRed">বাংলাদেশ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>

                  <div className="text-white d-flex align-items-end justify-content-center documentaryTopTrending__content-custom">
                    <div className="mx-2">
                      <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                    </div>
                    <div className="mx-2">
                      <AiOutlineEye className="me-1" />
                      ১০০০
                    </div>
                    <div className="mx-2">
                      <BiComment className="me-1" />
                      ৪৭
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-4">
                <h3>মারিউপোলে প্রতিরোধ অব্যাহত, দাবি জেলেনস্কির</h3>
                <div className="black d-flex size">
                  <div className="me-3">
                    <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                  </div>
                  <div className="me-3">
                    <AiOutlineEye className="me-1" />
                    ১০০০
                  </div>
                  <div className="me-3">
                    <BiComment className="me-1" />
                    ৪৭
                  </div>
                </div>
                <p style={{ fontSize: '12px' }} className="black mt-4">
                  ইউক্রেনের দক্ষিণাঞ্চলীয় বন্দর নগরী মারিউপোলে এখনো প্রতিরোধ
                  অব্যাহত রয়েছে বলে ...
                </p>
              </div>
            </div>
            <div className="d-flex pb-3">
              <div className="documentaryTopTrending__content">
                <img className="img-fluid" src={documentaryImg2} alt="" />
                <div className="documentaryTopTrending__content-overlay">
                  <div
                    style={{ fontSize: '10px' }}
                    className="d-flex justify-content-between"
                  >
                    <small className="customRed">বাংলাদেশ</small>
                    <small className="text-white">২১ এপ্রিল ২০২২</small>
                  </div>

                  <div className="text-white d-flex align-items-end justify-content-center documentaryTopTrending__content-custom">
                    <div className="mx-2">
                      <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                    </div>
                    <div className="mx-2">
                      <AiOutlineEye className="me-1" />
                      ১০০০
                    </div>
                    <div className="mx-2">
                      <BiComment className="me-1" />
                      ৪৭
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-4">
                <h3>মারিউপোলে প্রতিরোধ অব্যাহত, দাবি জেলেনস্কির</h3>
                <div className="black d-flex size">
                  <div className="me-3">
                    <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                  </div>
                  <div className="me-3">
                    <AiOutlineEye className="me-1" />
                    ১০০০
                  </div>
                  <div className="me-3">
                    <BiComment className="me-1" />
                    ৪৭
                  </div>
                </div>
                <p style={{ fontSize: '12px' }} className="black mt-4">
                  ইউক্রেনের দক্ষিণাঞ্চলীয় বন্দর নগরী মারিউপোলে এখনো প্রতিরোধ
                  অব্যাহত রয়েছে বলে ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentaryTopTrending;
