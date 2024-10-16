import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TbArrowUpRight } from "react-icons/tb";

const HowHeroPage = () => {
  return (
    <section className="hero-main">
      <div className="hero-content-wrappper gap-5">
        <div className="hero-content gap-1">
          <h1>
            Your Journey to <br />
            Financial Freedom
          </h1>
          <p>
            We make financial planning effortless. Share your goals, and we’ll
            craft a tailored investment strategy, guiding you every step of the
            way toward a secure financial future.
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

        <div className="stock-suggestion-wrap">
          <div className="stock-webview">
            <div className="web-view-tabbar">
              <div className="nav-dots">
                <span className=" dots dots1">
                  <FaCircle />
                </span>
                <span className="  dots dots2">
                  <FaCircle />
                </span>
                <span className=" dots dots3">
                  <FaCircle />
                </span>
              </div>
              <span>findadvisor.com</span>
            </div>
            <div className="web-view-navbar">
              <div className="nav-logo">
                <img src=" \Images\logo.png" alt="" />
                <span>FINDADVISOR</span>
              </div>
              <div className="nav-dash">
                <div className="dash dash1"></div>
                <div className="dash dash2"></div>
                <div className="dash dash3"></div>
                <div className="dash dash4"></div>
              </div>
            </div>
            <div className="web-view-search">
              <div className="top-search"></div>
              <div className="bottom-search"></div>
            </div>
            <div className="web-view-stocks1">
              <div className="d-flex align-items-center">
                <img src="\Images\Icon-insu.png" alt="" />
                <span>Insurance</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <p>
                    <span className="arrow-grow">
                      <TbArrowUpRight></TbArrowUpRight>
                    </span>{" "}
                    +₹ 501k
                  </p>
                  <span></span>
                </div>
                <span className="white-circle">
                  <IoCheckmarkCircle></IoCheckmarkCircle>
                </span>
              </div>
            </div>
            <div className="web-view-stocks2">
              <div className="d-flex align-items-center">
                <img src=" \Images\Icon3.png" alt="" />
                <span>Bonds</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <p>
                    <span className="arrow-grow">
                      <TbArrowUpRight></TbArrowUpRight>
                    </span>{" "}
                    +₹ 501k
                  </p>
                  <span></span>
                </div>
                <span className="white-circle">
                  <IoCheckmarkCircle></IoCheckmarkCircle>
                </span>
              </div>
            </div>
            <div className="web-view-stocks3">
              <div className="d-flex align-items-center">
                <img src=" \Images\Icon4.png" alt="" />
                <span>PPF</span>
              </div>
              <div className="stocks3-dash"></div>

              <div className="d-flex align-items-center gap-3">
                <div className="stock-percentage">
                  <p>
                    <span className="arrow-grow">
                      <TbArrowUpRight></TbArrowUpRight>
                    </span>{" "}
                    +₹ 501 %
                  </p>
                  <span></span>
                </div>
                <span className="white-circle">
                  <IoCheckmarkCircle></IoCheckmarkCircle>
                </span>
              </div>
            </div>

            <div className="web-view-stocks4">
              {" "}
              <div className="d-flex align-items-center">
                <img src=" \Images\Icon5.png" alt="" />
                <span>Invest In the Future With FinAdvisor</span>
              </div>
            </div>
            <div className="web-view-stocks5">
              <div className="d-flex align-items-center">
                <img src=" \Images\Icon6.png" alt="" />
                <span>Gold and Equity Value</span>
              </div>
            </div>
            <div className="web-view-stocks6">
              <div className="d-flex align-items-center">
                <img src=" \Images\Icon7.png" alt="" />
                <span>Gold and Equity Value</span>
              </div>

              <div className="stocks6-amount">+25,600</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowHeroPage;
