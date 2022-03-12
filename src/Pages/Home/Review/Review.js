import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./Review.css";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";

const Review = (props) => {
  const { name, img, des } = props?.review||{}
  console.log("Reviews bro",props)

    return (
        <>
         
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
           <SwiperSlide>
           <>
          <img src={img} alt=""  width="80px"height="80px"className="rounded-circle" />
          {/* <h5 style={{ color: "#3498db", fontWeight: 600 }}>{name}</h5>
            <div style={{ height: "150px" }}>
              <p>{des}</p>
            </div> */}
          </>
        </SwiperSlide>
      



        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
        </Swiper>
      </>
    );
};

export default Review;