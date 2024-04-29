import React from 'react';
import '../components/comp.css';
import Image1 from "../assets/image1.jpg";
import "../App.css";
import { fadeIn } from '../variants'
import { motion } from "framer-motion";
function Component1() {
  return (
    <div className="relative h-[90vh] flex flex-row w-screen p-0 m-0 ">
      <div className="absolute w-full">
        <img src={Image1} alt="" className="z-0 object-cover w-full bg-no-repeat h-[90vh]"/>
      </div>
      <div className="absolute w-full h-[90vh] object-cover bg-no-repeat bg-[#00000098] flex flex-col px-20 md:py-16">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:text-left text-center b-inter flex flex-col w-full pt-20 md:pt-20 lg:pt-20 xl:pt-14 2xl:pt-20 pb-5 lg:leading-[110px] 2xl:leading-[110px] xl:leading-[90px] md:leading-[80px] lg:text-7xl leading-[40px] justify-center md:items-start items-center text-3xl md:text-5xl text-[#ffffff89]"
        >
          A Welcoming Gateway <br />
          That Guarantees <br />
          Elegance.
        </motion.div>
        
        <div className="flex flex-row items-center justify-center pt-20 lg:pt-20 xl:pt-10 2xl:pt-20 md:justify-start lg:">
          <button className="px-2 py-4 bg-yellow-400 rounded-md lg:w-[20vw] md:w-[25vw] w-[60vw] text-2xl b-inter">
            Register Now
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default Component1