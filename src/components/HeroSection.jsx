import React from "react";
import "../styles/componentStyles/hero.css";

const HeroSection = ({ scrollToServices }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Landing Page</h1>
        <p>Your one-stop solution for all services.</p>
        <button className="cta-button" onClick={scrollToServices}>
          Get Started
        </button>
      </div>
      <video autoPlay loop muted className="hero-video">
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;