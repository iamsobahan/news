import React from 'react';
import Banner from './../Banner/Banner';
import New from './../TopNews/New';

import Shorboshesh from './../Shorboshesh/Shorboshesh';
import Shorbosheshslider from './../Shorbosheshslider/Shorbosheshslider';
import VideoShongbad from './../VideoShongbad/VideoShongbad';
import Binodon from './../Binodon/Binodon';
import Aro from './../Aro/Aro';
import useAuth from './../../Hooks/useAuth';

const Home = () => {
  window.scroll(0, 0);
  const { data } = useAuth();
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <>
          <Banner bannerData={data.homeSlider}></Banner>
          <New newData={data.topNews}></New>
          <Shorboshesh shorbosheshData={data.sobSeshHead}></Shorboshesh>

          <Shorbosheshslider
            ShorbosheshsliderData={data.sobSesh}
          ></Shorbosheshslider>

          <VideoShongbad
            videoShongbadData={data.videoNews}
            videoShongbadSliderData={data.nextVideo}
          ></VideoShongbad>
          <Binodon
            binodonBoroData={data.binodon[0]}
            bindodonChotoData={data.binodon.slice(1)}
          ></Binodon>
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

export default Home;
