import Slider from 'react-slick';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { HeaderTabCard } from '../BangladeshImport/BangladeshImport';

const HeaderTab = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
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
    <Tabs>
      <TabList>
        <div className="nav nav-pills mb-3 justify-content-center">
          {props?.item?.map((item, index) => (
            <Tab key={index} className="nav-link">
              {item.name}
            </Tab>
          ))}
        </div>
      </TabList>
      {props?.item?.map((item, index) => {
        return (
          <TabPanel key={index}>
            <div className="container mb-5">
              {props?.item[index]?.post.length < 1 && (
                <h3 className="text-center fw-bold text-uppercase text-muted py-5">
                  No Image
                </h3>
              )}

              <Slider {...settings}>
                {props?.item[index]?.post?.map((item, index) => {
                  return <HeaderTabCard key={index} item={item} />;
                })}
              </Slider>
            </div>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default HeaderTab;
