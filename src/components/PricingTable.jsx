import React from "react";
import "../styles/componentStyles/pricing.css";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$10",
    features: ["1 Website", "5GB Storage", "Basic Support"],
    recommended: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$20",
    features: ["5 Websites", "50GB Storage", "Priority Support"],
    recommended: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "$30",
    features: ["Unlimited Websites", "100GB Storage", "24/7 Support"],
    recommended: false,
  },
];

const PricingTable = () => {
  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.recommended ? "recommended" : ""}`}
          >
            {plan.recommended && <div className="recommended-badge">Recommended</div>}
            <h3>{plan.name}</h3>
            <h2>{plan.price}</h2>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;