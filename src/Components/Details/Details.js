import React, { useEffect, useState } from 'react';
import './Details.css';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  window.scroll(0, 0);
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios(`https://api.bestaid.com.bd/api/show/news/details/${id}`)
      .then((res) => {
        setDetails(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="details">
      <div className="container">
        <div className="details__headline">
          <p className="details__container-para">{details?.category?.name}</p>
          <small className="details__container-small">
            {new Date(details?.created_at).toLocaleDateString('bn-BD')}
          </small>
        </div>
        <div className="details__content">
          <h1>{details?.title}</h1>
          <h4>শিবলী আল সাদিক</h4>
          <p>
            ইউরোপ, আমেরিকার পর এবার বাংলাদেশের তৈরি পোশাক শিল্পের বড় বাজার হতে
            চলেছে মধ্যপ্রাচ্য। গত কয়েক দশকে ভারত, চীন ও ভিয়েতনামের দখলে থাকলেও
            বর্তমানে তা দখলে নিতে চলেছে বাংলাদেশ। বিশ্ববাজারে বাংলাদেশি
            ব্র্যান্ড কোম্পানি ইয়ার ইন্টারন্যাশনাল সৌদি আরব, বাহরাইনের পর
            সংযুক্ত আরব আমিরাতের সারজায় বাংলাদেশি গার্মেন্টস পণ্যের বৃহত্তম
            বাজার সৃষ্টির লক্ষ্যে যাত্রা শুরু করেছে।
          </p>
          <div className="details__img text-center my-3">
            <img src={`https://api.bestaid.com.bd/${details?.image}`} alt="" />
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: details?.description }}></p>
          </div>
        </div>
        <div className="details__footer">
          <ul>
            <li>
              <a href="/">বাজার</a>
            </li>
            <li>
              <a href="/">বাংলাদেশ</a>
            </li>
            <li>
              <a href="/">সংযুক্ত আরব আমিরাত</a>
            </li>
            <li>
              <a href="/">গার্মেন্টস শিল্প</a>
            </li>
            <li>
              <a href="/">মধ্যপ্রাচ্য</a>
            </li>
            <li>
              <a href="/">বাংলাদেশের তৈরী পোশাক </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
