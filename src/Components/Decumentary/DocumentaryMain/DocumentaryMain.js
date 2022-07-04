import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import {
  DocumentaryBanner,
  DocumentaryEditors,
  DocumentaryTopStories,
  DocumentaryTopTrending,
} from '../DocumentaryImport/DocumentaryImport';
import Aro from './../../Home/Aro/Aro';
import './DocumentaryMain.css';

const DocumentaryMain = () => {
  const { data } = useAuth();
  const [daata, setData] = useState([]);
  const [tending, setTending] = useState([]);
  const [editorPic, setEditorPic] = useState([]);
  const [slideContent, setSlideContent] = useState([]);

  useEffect(() => {
    const dataApi = async () =>
      await axios
        .get('https://api.bestaid.com.bd/api/show/document')
        .then((res) => {
          setData(res.data.data.docSlider);
          setTending(res.data.data.docTrending);
          setEditorPic(res.data.data.docEditorPic);
          setSlideContent(res.data.data.docTopStories);
        });
    dataApi();
  }, []);

  return (
    <>
      <DocumentaryBanner data={daata} />
      <DocumentaryTopStories slideContent={slideContent} />
      <DocumentaryTopTrending tending={tending} />
      <DocumentaryEditors editorPic={editorPic} />
      <Aro aroData={data.aro}></Aro>
    </>
  );
};

export default DocumentaryMain;
