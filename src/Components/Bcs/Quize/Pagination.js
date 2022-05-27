import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  const { nextButton, prevButton, currentPage, totalPage } = props;

  return (
    <div className="pt-5">
      <ul className="d-flex justify-content-between pt-4">
        <li>
          <button
            disabled={currentPage === 1 && 'disabled'}
            id="quizPrev"
            className="fs-4  border-0"
            onClick={() => {
              prevButton();
            }}
          >
            পূর্ববর্তি পৃষ্ঠা
            <FaLongArrowAltRight className="ms-2 fs-3 " />
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === totalPage && 'disabled'}
            className="fs-4 border-0"
            onClick={() => nextButton()}
          >
            পরবর্তী পৃষ্ঠা
            <FaLongArrowAltRight className="ms-2 fs-3 " />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
