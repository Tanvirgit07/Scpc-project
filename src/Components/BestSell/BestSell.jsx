"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";

import "./Bestsell.css";

const BestSell = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-12 mb-12 text-green-600">
        Best Selling Products
      </h1>
      <div>
        <Swiper
          slidesPerView={3}
          grid={{ rows: 2 }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Autoplay]}
          className="mySwiper"
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="product-card relative p-4 rounded-xl bg-white shadow-lg">
                <div className="relative">
                  <img
                    className="product-image w-full h-40 object-cover rounded-lg"
                    src="https://i.ibb.co.com/n77PBLR/Mutton-rolls-c70a28c.jpg"
                    alt="Best Selling"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0">
                  <h1 className="text-2xl font-bold text-green-600 text-center">
                    Best Selling
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSell;
