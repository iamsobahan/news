import React, { useState, useEffect } from 'react';
import './JobMain.css';
import Aro from './../../Home/Aro/Aro';
import useAuth from './../../Hooks/useAuth';
import {
  JobBanner,
  JobSearch,
  JobSearchSlider,
  Jobs,
} from '../JobImport/JobImport';
import axios from 'axios';

import JobPagination from './../Jobs/JobPagination';
const JobMain = () => {
  const { data } = useAuth();
  const [jobData, setJobData] = useState({});
  const [circular, setCircular] = useState([]);

  const [postPerPage, setPostPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/job-circular')
      .then((res) => {
        setJobData(res.data.data);

        setCircular(res.data.data.dataCircular);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = circular.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => setCurrentPage(pageNum);
  const nextPage = () => setCurrentPage((val) => val + 1);
  const prevPage = () => setCurrentPage((val) => val - 1);

  return (
    <>
      {Object.keys(jobData).length > 0 ? (
        <>
          <JobBanner bannerData={jobData.dataJobPost} />
          <JobSearchSlider sliderData={jobData.dataHotJobs} />
          {/* <JobSearch /> */}
          <Jobs circulerData={currentPosts} data={circular} />
          <JobPagination
            postsPerPage={postPerPage}
            totalPosts={circular.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
          ></JobPagination>
          <Aro aroData={data.aro}></Aro>
        </>
      ) : (
        <div
          style={{ width: '3rem', height: '3rem' }}
          class="spinner-border position-absolute start-50"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default JobMain;
