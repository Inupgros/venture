import React from "react";
import "../Styles/service.css";

const ServiceSection = () => {
  const services = [
    {
      title: "Portfolio Diversification",
      description:
        "Create a well-balanced investment portfolio designed to reduce risk and enhance long-term growth.",
      iconSrc: "/Images/Vector.png", // Replace with an actual icon or image
      bgColor: "#a45cff",
    },
    {
      title: "Tax Optimizing Actions",
      description:
        "Utilize effective tax-saving strategies to maximize your income and retain more wealth.",
      iconSrc: "/Images/Vector2.png",
      bgColor: "#5CCEFF",
    },
    {
      title: "Networth Tracking",
      description:
        "Stay ahead with real-time tracking of your financial assets, ensuring informed and proactive financial decisions.",
      iconSrc: "/Images/Vector3.png", // Replace with an actual icon or image
      bgColor: "#2389E7",
    },
  ];
  return (
    <section className="services-section">
      <div className="d-flex flex-column gap-3">
        <h2 className="w-100 text-center">The Services We Provide</h2>
        <p>
          Our suite of custom financial solutions can get you one step closer to
          realizing your dream with more peace of mind.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className={`service-card service-card-${index}`} key={index}>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <div
                className="service-icon"
                style={{ backgroundColor: service.bgColor }}
              >
                <div>
                  <img src={service.iconSrc} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
