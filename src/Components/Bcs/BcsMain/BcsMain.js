import React from 'react';
import './BcsMain.css';
import { BcsBanner, Quize } from '../BcsImport/BcsImport';
import Aro from '../../Home/Aro/Aro';
import useAuth from './../../Hooks/useAuth';
const BcsMain = () => {
  const { data } = useAuth();
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <>
          <BcsBanner />
          <Quize />
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

export default BcsMain;
