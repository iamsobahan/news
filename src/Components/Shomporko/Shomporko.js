import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shomporko = () => {
  window.scroll(0, 0);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.bestaid.com.bd/api/show/about-us')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-5 container">
      {Object.keys(data).length > 0 ? (
        <p dangerouslySetInnerHTML={{ __html: data.about_us }}></p>
      ) : (
        <div
          style={{ width: '3rem', height: '3rem' }}
          class="spinner-border position-absolute start-50"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Shomporko;
