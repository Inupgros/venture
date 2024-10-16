import React from "react";
import "../Styles/whyjoin.css";
import { FaFilter, FaUpload } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";

const WhyJoin = () => {
  return (
    <div className="why-wrapper">
      <div className="why-content">
        <div className="why-head">
          <h1>Why Choose Us?</h1>
          <span>
            Benefit from personalized financial solutions, expert guidance, and
            a commitment to your success. Your goals are our priority!
          </span>
        </div>

        <div className="why-list">
          <div className="why-list-items why-active-list">
            <div className="list-content">
              <h6 className="list-heading">
                <span>
                  <FaFilter></FaFilter>
                </span>
                AI-Powered Investment Advisor
              </h6>
              <span>
                Get personalized investment insights with AI technology to
                optimize your portfolio effectively.
              </span>
            </div>
          </div>
          <div className="why-list-items">
            <div className="list-content">
              <h6 className="list-heading">
                <span>
                  <FaUpload></FaUpload>
                </span>
                Affordable Investment Solutions
              </h6>
              <span>
                Why pay ₹10,000+ for I.A? Our expert insights are available for
                just ₹1,000 - only 10% of the typical cost!
              </span>
            </div>
          </div>
          <div className="why-list-items">
            <div className="list-content">
              <h6 className="list-heading">
                <span>
                  <HiOutlineViewGrid></HiOutlineViewGrid>
                </span>
                Customizable Investment Advice
              </h6>
              <div className="d-flex flex-column gap-2">
                <span>
                  Tailor your investment strategy based on three key criteria
                </span>
                <span>
                  <b>Risk:</b>
                  Tailor your investment strategy based on three key criteria
                </span>

                <span>
                  <b>Risk:</b>
                  Tailor your investment strategy based on three key criteria
                </span>

                <span>
                  <b>Risk:</b>
                  Tailor your investment strategy based on three key criteria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-hero">
        <img src="\Images\WhyHero.png" alt="" />
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
