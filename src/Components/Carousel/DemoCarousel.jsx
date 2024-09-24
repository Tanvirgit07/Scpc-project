"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DemoCarousel = () => {
  return (
    <div className="h-[90vh] mt-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen">
            <img
              src="https://i.ibb.co.com/1QJ1GB7/eat-2834549-640.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DemoCarousel;
