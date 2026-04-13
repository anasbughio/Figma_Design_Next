"use client"; // Required for click events and state

import { useState } from "react";
import '../CSS/faqsection.css';
export default function FAQSection() {
  // Tracks which FAQ is currently open (null means all are closed)
  const [openIndex, setOpenIndex] = useState(null);

  // We store the data here to keep the HTML clean
  const faqs = [
    {
      question: "What industries does We Know Training serve?",
      answer: "We Know Training supports organizations in financial services, transportation, real estate, safety, government, and other regulated sectors."
    },
    {
      question: "What industries does We Know Training serve?",
      answer: "We Know Training supports organizations in financial services, transportation, real estate, safety, government, and other regulated sectors."
    },
    {
      question: "What industries does We Know Training serve?",
      answer: "We Know Training supports organizations in financial services, transportation, real estate, safety, government, and other regulated sectors."
    },
    {
      question: "What industries does We Know Training serve?",
      answer: "We Know Training supports organizations in financial services, transportation, real estate, safety, government, and other regulated sectors."
    },
    {
      question: "What industries does We Know Training serve?",
      answer: "We Know Training supports organizations in financial services, transportation, real estate, safety, government, and other regulated sectors."
    }
  ];

  const toggleFAQ = (index) => {
    // If clicking the one that is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section light-bg">
      <div className="container">
        <div className="text-center">
          <h2>Frequently asked questions</h2>
          <p>
            Find answers to questions about certification training, compliance,
            and the platform.
          </p>
        </div>

        <div className="faq-container mt-40">
          {/* This loops through the array above and builds the HTML automatically */}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {/* Dynamically changes the icon between + and x */}
                <span className="icon">
                  {openIndex === index ? "x" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}