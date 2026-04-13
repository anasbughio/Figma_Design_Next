import '../CSS/statssection.css'; // Importing the CSS for this component
export default function StatsSection() {
  return (
    <section className="stats-section light-bg">
      <div className="container flex-row">
        
        {/* Left Column: The Stats Grid */}
        <div className="col-half">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>4M+</h3>
              <p>Certifications<br />issued</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Industries<br />served</p>
            </div>
            <div className="stat-card">
              <h3>4K+</h3>
              <p>Training<br />programs</p>
            </div>
            <div className="stat-card">
              <h3>4M+</h3>
              <p>Learners<br />trained</p>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="col-half text-content">
          <h2>
            When training works, people move forward.
          </h2>
          <p>
            We Know Training builds technology designed specifically for credentialed work. Connecting learning, certification, and training delivery into one platform.
          </p>
          <p>
            So organizations can maintain standards without slowing progress.
          </p>
          <button className="btn-primary">
         Read Case Studies
      </button>
        </div>
        
      </div>
    </section>
  );
}