
import React from "react";
// import Navbar from '../components/Navbar.js'
import About from "../components/About.js";
import { AboutNew } from "../components/AboutNew.js";
import Footer from "../components/Footer.js";
import Gallery from "../components/Gallery.js";
import Nav from "../components/Nav.js";
import Partners from "../components/Partners.js";
import Sponsors from "../components/Sponsors.js";
import Timer from "../components/Timer.js";
import MyParallax from "../components/parallax/my-parallax.js";
import TimelineMain from "../components/timeline/TimelineMain.js";
import timelinedate from '../images/timelinedate.svg';

const MainHome = () => {
  return (
    <div>
      <Nav />

      <MyParallax />

      <AboutNew />

      <Timer />

      <img src={timelinedate} alt=""  className="mt-8 mb-32 p-5 mx-auto"/>

      <Partners />

      <div className="h-20"></div>

      <Gallery />

      <TimelineMain />

      <Sponsors />

      <Footer />
    </div>
  );
};

export default MainHome;
