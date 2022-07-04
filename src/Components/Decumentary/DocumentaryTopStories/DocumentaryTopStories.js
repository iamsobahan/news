import { AiOutlineEye } from 'react-icons/ai';
import { BiComment, BiTimeFive } from 'react-icons/bi';
import Slider from 'react-slick';

const DocumentaryTopStories = ({slideContent}) => {

  console.log(slideContent);
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  };
  return (
    <div className="documentaryTopStories">
      <div className="container">
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            টপ স্টোরিজ
          </h1>
        </div>
        <Slider {...settings}>
        {
          slideContent.map(content=> <div className="documentaryTopStories__content">
            <img
              className="documentaryTopStories__content-img img-fluid"
              src={`https://api.bestaid.com.bd/${content.image}`}
              alt=""
            />
            <div className="documentaryTopStories__content-overlay">
              <div className="documentaryTopStories__content-overlay-content">
                <small className="customRed">ইউরোপ</small>
                <small className="text-white">২১ এপ্রিল ২০২২</small>
              </div>
              <h3 dangerouslySetInnerHTML={{__html:content.description}}>
                
              </h3>
              <div className="documentaryTopStories__content-overlay-content-icon">
                <div className="mx-3">
                  <BiTimeFive className="me-1" />১ ঘণ্টা আগে
                </div>
                <div className="mx-3">
                  <AiOutlineEye className="me-1" />
                  ১০০০
                </div>
                <div className="mx-3">
                  <BiComment className="me-1" />
                  ৪৭
                </div>
              </div>
            </div>
          </div>)
        }
        </Slider>
      </div>
    </div>
  );
};

export default DocumentaryTopStories;
