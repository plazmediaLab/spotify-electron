import Slider from 'react-slick';
import SlideNextButton from './slide-next-button';
import SlidePrevButton from './slide-prev-button';
import './slide-styles.css'

import React, { useEffect, useState } from 'react';
import { storage } from 'utils/Firebase';
import { Link } from '@reach/router';

function SlideItem({ item, folderPath, linkPath }){
  const [bannerHero, setBannerHero] = useState('');

  useEffect(() => {
    storage.ref(`${folderPath}/${item.cover}`).getDownloadURL().then((res) => {
      setBannerHero(res);
    })
    // eslint-disable-next-line
  }, []);

  return (
    <Link to={`/dashboard/${linkPath}/${item.id}`} className="hover:text-green-500">
      <div 
        style={{ backgroundImage: `url(${bannerHero})` }} 
        className="bg-cover bg-center h-20 w-full rounded-t-md"
      ></div>
      <p className="text-xs truncate bg-transparent tracking-wider px-2 pb-1 pt-2 block hover:underline bg-background-dark rounded-b-md">{item.name}</p>
    </Link>
  );
};

export default function BasicSlide({ title, data, folderPath, linkPath }){
  const settings = {
    speed: 250,
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    centerMode: true,
    className: 'basic-slide-items',
    nextArrow: <SlideNextButton />,
    prevArrow: <SlidePrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  }

  if (data?.length < 12) {
    return null
  };

  return (
    <div className="">
      <h2 className="uppercase font-light tracking-wider text-sm text-center mb-3">{title}</h2>
      <Slider {...settings} className="text-center">
        {data.map((item) => (
          <SlideItem key={item.id} item={item} folderPath={folderPath} linkPath={linkPath} />
        ))}
      </Slider>
    </div>
  );
};