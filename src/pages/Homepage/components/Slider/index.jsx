import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper";

const Slider = () => {

    const sliderImages = [
        {
            id:1,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638174950560344223.jpg"
        },
        {
            id:2,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638170636990005790.jpg"
        },
        {
            id:3,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638200326842336230.jpg"
        },
        {
            id:4,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638193255127132910.jpg"
        },
        {
            id:5,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638175232495821107.jpg"
        },
        {
            id:6,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638170637400934530.jpg"
        },
        {
            id:7,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638170637591446772.jpg"
        },
        {
            id:8,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638170637941321356.jpg"
        },
        {
            id:9,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638170638116121885.jpg"
        },
        {
            id:10,
            src:"https://www.pizzahut.com.tr/CMSFiles/Image/Banner/638170638275178446.jpg"
        }
    ]

  return (
    <div className='px-[32px]'>
        <Swiper navigation={true} pagination={true} modules={[Pagination,Navigation]} className="mySwiper">
            {sliderImages.map(image => (
        <SwiperSlide>
            <a href='/'>
            <img src={image.src} alt={image.id} />
            </a>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
  )
}

export default Slider