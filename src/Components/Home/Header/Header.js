import './Header.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSearch, FiLogIn } from 'react-icons/fi';
import { MdCastForEducation } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearchPlus, FaYoutube } from 'react-icons/fa';

import logo from '../../../images/logo.png';

import { Container, Navbar } from 'react-bootstrap';
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
      {/* <RegisterModal
        show={modalShow}
        onLoginShow={() => setModalShow(true)}
        onHide={() => setModalShow(false)}
      /> */}
      <Navbar>
        <Container>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="input">
              <input type="text" placeholder="নিউজ লিখতে এখানে লিখুন" />
              <button>
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <ul className="nav__right">
              <li>
                <Link to="/bcs">
                  বি.সি.এস
                  <MdCastForEducation />
                </Link>
              </li>
              <li>
                <Link to="/jobs">
                  চাকুরী
                  <FaSearchPlus />
                </Link>
              </li>
              <li>
                <Link to="/documentary">
                  ডকুমেন্টরি
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="/register">
                  Login/Register
                  <FiLogIn />
                </Link>
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
              <ul className="dropdown-content">
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
              </ul>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Header;
