import React from "react";
import "../Styles/assest.css";
import { MdArrowOutward } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { RiArrowRightUpFill } from "react-icons/ri";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Pie,
  PieChart,
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
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const Assest = () => {
  return (
    <section className="asset-section">
      <div className="investment-strategies">
        <div className="total-investment-chart">
          <div className="investment-chart">
            <div className="investment-chart-info p-4">
              <div
                className="d-flex align-items-center gap-2 "
                style={{ fontSize: "12px", color: "#FFFFFF80" }}
              >
                <span style={{ color: "#F373AE", fontSize: "14px" }}>
                  <FaCircle></FaCircle>
                </span>
                Total Investment
              </div>
              <h5 style={{ fontWeight: 700 }} className="mt-2 mb-2">
                {" "}
                +64,4503
              </h5>
              <div className="invesst-chart-growth">
                <span>
                  <RiArrowRightUpFill></RiArrowRightUpFill>
                </span>
                +7,39 %
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{
                  top: 20,
                  right: 0,
                  left: -60,
                  bottom: 0,
                }}
              >
                <CartesianGrid stroke="none" />
                <XAxis
                  dataKey="name"
                  interval={"preserveStartEnd"}
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                />
                <YAxis
                  axisLine={{ stroke: "none", strokeWidth: 0 }}
                  tickLine={false}
                  tick={false}
                />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2389E7" stopOpacity={1} />
                    <stop
                      offset="100%"
                      stopColor="rgba(35, 137, 231, 0.0001)"
                      stopOpacity={1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#2389E7"
                  strokeWidth={2}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="investment-all-stats p-2">
            <h6>All Statistics</h6>
            <div class="circle-container">
              <div class="circle mutual-funds"></div>
              <div class="circle sips"></div>
              <div class="circle stocks"></div>
              <div class="inner-circle"></div>
            </div>
            <div class="legend">
              <p class="legend-item stocks-legend">
                <span>
                  <FaCircle></FaCircle>
                </span>{" "}
                Stocks
              </p>
              <p class="legend-item sips-legend">
                <span>
                  <FaCircle></FaCircle>
                </span>{" "}
                SIPs
              </p>
              <p class="legend-item mutual-funds-legend">
                <span>
                  <FaCircle></FaCircle>
                </span>{" "}
                Mutual Funds
              </p>
            </div>
          </div>
        </div>
        <div className="strategies">
          <div className="highlighter-tab">Asset Management </div>
          <div className="w-100 d-flex flex-column gap-4">
            <h1>Effective Asset Investment Strategies</h1>
            <p>
              The asset investment strategies of ours are very effective, and
              they will increase your assets by making investments with the
              right knowledge or information. We focus on building a
              well-diversified portfolio and stick to it according to your
              financial goals. Create financial plans for the long term, growth
              and stability.
            </p>
          </div>
        </div>
      </div>

      {/* Allocation Chart Wrap */}
      <div className="allocation-strategies">
        <div className="strategies">
          <div className="highlighter-tab">Asset Management </div>
          <div className="w-100 d-flex flex-column gap-4">
            <h1>Comprehensive Asset Allocation Strategy</h1>
            <p>
              Our rigorous asset allocation process is designed to complement
              your investment objectives and broaden exposure across stocks,
              bonds, real estate, and cash. This customized approach eliminates
              risk. We actively manage the asset allocation according to market
              trends and your individual requirements so that it is
              crisis-proofed and positioned for growth.
            </p>
          </div>
        </div>

        <div className="allocation-chart-wrap">
          <div className="chart-wrap">
            <div className="allocation-chart">
              <div className="w-100 mt-2">
                <ResponsiveContainer width={"100%"} height={260}>
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
                        fontWeight: 600,
                      }}
                    />

                    <Bar
                      dataKey="uv"
                      fill="#2389E7"
                      barSize={20}
                      radius={[4, 4, 0, 0]}
                      barGap={4}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="investment-amount">
              <h6>Total Invested Amount</h6>
              <div className="amount">51,200</div>
            </div>
          </div>
          <div className="invested-amount1">
            <div className="d-flex align-items-center gap-2">
              <img src="\Images\Asset1.png" alt="" />
              <div className="invested-amount">
                <div>+25,600</div>
                <span>Invested in Real Estate</span>
              </div>
            </div>
          </div>
          <div className="invested-amount2">
            <div className="d-flex align-items-center gap-2">
              <img src="\Images\Asset2.png" alt="" />
              <div className="invested-amount">
                <div>+25,600</div>
                <span>Invested in Real Estate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tax-planning">
        <div className="tax-content">
          <div className="highlighter-tab">Tax Management </div>

          <div className="d-flex flex-column gap-2">
            <h1>Strategic Tax Planning</h1>
            <p>
              Our seasoned experts, through a careful and decisive approach,
              assist you in minimizing your taxes. We assess your financial
              situation and create tailored plans for capturing deductions,
              credits, and tax-preferred investment opportunities. We help keep
              your hard-earned income in your pocket and make sure you are being
              tax-compliant all year long.
            </p>
          </div>
          <div className="tax-saving-container">
            <div className="tax-saving-wrap w-100">
              <div className="d-flex flex-column">
                <h6>Tax Saving</h6>
                <span>Last 30 days</span>
              </div>
              <div className="tax-profit">
                <span>
                  <MdArrowOutward></MdArrowOutward>
                </span>
                501k
              </div>
            </div>
            <div className="tax-harvesting-list w-100">
              <div className="tax-harvesting-progress w-100">
                <div className="d-flex align-items-center gap-2">
                  <div className="harvesting-img">
                    <img src="\Images\Harvest-image1.png" alt="" />
                  </div>

                  <div className="d-flex flex-column gap-2 w-75">
                    <h6>
                      Tax-Loss Harvesting <span>₹139k</span>
                    </h6>
                    <div
                      className="progress"
                      style={{ height: "5px", background: "#EFEFEF12" }}
                    >
                      <div
                        className="progress-bar w-75"
                        style={{ height: "5px", background: "#E2FFA1" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tax-harvesting-progress w-100">
                <div className="d-flex align-items-center gap-2 w-100">
                  <div className="harvesting-img">
                    <img src="\Images\Harvest-img2.png" alt="" />
                  </div>

                  <div className="d-flex flex-column gap-2 w-75">
                    <h6>
                      Home Loan <span>₹139k</span>
                    </h6>
                    <div
                      className="progress"
                      style={{ height: "5px", background: "#EFEFEF12" }}
                    >
                      <div
                        className="progress-bar w-75"
                        style={{ height: "5px", background: "#287868" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tax-harvesting-progress w-100">
                <div className="d-flex align-items-center gap-2">
                  <div className="harvesting-img">
                    <img src="\Images\Harvest-image1.png" alt="" />
                  </div>

                  <div className="d-flex flex-column gap-2 w-75">
                    <h6>
                      Residential Energy <span>₹139k</span>
                    </h6>
                    <div
                      className="progress"
                      style={{ height: "5px", background: "#EFEFEF12" }}
                    >
                      <div
                        className="progress-bar w-75"
                        style={{ height: "5px", background: "#E2FFA1" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tax-content">
          <div className="tax-harvest-chart p-4">
            <div className="d-flex align-items-center gap-3">
              <img src="\Images\userPro.png" alt="" />
              <img src="\Images\havr3.png" alt="" />
              <img src="\Images\amount.png" alt="" />
            </div>

            <div className="mt-3">
              <img src="\Images\flow-chart.png" alt="" />
            </div>

            <div className="harvest-chart p-2">
              <div className="harvest-chart-grow">
                <span>
                  <RiArrowRightUpFill></RiArrowRightUpFill>
                </span>
                5.0%
              </div>
              <ResponsiveContainer width={"100%"} height={100}>
                <BarChart
                  data={data}
                  margin={{
                    top: 15,
                    right: 10,
                    left: -50,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid stroke="none" />
                  <XAxis
                    dataKey="name"
                    interval={"preserveStartEnd"}
                    axisLine={{ stroke: "none", strokeWidth: 0 }}
                    tickLine={{ stroke: "none" }}
                    tick={false}
                  />
                  <YAxis
                    axisLine={{ stroke: "none", strokeWidth: 0 }}
                    tickLine={{ stroke: "none" }}
                    tick={false}
                  />

                  <Bar
                    dataKey="uv"
                    fill="#61399F"
                    barSize={25}
                    radius={[4, 4, 0, 0]}
                    barGap={8}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="highlighter-tab">Tax Management </div>
          <div className="d-flex flex-column gap-2">
            <h1>Tax Harvesting Strategies</h1>
            <p>
              Our tax-harvesting strategies work to sell investments when they
              are losing money, making those losses there on paper so that gains
              can get offset in other places. You can use this method to lessen
              the amount of taxes you owe for profits on your investments and
              keep a well-structured balance in your portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assest;
