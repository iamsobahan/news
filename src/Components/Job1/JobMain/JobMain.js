import React from 'react';
import './JobMain.css';
import Aro from './../../Home/Aro/Aro';
import {
  JobBanner,
  JobSearch,
  JobSearchSlider,
  Jobs,
} from '../JobImport/JobImport';
const JobMain = () => {
  return (
    <>
      <JobBanner />
      <JobSearch />
      <JobSearchSlider />
      <Jobs />
      <Aro></Aro>
    </>
  );
};

export default JobMain;
