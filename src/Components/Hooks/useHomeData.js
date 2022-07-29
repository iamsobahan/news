import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useHomeData = () => {
  const [data, setData] = useState({});
  const [contact, setContact] = useState({});
  const [answer, setAnswer] = useState({});
  const [result, setResult] = useState([]);

  const [loginShow, setLoginModalShow] = React.useState(false);
  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/home-page')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/site-contact')
      .then((res) => {
        setContact(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    data,
    setData,
    contact,
    loginShow,
    setLoginModalShow,
    setAnswer,
    answer,
  };
};

export default useHomeData;
