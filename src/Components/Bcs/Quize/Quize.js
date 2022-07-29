import React, { useState, useEffect } from 'react';
import { RiTimerLine } from 'react-icons/ri';
import { BsFlag } from 'react-icons/bs';
import { ProgressBar } from 'react-bootstrap';
import Quizes from './Quizes';
import Pagination from './Pagination';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from './../../Hooks/useAuth';

const quiz = [
  {
    id: '১',
    question: "মুসলিম সাহিত্য সমাজ' প্রতিষ্ঠিত হয়?",
    option1: '(ক) ১৯ ফেব্রুয়ারি ১৯২৬',
    option2: '(খ) ১৯ জানুয়ারি ১৯২৬ ',
    option3: '(গ) ১৯ মার্চ ১৯২৬ ',
    option4: '(ঘ) ১৯ নভেম্বর ১৯২৬ ',
    name: '1',
  },
  {
    id: '২',
    question: 'কে বীরশ্রেষ্ঠ নন?',
    option1: '(ক) হামিদুর রহমান ',
    option2: '(খ) মোস্তফা কামাল',
    option3: '(গ) মুন্সী আব্দুর রহিম ',
    option4: '(ঘ) নূর মোহাম্মদ শেখ ',
    name: '2',
  },
  {
    id: '৩',
    question: 'বাংলাদেশে প্রথম সাধারণ নির্বাচন কখন অনুষ্ঠিত হয়?',
    option1: '(ক) ৭ মার্চ ১৯৭৩ ',
    option2: '(খ)  ১৭ মার্চ ১৯৭৩',
    option3: '(গ) ২৭ মার্চ ১৯৭৩ ',
    option4: '(ঘ) ৭ মার্চ ১৯৭৪ ',
    name: '3',
  },
  {
    id: '4',
    question: 'প্রান্তিক হ্রদ কোন জেলায় অবস্থিত?',
    option1: '(ক) রাঙ্গামাটি',
    option2: '(খ) খাগড়াছড়ি',
    option3: '(গ) বান্দরবান',
    option4: '(ঘ) সিলেট',
    name: '4',
  },
  {
    id: '5',
    question: " মুসলিম সাহিত্য সমাজ' প্রতিষ্ঠিত হয়?",
    option1: '(ক) ১৯ ফেব্রুয়ারি ১৯২৬',
    option2: '(খ) ১৯ জানুয়ারি ১৯২৬ ',
    option3: '(গ) ১৯ মার্চ ১৯২৬ ',
    option4: '(ঘ) ১৯ নভেম্বর ১৯২৬ ',
    name: '5',
  },
  {
    id: '6',
    question: 'কে বীরশ্রেষ্ঠ নন?',
    option1: '(ক) হামিদুর রহমান ',
    option2: '(খ) মোস্তফা কামাল',
    option3: '(গ) মুন্সী আব্দুর রহিম ',
    option4: '(ঘ) নূর মোহাম্মদ শেখ ',
    name: '6',
  },
  {
    id: '7',
    question: 'বাংলাদেশে প্রথম সাধারণ নির্বাচন কখন অনুষ্ঠিত হয়?',
    option1: '(ক) ৭ মার্চ ১৯৭৩ ',
    option2: '(খ)  ১৭ মার্চ ১৯৭৩',
    option3: '(গ) ২৭ মার্চ ১৯৭৩ ',
    option4: '(ঘ) ৭ মার্চ ১৯৭৪ ',
    name: '7',
  },
  {
    id: '৪',
    question: 'প্রান্তিক হ্রদ কোন জেলায় অবস্থিত?',
    option1: '(ক) রাঙ্গামাটি',
    option2: '(খ) খাগড়াছড়ি',
    option3: '(গ) বান্দরবান',
    option4: '(ঘ) সিলেট',
    name: '8',
  },
  {
    id: '9',
    question: " মুসলিম সাহিত্য সমাজ' প্রতিষ্ঠিত হয়?",
    option1: '(ক) ১৯ ফেব্রুয়ারি ১৯২৬',
    option2: '(খ) ১৯ জানুয়ারি ১৯২৬ ',
    option3: '(গ) ১৯ মার্চ ১৯২৬ ',
    option4: '(ঘ) ১৯ নভেম্বর ১৯২৬ ',
    name: '9',
  },
  {
    id: '10',
    question: 'কে বীরশ্রেষ্ঠ নন?',
    option1: '(ক) হামিদুর রহমান ',
    option2: '(খ) মোস্তফা কামাল',
    option3: '(গ) মুন্সী আব্দুর রহিম ',
    option4: '(ঘ) নূর মোহাম্মদ শেখ ',
    name: '10',
  },
  {
    id: '11',
    question: 'বাংলাদেশে প্রথম সাধারণ নির্বাচন কখন অনুষ্ঠিত হয়?',
    option1: '(ক) ৭ মার্চ ১৯৭৩ ',
    option2: '(খ)  ১৭ মার্চ ১৯৭৩',
    option3: '(গ) ২৭ মার্চ ১৯৭৩ ',
    option4: '(ঘ) ৭ মার্চ ১৯৭৪ ',
    name: '11',
  },
  {
    id: '12',
    question: 'প্রান্তিক হ্রদ কোন জেলায় অবস্থিত?',
    option1: '(ক) রাঙ্গামাটি',
    option2: '(খ) খাগড়াছড়ি',
    option3: '(গ) বান্দরবান',
    option4: '(ঘ) সিলেট',
    name: '12',
  },
];

const Quize = () => {
  let [data, setData] = useState(quiz);
  let [currentPage, setCurrentPage] = useState(1);
  let [check, setCheck] = useState(false);
  const { answer, setAnswer } = useAuth();
  let perPageQuiz = 4;

  const Navigate = useNavigate();
  const registerRedirect = () => {
    setTimeout(() => {
      let timerInterval;
      Swal.fire({
        title: 'Redirect to Register',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector('b');
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      Navigate('/register');
    }, 1000);
  };

  function changeHandler(e) {
    setAnswer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    return e.target.value;
  }

  const totalPage = Math.ceil(data.length / perPageQuiz);

  const [modal, setModal] = useState(false);

  let [second, setSecond] = useState(60);
  let [minute, setMinute] = useState(data.length / 2);

  useEffect(() => {
    let timer;
    if (modal) {
      timer = setInterval(() => {
        second = second - 1;
        if (second <= 9 && second >= 0) {
          second = '0' + second;
        }
        if (second < 0) {
          second = 60;
        }
        if (second >= 60) {
          minute = minute - 1;
          setMinute(minute);
        }
        setSecond(second);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      setMinute(data.length / 2);
      setSecond(60);
    };
  }, [modal]);

  const toggleModel = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  // if (currentPage === 1) {
  //   document.getElementById('quizPrev').setAttribute('disable', '');
  // }
  let indexLastPost = currentPage * perPageQuiz;
  let indexFirstPost = indexLastPost - perPageQuiz;
  const displayPost = data.slice(indexFirstPost, indexLastPost);

  const prevButton = () => {
    setCurrentPage(currentPage - 1);
    document.querySelector('.quize__model').scrollTo(0, 0);
  };

  const nextButton = () => {
    setCurrentPage(currentPage + 1);
    document.querySelector('.quize__model').scrollTo(0, 0);
  };

  const clickHandler = () => {
    setModal(false);
    setCurrentPage(1);
    setTimeout(() => {
      Navigate('/quize');
    }, 1000);
  };

  return (
    <>
      <div className="quize" id="quize">
        <div className="container">
          <div className="shorboshesh__title text-center py-4">
            <h1
              className="shorboshesh__title__paragraph"
              style={{ fontWeight: '700' }}
            >
              আজকের কুইজ
            </h1>
          </div>

          <div className="text-center my-5">
            <button
              onClick={() => {
                check ? toggleModel() : registerRedirect();
              }}
              type="button"
              className="btn btn-dark py-2 px-5 fs-5"
            >
              ক্লিক করুন
            </button>
            <p></p>
          </div>
        </div>
      </div>

      {modal && (
        <div className="quize__model">
          <div className="quize__overlay"></div>

          <div className="quize__model_content slide-bottom p-5 shadow-lg">
            {currentPage <= totalPage && (
              <>
                <button onClick={() => setModal(!modal)}>close</button>
                <h3 className="text-center fw-bolder">বিসিএস প্রস্তুতি কুইজ</h3>
              </>
            )}
            <div className="d-flex justify-content-between pt-5">
              {currentPage <= totalPage && (
                <p className="fw-bolder">
                  <RiTimerLine className="me-2" />
                  {minute} : {second}
                </p>
              )}
              {currentPage <= totalPage && (
                <div className="d-flex">
                  <div style={{ width: '100px', marginRight: '20px' }}>
                    <ProgressBar
                      variant="danger"
                      now={Math.round(
                        (Object.keys(answer).length * 100) / data.length
                      )}
                      label={`${Math.round(
                        (Object.keys(answer).length * 100) / data.length
                      )}%`}
                    />
                  </div>
                  <BsFlag className="fs-3" />
                </div>
              )}
            </div>

            {currentPage > totalPage && (
              <div className="text-center py-5">
                <h3 className="customRed">ধন্যবাদ!</h3>
                <h4 className="py-2">কুইজে অংশ নেওয়ার জন্য</h4>
                <span
                  onClick={clickHandler}
                  // onClick={() => nextButton()}
                  style={{
                    borderBottom: '2px solid #ff1010',
                    cursor: 'pointer',
                  }}
                  className="customRed"
                >
                  ফলাফল দেখুন
                </span>
              </div>
            )}

            {displayPost.map((post) => {
              return (
                <Quizes
                  key={post.id}
                  item={post}
                  changeHandler={changeHandler}
                ></Quizes>
              );
            })}
            {currentPage <= totalPage && (
              <Pagination
                currentPage={currentPage}
                prevButton={prevButton}
                nextButton={nextButton}
                totalPage={totalPage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Quize;
