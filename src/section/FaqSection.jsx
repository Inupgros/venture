import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/faqsection.css";

const FaqSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  // Using Fetch to submit form data to Google Sheets
  const onSubmit = async (data) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw0uJm1G3U0J5JAcsNDDcCl5Epf54Lokl6lTWhEoEGJfd9JlZNR0SK1TJD0eVMSkHE/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // This will prevent CORS errors, but you can't access the response
      });

      console.log("Form Data Submitted:", data);
      alert("Your message has been sent!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-inputs">
          <h2>FAQs</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("faqEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.faqEmail && (
                <span className="error">{errors.faqEmail.message}</span>
              )}

              <textarea
                placeholder="Ask us what you want to know..."
                {...register("faqMessage", {
                  required: "Message is required",
                })}
              />
              {errors.faqMessage && (
                <span className="error">{errors.faqMessage.message}</span>
              )}

              <span>
                We will answer your questions via email within 48 hours.
              </span>
            </div>
            <button type="submit" className="faq-submit-btn">
              Send
            </button>
          </form>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          <div className="faq-item" onClick={() => toggleFaq(0)}>
            <h3>
              How to buy a subscription at FINADVISORS{" "}
              {faqIndex === 0 ? <span>x</span> : <span>+</span>}
            </h3>
            {faqIndex === 0 && (
              <p>
                You just need to find the music event you want, order the
                ticket, and ensure it's still available. After paying with your
                credit card, the ticket will be emailed automatically.
              </p>
            )}
          </div>

          <div className="faq-item" onClick={() => toggleFaq(1)}>
            <h3>
              Where will I get the Advisory{" "}
              {faqIndex === 1 ? <span>x</span> : <span>+</span>}
            </h3>
            {faqIndex === 1 && (
              <p>Advisory will be delivered to your registered email.</p>
            )}
          </div>

          <div className="faq-item" onClick={() => toggleFaq(2)}>
            <h3>
              How to claim refund if I don't want subscription{" "}
              {faqIndex === 2 ? <span>x</span> : <span>+</span>}
            </h3>
            {faqIndex === 2 && (
              <p>You can request a refund by contacting support.</p>
            )}
          </div>

          <div className="faq-item" onClick={() => toggleFaq(3)}>
            <h3>
              Will I get updates on the Stock portfolio{" "}
              {faqIndex === 3 ? <span>x</span> : <span>+</span>}
            </h3>
            {faqIndex === 3 && (
              <p>Yes, you will receive regular updates via email.</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <div className="contact-left">
          <div>
            <img src="\Images\Icon.png" alt="" />
          </div>
          <div>
            <h2>Contact us now</h2>
            <p>To get closer to your financial goal, reach out to us today</p>
          </div>
          <div className="send-email">
            <div>
              <img src="\Images\Icon2.png" alt="" />
            </div>
            <div className="d-flex flex-column gap-1">
              <h5>Send Us An Email</h5>
              <p>Get in touch with our expert for detailed guidance.</p>
              <span>info@finadvisors.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Full name"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message">Leave us a message</label>
            <textarea
              placeholder="Leave us a message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>

          <h5>How can we help you?</h5>

          <div className="checkbox-group">
            <div className="checkbox-input">
              <div className="check-input">
                <input type="checkbox" value="Insurance" />
                <label htmlFor="">Insurance</label>
              </div>
              <div className="check-input">
                <input type="checkbox" value="Mutual Funds" />
                <label htmlFor="">Mutual Funds</label>
              </div>
              <div className="check-input">
                <input type="checkbox" value="Crypto" />
                <label htmlFor="">Crypto</label>
              </div>
            </div>
            <div className="checkbox-input">
              <div className="check-input">
                <input type="checkbox" value="Insurance" />
                <label htmlFor="">Insurance</label>
              </div>
              <div className="check-input">
                <input type="checkbox" value="Mutual Funds" />
                <label htmlFor="">Mutual Funds</label>
              </div>
              <div className="check-input">
                <input type="checkbox" value="Crypto" />
                <label htmlFor="">Crypto</label>
              </div>
            </div>
            <div className="checkbox-input">
              <div className="check-input">
                <input type="checkbox" value="Insurance" />
                <label htmlFor="">Insurance</label>
              </div>
              <div className="check-input">
                <input type="checkbox" value="Mutual Funds" />
                <label htmlFor="">Mutual Funds</label>
              </div>
              <div className="check-input">
                <input type="checkbox" value="Crypto" />
                <label htmlFor="">Crypto</label>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Get the Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqSection;
