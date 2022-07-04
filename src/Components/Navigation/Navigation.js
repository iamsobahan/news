import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars, FaSearchPlus, FaYoutube } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdCastForEducation } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import HeaderDinamic from '../Home/Header/HeaderDinamic';
import './Navigation.css';

function Navigation() {
  const [isTrue, setIsTrue] = useState(false);
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
    <div className="navigation">
      <Container>
        <div className="pb-3">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="w-50">
              <Link to="/">
                <img className="w-100" src={logo} alt="" />
              </Link>
            </div>
            <div></div>
            {isTrue ? (
              <div>
                <AiOutlineClose
                  onClick={() => setIsTrue(false)}
                  className="menubar"
                />
              </div>
            ) : (
              <div onClick={() => setIsTrue(true)}>
                <FaBars className="menubar" />
              </div>
            )}
          </div>
          <div className="input mx-auto my-3">
            <input type="text" placeholder="নিউজ লিখতে এখানে লিখুন" />
            <button>
              <FiSearch />
            </button>
          </div>
          <ul className="d-flex justify-content-between">
            <li>
              <Link className="bg-dark text-light px-3 py-1 rounded" to="/bcs">
                বি.সি.এস
                <MdCastForEducation className="ms-2" />
              </Link>
            </li>
            <li>
              <Link className="bg-dark text-light px-3 py-1 rounded" to="/jobs">
                চাকুরী
                <FaSearchPlus className="ms-2" />
              </Link>
            </li>
            <li>
              <Link
                className="bg-dark text-light px-3 py-1 rounded"
                to="/documentary"
              >
                ডকুমেন্টরি
                <FaYoutube className="ms-2" />
              </Link>
            </li>
          </ul>
        </div>
        {isTrue && (
          <div className="position-absolute h-100 sidebar px-2">
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
          </div>
        )}
      </Container>
    </div>
  );
}

export default Navigation;
