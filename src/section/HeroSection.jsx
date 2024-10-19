import React, { useState } from "react";
import "../Styles/herosection.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "S",
    uv: 1000,

    amt: 2400,
  },
  {
    name: "M",
    uv: 3000,

    amt: 2210,
  },
  {
    name: "T",
    uv: 2000,

    amt: 2290,
  },
  {
    name: "W",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "Th",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "Sa",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track the active bar

  const handleMouseEnter = (index) => {
    setActiveIndex(index); // Set the hovered bar's index
  };

  const handleMouseLeave = () => {
    setActiveIndex(null); // Reset when mouse leaves
  };

  return (
    <section className="hero-main">
      <div className="hero-content-wrappper">
        <div className="hero-content">
          <h1>
            Your Personal <br />
            Investment Advisor
          </h1>
          <p>
            Do you want to increase your wealth, secure your financial future,
            or navigate the complex world of investments? We are your personal
            investment advisor to help you make informed decisions with our
            expert guidance and resources for your needs.
          </p>
          <div className="hero-buttons">
            <button className=" get-started">Get Started</button>
            <Link className="learn-more">
              Learn More{" "}
              <span>
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
              </span>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="stats">
            <div className="stats-card ">
              <p>Total Balance</p>
              <h6>
                ₹4,200 <span className="stats-percentage">+14%</span>
              </h6>
              <div className="w-100 mt-2">
                <ResponsiveContainer width={"100%"} height={80}>
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: -20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid stroke="none" />
                    <XAxis
                      dataKey="name"
                      interval={"preserveStartEnd"}
                      axisLine={{ stroke: "none", strokeWidth: 0 }}
                      tickLine={{ stroke: "none" }}
                      tick={{
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    />
                    <YAxis
                      axisLine={{ stroke: "none", strokeWidth: 0 }}
                      tickLine={{ stroke: "none" }}
                      tick={{
                        color: "#000",
                        fontSize: "12px",

                        fontWeight: 500,
                      }}
                    />

                    <Bar
                      dataKey="uv"
                      fill="#2389E7"
                      barSize={20}
                      radius={[2, 2, 0, 0]}
                      barGap={4}
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={(data, index) => handleMouseEnter(index)}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="stats-future-investment">
            <span>
              <BsCurrencyRupee></BsCurrencyRupee>
            </span>
            <p>Invest In the Future With FinAdvisor</p>
          </div>
          <div className="stats-total-profit">
            <span>
              <BsCurrencyRupee></BsCurrencyRupee>
            </span>
            <p>
              3500+ <span>Total Profit</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
