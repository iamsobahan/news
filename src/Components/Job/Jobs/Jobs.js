import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFilterLeft } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import dot from '../../../images/dot.png';
import Swal from 'sweetalert2';

const Jobs = (props) => {
  const [searchVal, setSearchVal] = useState('');

  if (props.loading) {
    return <h2>Loading....</h2>;
  }

  const clickHandler = () => {
    if (searchVal === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'write jobs Name',
      });
    }
  };
  return (
    <div className="jobs">
      <div className="jobSearch">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-2">
              <button type="button" className="bg-dark text-white px-4 py-1">
                <BsFilterLeft className="me-2" /> Filter
              </button>
            </div> */}
            <div className="col-lg-12">
              <div className="input-group inputIconMain">
                <div className="inputIcon">
                  <FiSearch onClick={clickHandler} />
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  placeholder="Search Jobs"
                  aria-describedby="inputGroupPrepend2"
                  onChange={(event) => setSearchVal(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-5">
            <button
              type="button"
              class="btn btn-danger customRedBg px-4  border"
            >
              Job Applied : 10
            </button>
            <button
              type="button"
              class="btn btn-danger customRedBg px-4  border"
            >
              Save Jobs: 10
            </button>
            <button
              type="button"
              class="btn btn-danger customRedBg px-4  border"
            >
              Job Available : 10
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {searchVal &&
            props.data
              .filter((val) => {
                if (
                  val.position_name
                    .toLowerCase()
                    .includes(searchVal.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <div className="col-lg-12 py-5">
                    <div
                      style={{ borderRadius: '10px' }}
                      className="d-flex job-container align-items-center customBgColor border p-4 px-5"
                    >
                      <img
                        className="w-25 me-lg-5"
                        src={`https://api.bestaid.com.bd/${item.company_image}`}
                        alt=""
                      />
                      <div>
                        <div className="d-flex pb-4">
                          <h2>
                            {item.position_name}
                            {item.job_description}
                          </h2>
                          <small>2 Days ago</small>
                        </div>
                        <div className="d-flex fw-bold">
                          <p className="pe-5">{item.company_name}</p>
                          <p>{item.location}</p>
                        </div>
                        <ul>
                          <li>
                            {' '}
                            <img
                              style={{
                                width: '10px',
                                height: '10px',
                                marginRight: '15px',
                              }}
                              src={dot}
                              alt=""
                            />
                            {item.job_description}
                          </li>
                          <li>
                            <img
                              style={{
                                width: '10px',
                                height: '10px',
                                marginRight: '15px',
                              }}
                              src={dot}
                              alt=""
                            />
                            {item.job_description}
                          </li>
                        </ul>
                        <small className="fw-bolder">{item.salary_range}</small>
                        <div className="text-end">
                          <a
                            href={`https://${item.link}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          {props.circulerData.map((item) => {
            return (
              <div className="col-lg-12 py-5">
                <div
                  style={{ borderRadius: '10px' }}
                  className="d-flex job-container align-items-center customBgColor border p-4 px-5"
                >
                  <img
                    className="w-25 me-lg-5"
                    src={`https://api.bestaid.com.bd/${item.company_image}`}
                    alt=""
                  />
                  <div>
                    <div className="d-flex pb-4">
                      <h2>
                        {item.position_name}
                        {item.job_description}
                      </h2>
                      <small>2 Days ago</small>
                    </div>
                    <div className="d-flex fw-bold">
                      <p className="pe-5">{item.company_name}</p>
                      <p>{item.location}</p>
                    </div>
                    <ul>
                      <li>
                        {' '}
                        <img
                          style={{
                            width: '10px',
                            height: '10px',
                            marginRight: '15px',
                          }}
                          src={dot}
                          alt=""
                        />
                        {item.job_description}
                      </li>
                      <li>
                        <img
                          style={{
                            width: '10px',
                            height: '10px',
                            marginRight: '15px',
                          }}
                          src={dot}
                          alt=""
                        />
                        {item.job_description}
                      </li>
                    </ul>
                    <small className="fw-bolder">{item.salary_range}</small>
                    <div className="text-end">
                      <a
                        href={`https://${item.link}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
