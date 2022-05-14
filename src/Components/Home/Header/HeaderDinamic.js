import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDinamic = (props) => {
  const { item } = props;
  return (
    <li>
      <Link to={`/category/${item.slug}`}>{item.name}</Link>
    </li>
  );
};

export default HeaderDinamic;
