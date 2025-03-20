import React, { Suspense, useRef } from "react";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./styles/global.css";

// Lazy load the HeroSection component
const HeroSection = React.lazy(() => import("./components/HeroSection"));

const App = () => {

  const serviceRef = useRef(null);

  const scrollToServices = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection scrollToServices={scrollToServices} />
      </Suspense>
      <ServiceCards serviceRef={serviceRef} />
      <PricingTable />
      <UserList />
      <ContactForm />
    </div>
  );
};

export default App;