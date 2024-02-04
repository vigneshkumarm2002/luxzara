import React from "react";
import Hero from "./components/hero";
import Testimonial  from "./components/testimonial";
import CTA from "./components/cta";
import Map from "@/app/components/map"
import Gallery from "./components/gallery";
import About from "./components/about";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonial />
      <Gallery />
      <CTA />
      <Map />
    </>
  );
};

export default Home;
