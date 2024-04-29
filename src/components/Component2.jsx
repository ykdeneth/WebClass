import React from 'react'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import '../App.css'
import { fadeIn } from '../variants'
import { motion } from "framer-motion";
function Component2() {
  return (
    <div className='flex flex-col w-screen p-0 pt-20 m-0 md:flex lg:flex xl:flex 2xl:flex md:flex-col lg:flex-col'>
      <div className='flex flex-col gap-10 px-8 lg:items-center md:justify-center md:items-start lg:justify-center py-14 md:px-20 lg:px-20 md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row'>
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='w-full md:w-full lg:w-[45%]'
        >
          <img src={Img1} alt=""   />
        </motion.div>
        
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=' flex flex-col md:flex md:flex-col lg:flex lg:flex-col w-[90%] md:w-[90%] lg:w-[45%]'
        >
          <h1 className='pb-5 text-2xl font-bold popins_b lg:pb-20 md:pb-8 md:text-3xl lg:text-6xl'>The Heritage Of <br />
            Our Hotel</h1>
          <p className='popins_m'>Spoil yourself and family in this luxurious 520sq.ft suite. Offering panoramic angle views from breath-taking views from the large windows to those who just like to hear the soft soothing sounds of natures whistle.</p>
        </motion.div>
        
      </div>
      <div className='flex flex-col gap-10 px-8 md:justify-center md:items-start lg:items-center lg:justify-center py-14 md:px-20 md:flex md:flex-col lg:flex lg:flex-row-reverse'>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='w-full md:w-full lg:w-[45%]'
        >
          <img src={Img2} alt="" className='rounded-lg ' />
        </motion.div>
       
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=' flex flex-col md:flex md:flex-col lg:flex lg:flex-col w-[90%] md:w-[90%] lg:w-[45%]'
        >
          <h1 className='pb-5 text-3xl font-bold popins_b lg:pb-20 md:pb-8 md:text-3xl lg:text-6xl'>Elegant</h1>
          <p className='popins_m'>Our rooms are designed with cosiness and closeness with nature at its best; providing a place to unwind and forget the busy, soundly streets and indulge into relaxation. Explore the various types of rooms, explore the amenities, and choose the space that's right for you.</p>
        </motion.div>
        <div >
         
        </div>
      </div>
    </div>
  )
}

export default Component2