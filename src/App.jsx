import { useState } from 'react';
import './App.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import HotelNavbar from "./components/HotelNavbar.jsx";
import Component1 from './components/Component1.jsx';
import Component2 from './components/Component2.jsx';
import Component3 from './components/Component3.jsx';
import Component4 from './components/Component4.jsx';

function App() {
  return (
    <div className="relative p-0 m-0">
      
      <HotelNavbar/>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>

    </div>

  )
}

export default App
