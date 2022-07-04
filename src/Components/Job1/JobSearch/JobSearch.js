import React from 'react';
import { Link } from 'react-router-dom';
import { BsFilterLeft } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const JobSearch = () => {
  return (
    <div className="jobSearch">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <button type="button" className="bg-dark text-white px-4 py-1">
              <BsFilterLeft className="me-2" /> Filter
            </button>
          </div>
          <div className="col-lg-10">
            <div className="input-group inputIconMain">
              <div className="inputIcon">
                <FiSearch />
              </div>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Search Jobs"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-5">
          <button type="button" class="btn btn-danger customRedBg px-4  border">
            Job Applied : 10
          </button>
          <button type="button" class="btn btn-danger customRedBg px-4  border">
            Save Jobs: 10
          </button>
          <button type="button" class="btn btn-danger customRedBg px-4  border">
            Job Available : 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
