import Slider from 'react-slick';
import SlideNextButton from './slide-next-button';
import SlidePrevButton from './slide-prev-button';
import './slide-styles.css'

import React, { useEffect, useState } from 'react';
import { storage } from 'utils/Firebase';

function SlideItem({ item }){
  const [bannerHero, setBannerHero] = useState('');

  useEffect(() => {
    storage.ref(`artists/${item.hero}`).getDownloadURL().then((res) => {
      setBannerHero(res);
    })
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-background-dark rounded-md cursor-pointer" onClick={() => console.log(item.slug)}>
      <div 
        style={{ backgroundImage: `url(${bannerHero})` }} 
        className="bg-cover bg-center h-20 w-full mb-1"
      ></div>
      <p className="text-xs truncate tracking-wider px-2 py-1 block hover:underline">{item.name}</p>
    </div>
  );
};

export default function BasicSlide({ title, data }){
  const settings = {
    speed: 250,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    className: 'basic-slide-items',
    nextArrow: <SlideNextButton />,
    prevArrow: <SlidePrevButton />
  }

  return (
    <div className="">
      <h2 className="uppercase font-light tracking-wider text-sm text-center mb-2">{title}</h2>
      <Slider {...settings} className="text-center">
        {data.map((item) => (
          <SlideItem key={item.slug} item={item} />
        ))}
      </Slider>
    </div>
  );
};