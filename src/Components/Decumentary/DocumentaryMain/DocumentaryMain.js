import React from 'react';
import './DocumentaryMain.css';
import Aro from './../../Home/Aro/Aro';
import {
  DocumentaryBanner,
  DocumentaryTopStories,
  DocumentaryTopTrending,
  DocumentaryEditors,
} from '../DocumentaryImport/DocumentaryImport';

const DocumentaryMain = () => {
  return (
    <>
      <DocumentaryBanner />
      <DocumentaryTopStories />
      <DocumentaryTopTrending />
      <DocumentaryEditors />
      <Aro></Aro>
    </>
  );
};

export default DocumentaryMain;
