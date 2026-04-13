"use client"; // Required for interactivity (clicks and state)

import { useState } from "react";
import '../CSS/specializedsection.css'; // Importing the CSS for this component
export default function SpecializedSection() {
  // State to track the active tab (0 = Danatec, 1 = Fleet Safety, etc.)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="specialized-section light-bg">
    <div className="container text-center">
  <h2>
    Immediate access to specialized training when you use our platform.
  </h2>
  <p>
   The We Know Training ecosystem includes specialized
    training <br /> providers serving regulated industries across Canada.
  </p>
</div>

      <div className="container flex-row mt-40">
        <div className="col-half feature-tabs">
          
          {/* TAB 0: Danatec */}
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            <div className="tab-header">
              <span className="num-badge">01</span>
              <span className="tab-title">Danatec</span>
            </div>
            <div className="tab-content">
              <h3>Safety training that builds confidence.</h3>
              <p>
                Danatec delivers safety and compliance training trusted by
                organizations across Canada to certify workers and meet
                regulatory standards.
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

          {/* TAB 1: Fleet Safety */}
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            <div className="tab-header">
              <span className="num-badge">02</span>
              <span className="tab-title">Fleet Safety</span>
            </div>
            <div className="tab-content">
              <h3>Safety on the road.</h3>
              <p>
                Comprehensive training solutions for fleet operators to ensure
                compliance and safety for every driver on the road.
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

          {/* TAB 2: Business Career College */}
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            <div className="tab-header">
              <span className="num-badge">03</span>
              <span className="tab-title">Business Career College</span>
            </div>
            <div className="tab-content">
              <h3>Professional Development.</h3>
              <p>
                Advance your career with accredited courses designed
                specifically for business professionals across various
                industries.
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

          {/* TAB 3: CamSell */}
          <div
            className={`tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            <div className="tab-header">
              <span className="num-badge">04</span>
              <span className="tab-title">CamSell</span>
            </div>
            <div className="tab-content">
              <h3>Retail & Sales Training.</h3>
              <p>
                Equip your team with the modern skills they need to excel in
                highly competitive retail and sales environments.
              </p>
              <a href="#" className="learn-more">
                Learn more ↗
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Images and Floating Cards */}
        <div className="col-half feature-image">
          <img
            src="/images/2f61f9f2b0299e1987c6230593d58d7429345e21.png"
            alt="Woman writing in notebook"
            className="main-img1"
          />

          <div className="floating-card top-left-card ds_none">
            <img src="/images/21 [Vectorized].png" alt="Vector graphic" className="vector_img" />
          </div>

          <div className="floating-card bottom-right-card ds_none">
            <div className="stat-highlight">98%</div>
            <div className="stat-text">
              Improve compliance
              <br />
              across all your teams
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}