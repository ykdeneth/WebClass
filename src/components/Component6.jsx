import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../components/SwiperCSS2.css";
import { EffectCoverflow } from "swiper/modules";

function Component6() {
  return (
    <div className="w-screen py-10 px-5 md:h-[70vh] h-[80vh]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 5,
          },
        }}
        className="mySwipe ccswiper"
      >
        <SwiperSlide className="relative ccswiper-slide ">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ccswiper-slide relative">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="ccswiper-slide img object-cover w-full"
          />
          <div className="absolute w-full flex flex-col px-5 py-3 bg-[#00000020]">
            <span className="w-full popins_t text-xl flex text-center py-2 flex-row justify-center items-center">
              Boat Services
            </span>
            <button className="w-full popins_t text-base text-[#F0BB00] flex text-center justify-center items-center py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Component6;
