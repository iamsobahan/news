import React from 'react';
import Aro from '../../Home/Aro/Aro';
import BcsBanner from '../BcsBanner/BcsBanner';
import useAuth from './../../Hooks/useAuth';

const QuizeResult = () => {
  window.scroll(0, 0);
  const { answer, data } = useAuth();
  console.log(answer);
  for (const val in answer) {
    console.log(answer[val]);
  }

  return (
    <div>
      {Object.keys(data).length > 0 ? (
        <>
          <BcsBanner></BcsBanner>
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
    </div>
  );
};

export default QuizeResult;
