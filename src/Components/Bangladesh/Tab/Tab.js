import React from 'react';
import './Tab.css';
import TabHeader from './TabHeader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tab1 from '../../../images/tab.png';
import tab2 from '../../../images/tab2.png';
import tab3 from '../../../images/tab3.png';
import TabCard from './TabCard';

const Tab = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,

    // fade: true,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
  };
  const tabs = [
    { name: 'চট্টগ্রাম', id: 'pills-chottogram-tab', target: '#chottogram' },
    { name: 'রাজশাহী', id: 'pills-rajshahi-tab', target: '#rajshahi' },
    { name: 'ময়মনসিংহ', id: 'pills-moymonshinho-tab', target: '#moymonshinho' },
    { name: 'বরিশাল', id: 'pills-borishal-tab', target: '#borishal' },
    { name: 'সিলেট', id: 'pills-sylhet-tab', target: '#sylhet' },
    { name: 'খুলনা', id: 'pills-khulna-tab', target: '#khulna' },
    { name: 'রংপুর', id: 'pills-rangpur-tab', target: '#rangpur' },
  ];
  return (
    <div className="tab">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  ঢাকা
                </button>
              </li>
              {tabs.map((item, index) => (
                <TabHeader
                  key={index}
                  name={item.name}
                  id={item.id}
                  target={item.target}
                ></TabHeader>
              ))}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab1}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="chottogram"
                role="tabpanel"
                aria-labelledby="pills-chottogram-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab1}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="rajshahi"
                role="tabpanel"
                aria-labelledby="pills-rajshahi-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab3}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="moymonshinho"
                role="tabpanel"
                aria-labelledby="pills-moymonshinho-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab2}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="borishal"
                role="tabpanel"
                aria-labelledby="pills-borishal-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab3}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="sylhet"
                role="tabpanel"
                aria-labelledby="pills-sylhet-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab2}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="khulna"
                role="tabpanel"
                aria-labelledby="pills-khulna-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab3}></TabCard>
                  ))}
                </Slider>
              </div>
              <div
                className="tab-pane fade"
                id="rangpur"
                role="tabpanel"
                aria-labelledby="pills-rangpur-tab"
              >
                <Slider {...settings}>
                  {[...Array(5).keys()].map((_, index) => (
                    <TabCard key={index} img={tab3}></TabCard>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
