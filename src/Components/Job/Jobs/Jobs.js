import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dot from '../../../images/dot.png';
import job1 from '../../../images/jobs.png';

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="container">
        <div className="row">
          {[...Array(4).keys()].map((item) => {
            return (
              <div className="col-lg-12 py-5">
                <div
                  style={{ borderRadius: '10px' }}
                  className="d-flex job-container align-items-center customBgColor border p-4 px-5"
                >
                  <img className="img-fluid me-lg-5" src={job1} alt="" />
                  <div>
                    <div className="d-flex pb-4">
                      <h2>
                        Manager, Knowledge Management and Communications,
                        Ulta-Poor Graduation (UPG)
                      </h2>
                      <small>2 Days ago</small>
                    </div>
                    <div className="d-flex fw-bold">
                      <p className="pe-5">Brac Bangladesh</p>
                      <p>Dhaka</p>
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
                        Have strong interpersonal, communications and
                        presentation skills
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
                        Analytical writing ability{' '}
                      </li>
                    </ul>
                    <small className="fw-bolder">30,000 - 35,000</small>
                    <Link to="/">
                      {' '}
                      <p className="text-end">View Details</p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-danger customRedBg px-4">
            আরও <FaLongArrowAltRight className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
