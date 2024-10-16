import React from "react";
import "../Styles/ourplan.css";
import { RiCheckboxCircleFill } from "react-icons/ri";

const OurPlan = () => {
  return (
    <div className="pricing-section">
      <div className="plan-header">
        <div className="highlighter-tab">FINADVISORS Pricing</div>

        <h2 className="section-title">Our Plans</h2>
        <p className="section-description">
          Register your account via email, google, and facebook. By registering
          an account, you can use our basic features for recruiting by getting
          qualified employees.
        </p>
      </div>

      <div className="plans-container">
        {/* Investment Advisors Plan */}
        <div className="premium-plan-card">
          <div className="d-flex flex-column gap-2">
            <h3>Investment Advisors</h3>
            <p className="price">
              ₹10,000 <span>/mo.</span>
            </p>
          </div>

          <p className="plan-description">
            Congue dolor est consequat nisi egest in at amet quam. Quis feugiat
            ante.
          </p>
          <ul className="features">
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Turpis velit tristique pretium.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Placerat arcu pellentesque mauris.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Sem morbi risus nulla risus ac non.
            </li>
          </ul>
        </div>

        {/* Basic Plan */}
        <div className="basic-plan-card">
          <h3>FINADVISORS</h3>
          <p className="price">
            ₹1,000 <span>/mo.</span>{" "}
          </p>
          <p className="plan-description">
            FinAdvisors provides more in less with good advantages and amazing
            services.
          </p>
          <ul className="features">
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Tincidunt euismod ultrices a ornare.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Fringilla gravida a nunc molestie.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Fringilla gravida a nunc molestie.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Turpis nunc fusce magna arcu.
            </li>
          </ul>
          <button className="btn-get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default OurPlan;
