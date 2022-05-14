import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabHeader from '../Tab/TabHeader';
import './Test.css';

const Test = () => {
  const [catTab, setcatTab] = useState([]);
  const [Loader, setLoader] = useState(false);

  useEffect(() => {
    axios('https://api.bestaid.com.bd/api/show/sub-category/banglades').then(
      (res) => {
        setcatTab(res.data.data.subCategory);
        setLoader(true);
      }
    );
  }, []);

  return (
    <Tabs>
      <TabList>
        <div className="nav nav-pills mb-3 justify-content-center">
          {catTab.map((item) => (
            <Tab key={item.id}>
              <TabHeader item={item}></TabHeader>
            </Tab>
          ))}
        </div>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 5</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 6</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 7</h2>
      </TabPanel>
    </Tabs>
  );
};

export default Test;
