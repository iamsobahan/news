import React, { useState, useEffect } from 'react';
import './DocumentaryMain.css';
import Aro from './../../Home/Aro/Aro';
import {
  DocumentaryBanner,
  DocumentaryTopStories,
  DocumentaryTopTrending,
  DocumentaryEditors,
} from '../DocumentaryImport/DocumentaryImport';
import axios from 'axios';

const DocumentaryMain = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/document')
      .then((res) => setData(res.data.data));
  }, []);
  return (
    <>
      <DocumentaryBanner data={data.docSlider} />
      <DocumentaryTopStories />
      <DocumentaryTopTrending />
      <DocumentaryEditors />
      <Aro></Aro>
    </>
  );
};

export default DocumentaryMain;
