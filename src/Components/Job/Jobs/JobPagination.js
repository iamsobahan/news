import React from 'react';

const JobPagination = (props) => {
  const pageNumbers = [];
  const {
    postsPerPage,
    totalPosts,
    paginate,
    nextPage,
    prevPage,
    currentPage,
  } = props;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            disabled={currentPage === 1 && 'disabled'}
            onClick={() => prevPage()}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button onClick={() => paginate(num)} className="page-link">
              {num}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === pageNumbers.length && 'disabled'}
            onClick={() => nextPage()}
            className="page-link rounded-end"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default JobPagination;
