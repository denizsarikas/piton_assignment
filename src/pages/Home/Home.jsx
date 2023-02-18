import React from 'react';
import '../Home/Home.css';
import Header from '../../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '../../img_and_logos/Banner.png';
import CategoryList from '../../components/CategoryList';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div className="mt-20">

        <div className="mx-auto mt-6 w-4/5">
          <Slider {...settings}>
            <div>
              <img src={Banner} alt="banner" />
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2">
                Resim Üzerindeki Yazı
              </h1>
            </div>
            <div>
              <img src={Banner} alt="banner" />
            </div>
            <div>
              <img src={Banner} alt="banner" />
            </div>
          </Slider>
        </div>

        <div>
          <CategoryList />
        </div>
      </div>
    </>
  );
};

export default Home;
