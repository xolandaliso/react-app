import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/navigation';
//import 'swiper/pagination';
//import 'swiper/swiper-bundle.min.css';

function Carousel() {
  return (
    <Swiper autoplay={{ delay: 3000 }} loop>
      <SwiperSlide>
        <div style={{ backgroundImage: 'url(/image1.jpg)', height: '100vh', backgroundSize: 'cover' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundImage: 'url(/image2.jpg)', height: '100vh', backgroundSize: 'cover' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundImage: 'url(/image3.jpg)', height: '100vh', backgroundSize: 'cover' }}></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;