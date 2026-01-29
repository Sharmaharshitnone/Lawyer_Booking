import { useState } from "react";
import "./Footer.css";

const faqs = [
  "WHAT IS ONLINE LEGAL CONSULTATION?",
  "ARE YOUR ONLINE LAWYERS QUALIFIED?",
  "WHAT HAPPENS IF I DON'T GET A RESPONSE FROM A LAWYER?",
  "HOW DO I START ONLINE CONSULTATION WITH LAWYER?",
  "IS ONLINE LAWYER CONSULTATION SAFE AND SECURE?"
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>Questions?</h2>
          <h3>We’re here to help</h3>
          <p>
            Check out our FAQs or talk to a live customer care specialist
            by phone, chat, or email.
          </p>

          <div className="footer-icons">
            <span>📞</span>
            <span>✉️</span>
            <span>💬</span>
          </div>
        </div>

        {/* Right Section (FAQs) */}
        <div className="footer-right">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {item}
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  This is a sample answer. You can replace it with your own
                  legal consultation details.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* 🔹 Copyright Section */}
      <div className="footer-bottom">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

