import './Header.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSearch } from 'react-icons/fi';
import { MdCastForEducation } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearchPlus, FaYoutube } from 'react-icons/fa';

import logo from '../../../images/logo.png';

import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderDinamic from './HeaderDinamic';

const Header = () => {
  const [headerData, setheaderData] = useState([]);
  useEffect(() => {
    axios('https://api.bestaid.com.bd/api/show/category/home')
      .then((res) => {
        setheaderData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="nav__bg">
      <Navbar>
        <Container>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="input">
              <input type="text" placeholder="নিউজ লিখতে এখানে লিখুন" />
              <button>
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5">
            <ul className="nav__right">
              <li>
                <a href="/">
                  বি.সি.এস
                  <MdCastForEducation />
                </a>
              </li>
              <li>
                <a href="/">
                  চাকুরী
                  <FaSearchPlus />
                </a>
              </li>
              <li>
                <a href="/">
                  ডকুমেন্টরি
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>

      <div className="nav__bg__bottom">
        <Container>
          <ul>
            {headerData.map((item) => (
              <HeaderDinamic key={item.id} item={item}></HeaderDinamic>
            ))}
            <li className="dropdown-container">
              <a href="/">
                আরও <IoIosArrowDown />
              </a>
              <div className="dropdown-content">
                <li>
                  <a className="dropdown-item" href="/">
                    ধর্ম
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    মুক্তকথা
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/">
                    চাকরি
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    শিক্ষা
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    বিজ্ঞান ও প্রযুক্তি
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    লাইফস্টাইল
                  </a>
                </li>
              </div>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Header;
