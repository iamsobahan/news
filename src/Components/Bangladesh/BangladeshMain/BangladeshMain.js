import axios from 'axios';
import './BangladeshMain.css';
import React, { useEffect, useState } from 'react';

import {
  BangladeshBanner,
  HeaderTab,
} from '../BangladeshImport/BangladeshImport';

const BangladeshMain = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [subHeaderData, setSubHeaderData] = useState([]);
  const [subHeaderBig, setSubHeaderBig] = useState({});

  useEffect(() => {
    axios('https://api.bestaid.com.bd/api/show/sub-category/banglades').then(
      (res) => {
        setSubCategory(res.data.data.subCategory);
        setSubHeaderData(res.data.data.subHeaderData.splice(1, 3));
        setSubHeaderBig(res.data.data.subHeaderData.splice(0, 1));
      }
    );
  }, []);
  return (
    <>
      <BangladeshBanner data={subHeaderBig} subHeaderData={subHeaderData} />

      <HeaderTab item={subCategory} />
    </>
  );
};

export default BangladeshMain;
