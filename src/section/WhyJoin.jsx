import React, { useState } from "react";
import "../Styles/whyjoin.css";
import { FaFilter, FaUpload } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import { LuAlertTriangle } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

const WhyJoin = () => {
  const [whyActive, setWhyActive] = useState("AiPowered");

  const handelChoosePlan = (plan) => {
    setWhyActive(plan);
  };

  return (
    <div className="why-wrapper">
      <div className="why-content">
        <div className="why-head">
          <h1>Why Choose Us?</h1>
          <span>
            We make sure that your investments, tax strategies, and financial
            planning are all properly aligned with each other—as well as with
            you. Building a long-term culture and growth of integrity, trust,
            and transparency is what we teach in clarity to deliver solutions.
          </span>
        </div>

        <div className="why-list">
          <div
            className={
              whyActive === "AiPowered" ? "why-active-list" : "why-list-items"
            }
            onClick={() => handelChoosePlan("AiPowered")}
          >
            <div className="list-content">
              <h6 className="list-heading">
                <span>
                  <FaFilter></FaFilter>
                </span>
                AI-Powered Investment Advisor
              </h6>
              <span>
                Get a glimpse of the future in financial planning with our AI
                investment advisor.
              </span>
            </div>
          </div>
          <div
            className={
              whyActive === "Affordable" ? "why-active-list" : "why-list-items"
            }
            onClick={() => handelChoosePlan("Affordable")}
          >
            <div className="list-content">
              <h6 className="list-heading">
                <span>
                  <FaUpload></FaUpload>
                </span>
                Affordable Investment Solutions
              </h6>
              <span>
                No need to pay ₹10,000+ for investment advisory when you can now
                access the thoughts of our experts for just Rs 1,000.
              </span>
            </div>
          </div>
          <div
            className={
              whyActive === "Customizable"
                ? "why-active-list"
                : "why-list-items"
            }
            onClick={() => handelChoosePlan("Customizable")}
          >
            <div className="list-content">
              <h6 className="list-heading">
                <span>
                  <HiOutlineViewGrid></HiOutlineViewGrid>
                </span>
                Customizable Investment Advice
              </h6>
              <div className="d-flex gap-2 w-100">
                <div className="custom-tag">
                  {" "}
                  <span>
                    <img src="\Images\Risk.png" alt="" />
                  </span>{" "}
                  Risk
                </div>

                <div className="custom-tag">
                  {" "}
                  <span>
                    <img src="\Images\Reward.png" alt="" />
                  </span>{" "}
                  Reward
                </div>
                <div className="custom-tag">
                  {" "}
                  <span>
                    <img src="\Images\Liqui.png" alt="" />
                  </span>{" "}
                  Liquidity
                </div>

                {/* <span>
                  Financial situations aren't the same. That is why we offer
                  tailor-made investment advice, which takes into account your
                  personal preferences, goals, and risk tolerance. We create a
                  plan for you, taking these points into account:
                </span>
                <span>
                  <b>Risk:</b>
                  The sudden drops or swings of the stock market can severely
                  decrease your investment, which in turn may lead to short-term
                  losses.
                </span>

                <span>
                  <b>Risk:</b>
                  The strength of your money may decline over time because the
                  rising inflation may cause the purchasing power of your
                  returns to lag behind the cost of living.
                </span>

                <span>
                  <b>Risk:</b>: There are times when some specific investments,
                  like real estate or stocks, might not be easily converted to
                  cash, which means it is hard for you to access your funds
                  whenever they are most needed.
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-hero">
        <div className="why-hero-img">
          {whyActive === "AiPowered" && (
            <img src="\Images\WhyHero.png" alt="" />
          )}
          {whyActive === "Affordable" && (
            <img src="\Images\WhyHero2.jpg" alt="" />
          )}{" "}
          {whyActive === "Customizable" && (
            <img src="\Images\WhyHero3.jpg" alt="" />
          )}
        </div>
        <div className="why-total-profit">
          <img src="\Images\Profit1.png" alt="" />
          <span>Total Profit</span>
          <p>
            1.256
            <span style={{ color: "#43BD1E" }}>
              <IoMdArrowDropup></IoMdArrowDropup>
            </span>
          </p>
        </div>
        <div className="why-tax-harvesting p-3">
          <h6>Average Tax Harvesting</h6>
          <div className="w-100 d-flex align-items-center justify-content-center mt-4">
            <img src="\Images\Graph2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
