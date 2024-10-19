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
          From risk-based to return-focused strategy, we have several strategies
          designed for your financial goals in accordance with the levels of
          risks you are willing and able to take. Regardless of whether you are
          a novice or an expert investor, we provide plenty of plans to keep up
          with your growth, additionally protecting your investments
        </p>
      </div>

      <div className="plans-container">
        {/* Investment Advisors Plan */}
        <div className="premium-plan-card">
          <div className="d-flex flex-column gap-2">
            <h3>Investment Advisors</h3>
            <p className="price">
              ₹10,000 <span>/year.</span>
            </p>
          </div>

          <p className="plan-description">
            Get the most out of your money with our advanced plan.
          </p>
          <ul className="features">
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              A portfolio customized to your investment objective and risk
              profile.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Take advantage of personalized strategies to solve tax liabilities
              and enhance after-tax returns on your investments.
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
            ₹1,000 <span>/year.</span>{" "}
          </p>
          <p className="plan-description">Get more in less with Finadvisor.</p>
          <ul className="features">
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Receive an individualized plan for your savings goal and risk
              profile.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              From start until finish under the mentorship of our experienced
              financial advisors, you will be guided on actions to take.
            </li>
            <li>
              {" "}
              <span>
                <RiCheckboxCircleFill></RiCheckboxCircleFill>
              </span>
              Get continuous monitoring and adjustment of your portfolio to stay
              in line with the capital markets.
            </li>
          </ul>
          <button className="btn-get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default OurPlan;
