import React from "react";
import R6 from "../assets/Rectangle18.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import "../App.css";
function Component5() {
  return (
    <div className="w-screen md:py-20 md:px-10 py-5 flex flex-col gap-y-5">
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-row w-full justify-center items-center md:popins_m lg:text-6xl md:text-4xl text-3xl  text-center popins_t "
      >
        Enhance Your Visit with Unforgettable
      </motion.div>
      <div className="md:flex md:flex-row  md:py-5 md:gap-x-7 w-full md:px-10  flex flex-col">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:flex md:flex-col md:text-base md:leading-10 leading-10 text-justify popins_t md:w-1/2 md:px-5 w-full px-10 py-5"
        >
          <span>
            At our hotel, we go above and beyond to ensure your stay is
            exceptional. We offer an array of activities and relaxation options
            that are carefully designed to create unforgettable moments for our
            guests. Whether you're seeking adventure or a peaceful retreat, our
            diverse range of leisure opportunities and serene surroundings
            provide the perfect backdrop for an extraordinary stay. Discover the
            ultimate in relaxation and leisure, exclusively at our hotel.
          </span>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-row justify-center items-center py-10"
          >
            <button className="bg-transparent text-[#F0BB00] popins_t text-2xl hover:bg-[#00000010] px-5 py-2 rounded-lg duration-500 hover:duration-500 active:bg-[#00000020] active:duration-500 hover:scale-[1.1]">
              Explore Now
            </button>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-y-5 md:w-1/2 px-5 w-full py-5">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex flex-row justify-center items-center w-full popins_t text-3xl"
          >
            Relaxation Experiences
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" w-full object-cover"
          >
            <img src={R6} alt="" className="object-cover w-full h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
