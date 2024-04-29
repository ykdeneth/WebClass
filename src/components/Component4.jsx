import React, { useRef, useState } from 'react'
import '../components/SwiperCSS1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import R1 from '../assets/Rectangle8.png'
import R2 from '../assets/Rectangle9.png'
import R3 from '../assets/Rectangle10.png'
import R4 from '../assets/Rectangle11.png'
import R5 from '../assets/Rectangle12.png'
import { fadeIn } from '../variants'
import { motion } from "framer-motion";
import '../App.css';
function Component4() {
  return (
    <div className='relative flex w-screen py-10 md:h-[80vh] h-[90vh] '>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,

          },
          '@0.75': {
            slidesPerView: 2,

          },
          '@1.00': {
            slidesPerView: 3,

          },
          '@1.50': {
            slidesPerView: 5,

          },
        }}

        className="mySwiper cswiper"
      >
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R1} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R2} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R3} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R4} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R5} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R1} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R3} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R2} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className='relative cswiper-slide'>
          <img src={R5} className='object-cover w-full h-full ' alt="" />
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full h-full bg-[#00000095] absolute flex flex-row justify-center items-center text-center text-[#ffffff80] popins_t'>
            Luxury Retreat
            Aaits
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Component4