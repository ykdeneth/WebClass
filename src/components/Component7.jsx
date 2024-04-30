import React from "react";
import { Rate } from "antd";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
function Component7() {
  return (
    <div className="w-screen py-10 flex flex-col gap-y-5">
      {[...new Array(5).keys()].map((_, i) => (
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen  py-10 px-10 flex flex-col gap-y-5 border-b-2 border-[#00000020] bg-[#00000005] rounded-lg"
          key={i}
        >
          <div className="flex w-full flex-row py-5 px-5  text-2xl popins_m">
            Jhone Brook
          </div>
          <div className="flex w-full flex-row py-5 px-5  text-justify leading-5 popins_t">
            Discover unparalleled luxury and hospitality at our exquisite hotel.
            Nestled in the heart of Horana, our establishment offers a perfect
            blend of opulence and comfort. With a range of meticulously designed
            rooms and suites, including stunning ocean-view accommodations, we
            cater to the needs of both leisure and business travelers. Our
            on-site dining venues offer a culinary journey of diverse flavors,
            while our spa and wellness center provide relaxation and
            rejuvenation in a tranquil environment.
          </div>
          <div className="flex w-full flex-row py-5 px-5  justify-between">
            <span></span>
            <Rate />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Component7;
