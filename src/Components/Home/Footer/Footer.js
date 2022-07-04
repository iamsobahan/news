import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';
import FooterImage from '../../../images/logo.png';
import FooterHighlight from '../../../images/FooterHighlight.png';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { TiWiFi } from 'react-icons/ti';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-5">
          <Row>
            <Col>
              <img src={FooterImage} alt="footer Logo" />
              <p>২০২২ সময় মিডিয়া লিমিটেড</p>
              <p className="pt-4">সমস্ত অধিকার সংরক্ষিত</p>
              <img className="mb-4 pb-4" src={FooterHighlight} alt="" />
              <p>সময় মোবাইল অ্যাপ ডাউনলোড করুন</p>
              <div className="d-flex mobileDeviceApps">
                <div className="d-inline me-2">
                  <div className="d-flex justify-content-between align-items-center border border-2 border-dark p-2 d-inline rounded w-200 bg-dark text-light">
                    <div>
                      <FaGooglePlay className="f-30" />
                    </div>
                    <div>
                      <p>GET IN ONE</p>
                      <h3>Google Play</h3>
                    </div>
                  </div>
                </div>
                <div className="d-inline me-2">
                  <div className="d-flex justify-content-between align-items-center border border-2 border-dark p-2 d-inline rounded w-200 bg-light text-dark">
                    <div>
                      <AiFillApple className="f-30" />
                    </div>
                    <div>
                      <p>Download on the</p>
                      <h3>Apple Store</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <ul>
                <li className="list-none mb-4">বাংলাদেশ</li>
                <li className="list-none mb-4">খৈলা</li>
                <li className="list-none mb-4">বাণিজ্য</li>
                <li className="list-none mb-4">শিক্ষা</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li className="list-none mb-4">রাজনীতি</li>
                <li className="list-none mb-4">বিনদোন</li>
                <li className="list-none mb-4">মুক্তকথা</li>
                <li className="list-none mb-4">বিজ্ঞান ও কথা</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li className="list-none mb-4">আন্তর্জাতিক</li>
                <li className="list-none mb-4">স্বাস্থ্য্</li>
                <li className="list-none mb-4">চাকরি</li>
                <li className="list-none mb-4">লাইফস্টাইল</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="py-5">
          <p> ফলো সামাজিক সময়</p>
          <div className="py-3 border-bottom border-2 border-dark">
            <BsFacebook className="f-30 me-3" />
            <AiFillYoutube className="f-30 me-3" />
            <AiOutlineTwitter className="f-30 me-3" />
            <FaLinkedin className="f-30 me-3" />
            <BsInstagram className="f-30 me-3" />
            <BsPinterest className="f-30 me-3" />
            <TiWiFi className="f-30 me-3" />
          </div>
          <ul className="mt-3">
            <li className="d-inline me-4 list-none">আমাদের সম্পর্কে</li>
            <li className="d-inline me-4 list-none">গোপনীয়তা নীতি</li>
            <li className="d-inline me-4 list-none">যোগাযোগ</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
