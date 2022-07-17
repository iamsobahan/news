import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './Shorbosheshslider.css';
import { useNavigate } from 'react-router-dom';

const Shorbosheshslider = (props) => {
  const Navigate = useNavigate();
  const clickHandler = (slug) => {
    Navigate(`/details/${slug}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="shorbosheshSlide">
      <div className="container">
        <Slider {...settings}>
          {props.ShorbosheshsliderData.map((item) => {
            return (
              <div onClick={() => clickHandler(item.slug)}>
                <div className="d-flex">
                  <div className="w-25 text-center">
                    <p className="text-danger fw-bold">রাজনীতি</p>
                    <small style={{ fontSize: '12px', fontWeight: '600' }}>
                      ১০ মিনিট আগ
                    </small>
                  </div>
                  <div className="w-75">
                    <div>
                      <img
                        className="mx-auto img-fluid"
                        src={`https://api.bestaid.com.bd/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="text-center">
                      <h6>{item.title}</h6>
                      <small>{item.sub_title}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Shorbosheshslider;
