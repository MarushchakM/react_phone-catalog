import { Swiper, SwiperSlide } from 'swiper/react';
import { MainSliderItem } from '../MainSlideItem/MainSlideItem';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import './MainSlider.scss';
import 'swiper/css';

export const MainSlider = () => {
  return (
    <div className="mainSlider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.mainSlider__dotes' }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        className="mainSlider__block"
      >
        <SwiperSlide>
          <MainSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem />
        </SwiperSlide>
        <div className="swiper-button-prev">+</div>
        <div className="swiper-button-next">+</div>
      </Swiper>

      <div className="mainSlider__dotes"></div>
    </div>
  );
};
