"use client"; // Required because we are using click events and state
import '../CSS/features.css'; // Importing the CSS for this component
import { useState } from "react";

export default function Features(props) {
  // State to track which tab is currently open (0 is the first tab)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="features">
      <div className="features-header">
        <h2>
          One platform for training <br /> & certification.
        </h2>
        <p>
          The We Know Training platform brings together the systems required to
          run modern training programs in regulated industries. All within one
          platform designed for organizations responsible for competence and
          compliance.
        </p>
      </div>

      <div className="features-layout">
        <div className="feature-tabs">
          
          {/* TAB 0: Deliver */}
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            <span className="tab-badge">Deliver</span>
            <h3>Deliver Training</h3>
            <div className="tab-content">
              <p>
                Training management built for regulated industries. Deliver
                training, manage certifications, and track compliance with a
                system designed for credentialed programs.
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

          {/* TAB 1: Prepare */}
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            <span className="tab-badge">Prepare</span>
            <h3>Prepare for Exams</h3>
            <div className="tab-content">
              <p>
                Launch a branded training marketplace where learners can discover
                and register for courses in one place.
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

          {/* TAB 2: Sell */}
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            <span className="tab-badge">Sell</span>
            <h3>Sell Training</h3>
            <div className="tab-content">
              <p>
                Exam preparation that responds to you to improve results.
                Adaptive learning helps certification candidates focus on the
                areas...
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

        </div>

        <div className="feature-image">
          <img
            src="/images/women.png"
            alt="Smiling woman at laptop"
            className="main-img"
          />
 
          <div className="floating-card bottom-left-card ds_none">
            <div className="stat-highlight">98%</div>
            <div className="stat-text">
              Improve compliance
              <br />
              across all your teams
            </div>
            <div className="features-script-text">Training that matters</div>
          </div>
        </div>
      </div>
    </section>
  );
}