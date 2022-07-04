import React from 'react';
import './JobMain.css';
import Aro from './../../Home/Aro/Aro';
import useAuth from './../../Hooks/useAuth';
import {
  JobBanner,
  JobSearch,
  JobSearchSlider,
  Jobs,
} from '../JobImport/JobImport';
const JobMain = () => {
  const { data } = useAuth();
  return (
    <>
      <JobBanner />
      <JobSearch />
      <JobSearchSlider />
      <Jobs />
      <Aro aroData={data.aro}></Aro>
    </>
  );
};

export default JobMain;
