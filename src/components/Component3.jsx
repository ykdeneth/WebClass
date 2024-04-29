import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { fadeIn } from '../variants'
import { motion } from "framer-motion";
import '../App.css';
function Component3() {
  return (
    <div className='flex flex-col w-screen px-10 py-10 lg:flex lg:flex-row md:flex md:flex-row md:gap-x-23 gap-y-10'>
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex flex-col w-full p-2 px-2 lg:w-1/4 md:w-1/4 border-b-2 border-b-[#00000020] md:border-none'>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <WifiIcon sx={{ fontSize: 80, color: '#FFD233' }} />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center text-2xl popins_m'>High Speed Wifi</span>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }} className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center px-2 py-2 text-xs text-center popins_t'>
            Stay connected effortlessly during your stay at our hotel with complimentary high-speed Wi-Fi. We understand the importance of staying in touch with loved ones or being productive while on the go. Enjoy seamless internet access in all areas of the hotel
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex flex-col w-full p-2 px-2 lg:w-1/4 md:w-1/4 border-b-2 border-b-[#00000020] md:border-none'>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <SelfImprovementIcon sx={{ fontSize: 80, color: '#FFD233' }} />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center text-2xl popins_m'>Relax & Refresh</span>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center px-2 py-2 text-xs text-center popins_t'>
            Our hotel offers well-appointed washrooms, ensuring the utmost comfort and convenience for our guests. Impeccably maintained, our facilities feature modern amenities and are cleaned regularly to guarantee a pleasant and hygienic experience during your stay.          </span>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex flex-col w-full p-2 px-2 lg:w-1/4 md:w-1/4 border-b-2 border-b-[#00000020] md:border-none'>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <RestaurantIcon sx={{ fontSize: 80, color: '#FFD233' }} />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center text-2xl popins_m'>Savor & Flavors</span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center px-2 py-2 text-xs text-center popins_t'>
            Indulge in a delightful culinary experience at our hotel, where our expert chefs curate a diverse menu of exquisite dishes and refreshing beverages. Whether you're craving international flavors or local specialties, our restaurant and bar offer a wide range of options to satisfy every palate.          </span>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='flex flex-col w-full p-2 px-2 lg:w-1/4 md:w-1/4 border-b-2 border-b-[#00000020] md:border-none'>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <SupportAgentIcon sx={{ fontSize: 80, color: '#FFD233' }} />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center text-2xl popins_m'>Services</span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-row items-center justify-center px-2 py-5 gap-y-2'>
          <span className='flex flex-row items-center justify-center px-2 py-2 text-xs text-center popins_t'>
            Escape into a world of relaxation and rejuvenation at our hotel's luxurious spa. Our highly trained therapists and a tranquil ambiance are dedicated to providing you with the ultimate in pampering and well-being.Explore a variety of spa treatments, and enhance your sense of wellness during your stay.          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Component3