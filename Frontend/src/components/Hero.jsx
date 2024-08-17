import React from 'react';
import "../components/Hero.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHeart, FaStethoscope, FaUserMd } from "react-icons/fa";

function Hero() {
  const images = [
    "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="hero-section">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["mobile" ,"tablet" , "desktop",] }
        // showDots={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Hospital slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="hero-content">
        <h1>Welcome to City Hospital</h1>
        <p>Your health is our priority. We provide top-notch medical services to ensure your well-being.</p>
        <div className="hero-icons">
          <div className="icon-box">
            <FaHeart />
            <p>Compassionate Care</p>
          </div>
          <div className="icon-box">
            <FaStethoscope />
            <p>Advanced Equipment</p>
          </div>
          <div className="icon-box">
            <FaUserMd />
            <p>Expert Doctors</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
