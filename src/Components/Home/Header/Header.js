import './Header.css';
import React from 'react';
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

const Header = () => {
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
            <a href="/">
              {' '}
              <img className="logo" src={logo} alt="" />
            </a>
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
            <li>
              <Link to="/bangladesh">বাংলাদেশ</Link>
            </li>
            <li>
              <a href="/">রাজনীতি </a>
            </li>
            <li>
              <a href="/">বিশ্ব </a>
            </li>
            <li>
              <a href="/">খেলা </a>
            </li>
            <li>
              <a href="/">বিনোদন </a>
            </li>
            <li>
              <a href="/">স্বাস্থ্য </a>
            </li>
            <li>
              <a href="/">বানিজ্য </a>
            </li>
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
