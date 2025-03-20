import React from "react";
import "../styles/componentStyles/services.css";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build responsive and modern websites tailored to your needs.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "We create cross-platform mobile apps for iOS and Android.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "We design intuitive and user-friendly interfaces for your applications.",
    icon: "🎨",
  },
];

const ServiceCards = ({ serviceRef }) => {
  return (
    <section className="services" ref={serviceRef}>
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;