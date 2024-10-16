import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../Styles/howgetstart.css";
import "../../Styles/faqsection.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaCircle, FaPhone } from "react-icons/fa6";
import { PiBriefcaseMetalBold } from "react-icons/pi";

const HowGetStart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Your message has been sent!");
  };

  return (
    <section className="how-get-start">
      <div className="howGet-header">
        <h1>Follow These Steps to Get Started</h1>{" "}
        <p>
          Our simple, step-by-step process guides you through personalized
          financial planning. From understanding your goals to creating tailored
          investment strategies, we make managing your finances easy and
          effective.
        </p>
      </div>

      <div className="how-step-wrap">
        <div className="step-box">
          <div className="step1">
            <div className="user-details">
              <div className="users-info">
                <div className="user-c1">
                  <div className="user-c-icon">
                    <BsFillPersonFill></BsFillPersonFill>
                  </div>
                  <span>Name</span>
                </div>
                <div className="user-c2">
                  <span>John Doe</span>
                  <div className="usec2-dash"></div>
                </div>
                <div className="user-done">Done</div>
              </div>
              <div className="users-info">
                <div className="user-c1">
                  <div className="user-c-icon">
                    <MdOutlineMail></MdOutlineMail>
                  </div>
                  <span>Email</span>
                </div>
                <div className="user-c2">
                  <span>example@gmail.com</span>
                  <div className="usec2-dash"></div>
                </div>
                <div className="user-done">Done</div>
              </div>
              <div className="users-info">
                <div className="user-c1">
                  <div className="user-c-icon">
                    <FaPhone></FaPhone>
                  </div>
                  <span>Phones</span>
                </div>
                <div className="user-c2">
                  <span>+916523345468</span>
                  <div className="usec2-dash"></div>
                </div>
                <div className="user-done">Done</div>
              </div>
            </div>
            <div className="step-guide">
              <h6>Step-1</h6>
              <h4>Enter Your Details</h4>
              <p>
                Enter your details, including your income, expenses, and
                insurance information, for personalized financial insights.
              </p>
            </div>
          </div>
        </div>
        <div className="step-box">
          <div className="step2">
            <div className="set-goal-wrap">
              <div className="set-gaol-top">
                <div className="set-gaol-icon">
                  <BsFillPersonFill></BsFillPersonFill>
                </div>
                <div className="goal-progress-wrap">
                  <div className="goal-progress1"></div>
                  <div className="goal-progress2"></div>
                  <div className="goal-progress3"></div>
                </div>
              </div>
              <div className="set-gaol-bottom">
                <div className="bottom-gaol-icon">
                  <img src="\Images\goal-icon1.png" alt="" />
                </div>
                <div className="bottom-goal-progress-wrap">
                  <div className="bottom-goal-progress1"></div>
                  <div className="bottom-goal-progress2"></div>
                  <div className="bottom-goal-progress3"></div>
                  <div className="bottom-goal-progress4"></div>
                </div>
                <div className="bottom-goal-icon">
                  <img src="\Images\gaol-icon2.png" alt="" />
                </div>
              </div>
            </div>

            <div className="step-guide">
              <h6>Step-2</h6>
              <h4>Enter Your Details</h4>
              <p>
                Enter your details, including your income, expenses, and
                insurance information, for personalized financial insights.
              </p>
            </div>
          </div>
        </div>

        <div className="step-box">
          <div className="step3">
            <div className="stock-advise-log">
              <div className="advise-logoc">
                <img src=" \Images\Advise-logoC.png" alt="" />
              </div>

              <div className="advise-logo1">
                <img src=" \Images\advise-logoL.png" alt="" />
              </div>
              <div className="advise-logo2">
                <img src=" \Images\Advise-logoR.png" alt="" />
              </div>
            </div>

            <div className="step-guide">
              <h6>Step-3</h6>
              <h4>Get tailored advise</h4>
              <p>
                Receive tailored advice and a recommended investment plan based
                on your financial goals and preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="step-box">
          <div className="step4">
            <div className="invest-paln-wrap">
              <div className="invest-paln-top">
                <span>
                  <FaCircle></FaCircle>
                </span>
                <span>
                  <FaCircle></FaCircle>
                </span>
                <span>
                  <FaCircle></FaCircle>
                </span>
              </div>

              {[1, 2, 3, 4].map((item, index) => (
                <div className="invest-plan-list" key={index}>
                  <div className="plan-point">
                    <img src="/Images/point-icon.png" alt="" />
                  </div>
                  <div className="point-wrap">
                    <div className="point1"></div>
                    <div className="point2"></div>
                    <div className="point1"></div>
                  </div>
                </div>
              ))}

              <div className="invest-value amount-1">
                <img src=" \Images\invest-amt-2.png" alt="" />
                <div className="d-flex flex-column">
                  <h6>1800M</h6>
                  <span>Investment Value</span>
                </div>
              </div>
              <div className="invest-value amount-2">
                <img src="\Images\Invest-amt-1.png" alt="" />
                <div className="d-flex flex-column">
                  <h6>1200k</h6>
                  <span>Investment Value</span>
                </div>
              </div>
            </div>
            <div className="step-guide">
              <h6>Step-4</h6>
              <h4>Customize the Investment Plan</h4>
              <p>
                Adjust your investment options to create a plan that aligns with
                your financial objectives and comfort level.
              </p>
            </div>
          </div>
        </div>
        <div className="step-box">
          <div className="step5">
            <div className="manage-tax-wrap">
              <div className="manage-tax1">
                <div className="d-flex align-items-center gap-2 ">
                  <img src="\Images\Tax-1.png" alt="" />
                  <span>Tax 01</span>
                </div>
                <span>30K</span>
              </div>
              <div className="manage-tax2">
                <div className="d-flex align-items-center gap-2 ">
                  <img src="\Images\Tax-1.png" alt="" />
                  <span>Tax 02</span>
                </div>
                <span>30K</span>
              </div>
              <div className="manage-tax3">
                <div className="d-flex align-items-center gap-2 ">
                  <img src="\Images\Tax-1.png" alt="" />
                  <span>Tax 04</span>
                </div>
                <span>30K</span>
              </div>
              <div className="manage-tax4">
                <div className="d-flex align-items-center gap-2 ">
                  <img src="\Images\Tax-1.png" alt="" />
                  <span>Tax 04</span>
                </div>
                <span>30K</span>
              </div>
            </div>
            <div className="step-guide">
              <h6>Step-5</h6>
              <h4>Customize the Investment Plan</h4>
              <p>
                Optimize your savings by managing your taxes through effective
                tax harvesting and strategic tax planning.
              </p>
            </div>
          </div>
        </div>

        <div className="step-box">
          <div className="step6">
            <div className="portfolio-wrap">
              <div className="dash-box">
                <div className="dash-node node1"></div>
                <div className="dash-node node2"></div>
                <div className="dash-node node3"></div>
                <div className="dash-node node4"></div>
              </div>
              <div className="user-portfolio">
                <div className="portfolio-top">
                  <div
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#FFFFFF80", fontSize: "12px" }}
                  >
                    <span>
                      <PiBriefcaseMetalBold></PiBriefcaseMetalBold>
                    </span>
                    <span>Portfolio</span>
                  </div>
                  <div className="position-relative d-flex">
                    <img
                      src="\Images\Portfolio-img1.png"
                      alt=""
                      className="p-img-1"
                    />
                    <img
                      src="\Images\Portfolio-img2.png"
                      alt=""
                      className="p-img-2"
                    />
                    <img
                      src="\Images\Portfolio-3.png"
                      alt=""
                      className="p-img-3"
                    />
                  </div>
                </div>
                <div className="portfolio">
                  <h6 className="mb-2">Portfolio 1</h6>
                  {[1, 2, 3].map(() => (
                    <div className="d-flex align-items-center gap-2">
                      <img src="\Images\Mask group.png" alt="" />
                      <div className="d-flex flex-column gap-4px">
                        <div className="p-content1"></div>
                        <div className="p-content2"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="portfolio">
                  <h6 className="mb-2">Portfolio 2</h6>
                  {[1, 2, 3].map(() => (
                    <div className="d-flex align-items-center gap-2">
                      <img src="\Images\Mask group.png" alt="" />
                      <div className="d-flex flex-column gap-4px">
                        <div className="p-content1"></div>
                        <div className="p-content2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="step-guide">
              <h6>Step-5</h6>
              <h4>Customize the Investment Plan</h4>
              <p>
                Optimize your savings by managing your taxes through effective
                tax harvesting and strategic tax planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="step7-wrap">
        <div className="step7">
          {" "}
          <div className="step7-guide">
            <h6>Step-5</h6>
            <h4>Customize the Investment Plan</h4>
            <p>
              Optimize your savings by managing your taxes through effective tax
              harvesting and strategic tax planning.
            </p>
          </div>
          <div className="track">
            <div className="track-box1"></div>

            <div className="track-box2">
              <div className="d-flex align-items-center gap-2">
                <img src="\Images\vallet-img.png" alt="" />
                <img src=" \Images\shadow-img.png" alt="" />
              </div>
              <div className="w-100 d-flex justify-content-end">
                <button>Track Portfolio</button>
              </div>
            </div>
            <div className="track-box3">
              <div className="d-flex align-items-center gap-2">
                <img src="\Images\networth-icon.png" alt="" />
                <div className="d-flex flex-column gap-1">
                  <div className="total-networth">+25,60k</div>
                  <span>Your Total Networth</span>
                </div>
              </div>
            </div>
            <div className="shield-icon">
              <img src="\Images\shield 1.png" alt="" />
            </div>
            <div className="rupee-icon">
              <img src="\Images\Rupee.png" alt="" />
            </div>
            <div className="circleb-icon">
              <img src="\Images\Circleb.png" alt="" />
            </div>
            <div className="circles-icon">
              <img src="\Images\circles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGetStart;
