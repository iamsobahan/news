import React from 'react';
import './Tab.css';
import { Tab } from 'react-tabs';

const TabHeader = (props) => {
  const { item } = props;
  return (
    <div className="nav-item" role="presentation">
      <button className="nav-link">{item.name}</button>
    </div>
  );
};

export default TabHeader;
