import { useState, useEffect } from 'react';
import axios from 'axios';

const useHomeData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/home-page')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return {
    data,
    setData,
  };
};

export default useHomeData;
