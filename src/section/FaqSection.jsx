import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/faqsection.css";

const FaqSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
  } = useForm();

  const contactFormUrl =
    "https://script.google.com/macros/s/AKfycby77Oe85JShwUyxTQLWdRvOZ_GNM0e5LkN2NSoIVxiCgE7pd-XPxAm2a8R9GcMBwqy8/exec";

  const fqqUrl =
    "https://script.google.com/macros/s/AKfycbxa9mAf6pY8GoD9_gtWRiBqHu2Wkdo_YF4X0nQ_9g20TgpPWaDWuKLdEeBh2DF4T4Dg/exec";

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("services", data.services.join(", ")); // Concatenate checkbox values

    fetch(contactFormUrl, {
      method: "POST",
      mode: "no-cors", // Adding no-cors mode
      body: formData,
    })
      .then(() => {
        alert("Thank you! Your form has been submitted successfully.");
        // Note: With 'no-cors' mode, you won't get a proper response or errors
      })
      .catch((error) => console.error("Error!", error.message));
  };

  const onSubmitFaq = (data) => {
    const formData = new FormData();
    formData.append("faqEmail", data.faqEmail);
    formData.append("faqMessage", data.faqMessage);

    fetch(fqqUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        alert("FAQ submitted successfully.");
      })
      .catch((error) => console.error("Error!", error.message));
  };

  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-inputs">
          <h2>FAQs</h2>
          <form onSubmit={handleSubmitForm1(onSubmitFaq)}>
            <div className="d-flex flex-column gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                {...registerForm1("faqEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errorsForm1.faqEmail && (
                <span className="error">{errorsForm1.faqEmail.message}</span>
              )}

              <textarea
                placeholder="Ask us what you want to know..."
                {...registerForm1("faqMessage", {
                  required: "Message is required",
                })}
              />
              {errorsForm1.faqMessage && (
                <span className="error">{errorsForm1.faqMessage.message}</span>
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
            <h2>Coming Soon</h2>
            {/* <p>To get closer to your financial goal, reach out to us today</p> */}
          </div>
          <div className="send-email">
            <div>
              <img src="\Images\Icon2.png" alt="" />
            </div>
            <div className="d-flex flex-column gap-1">
              <h5>Send Us An Email</h5>
              <p>Get in touch with our expert for detailed guidance.</p>
              <span>info@venture.org.in</span>
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
            <div className="check-input">
              <input
                type="checkbox"
                value="Insurance"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Insurance</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Mutual Funds"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Public Provident Fund</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Crypto"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Real Estate</label>
            </div>
          </div>
          <div className="checkbox-group">
            <div className="check-input">
              <input
                type="checkbox"
                value="Insurance"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Mutual Funds</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Mutual Funds"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Bonds</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Crypto"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Crypto</label>
            </div>
          </div>
          <div className="checkbox-group">
            <div className="check-input">
              <input
                type="checkbox"
                value="Insurance"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Precious Metals</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Mutual Funds"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">National pension scheme</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Crypto"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Domestic</label>
            </div>
          </div>
          <div className="checkbox-group">
            <div className="check-input">
              <input
                type="checkbox"
                value="Insurance"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">FD</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Mutual Funds"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Cash</label>
            </div>
            <div className="check-input">
              <input
                type="checkbox"
                value="Crypto"
                {...register("services", { required: true })}
              />
              <label htmlFor="services">Assets</label>
            </div>
          </div>
          {errors.services && <p className="error">Please select a service.</p>}

          <button type="submit" className="submit-btn">
            Get the Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqSection;
