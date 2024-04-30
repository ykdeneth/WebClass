import { useState } from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/effect-cards";
import HotelNavbar from "./components/HotelNavbar.jsx";
import Component1 from "./components/Component1.jsx";
import Component2 from "./components/Component2.jsx";
import Component3 from "./components/Component3.jsx";
import Component4 from "./components/Component4.jsx";
import Component5 from "./components/Component5.jsx";
import Component6 from "./components/Component6.jsx";
import Component7 from "./components/Component7.jsx";
import Component8 from "./components/Component8.jsx";

function App() {
  return (
    <div className="relative p-0 m-0">
      <HotelNavbar />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
    </div>
  );
}

export default App;
