import React, { useState } from "react";
import "../Styles/whyjoin.css";
import { FaFilter, FaUpload } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
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
              <p style={{ color: "" }}>
                {" "}
                Tailor your investment strategy based on three key criteria:
              </p>

              <div className="d-flex gap-2 w-100">
                <div className="custom-tag">
                  {whyActive === "Customizable" ? (
                    <span className="mx-1">
                      <img src="\Images\AlertW.png" alt="" />
                    </span>
                  ) : (
                    <span className="mx-1">
                      <img src="\Images\Alert.png" alt="" />
                    </span>
                  )}
                  Risk
                </div>
                <div className="custom-tag">
                  {" "}
                  {whyActive === "Customizable" ? (
                    <span className="mx-1">
                      <img src=" \Images\BadgeW.png" alt="" />
                    </span>
                  ) : (
                    <span className="mx-1">
                      <img src=" \Images\Badge.png" alt="" />
                    </span>
                  )}
                  Reward
                </div>
                <div className="custom-tag">
                  {whyActive === "Customizable" ? (
                    <span className="mx-1">
                      <img src=" \Images\LiquiW.png" alt="" />
                    </span>
                  ) : (
                    <span className="mx-1">
                      <img src=" \Images\Liqui (2).png" alt="" />
                    </span>
                  )}
                  Liquidity
                </div>
              </div>
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
        </div>
      </div>
      <div className="why-hero">
        <div className="why-hero-img">
          {whyActive === "AiPowered" && (
            <img src=" \Images\AIPower.png" alt="" />
          )}
          {whyActive === "Affordable" && (
            <img src="\Images\Reward.png" alt="" />
          )}{" "}
          {whyActive === "Customizable" && (
            <img src=" \Images\WhyHero.png" alt="" />
          )}
        </div>
        {whyActive === "Customizable" && (
          <>
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
          </>
        )}

        {whyActive === "AiPowered" && (
          <>
            <img src="\Images\Ai1.png" alt="" className="Ai1" />
            <img src="\Images\Ai2.png" alt="" className="Ai2" />
          </>
        )}

        {whyActive === "Affordable" && (
          <>
            <img src="\Images\Afford.png" alt="" className="invest-aford1" />
          </>
        )}
      </div>
    </div>
  );
};

export default WhyJoin;
