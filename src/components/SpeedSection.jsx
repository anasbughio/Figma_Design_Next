import '../CSS/speedsection.css'; // Importing the CSS for this component
export default function SpeedSection() {
  return (
    <section className="speed-section dark-bg">
      <div className="container">
        
        <div className="speed-header text-center">
          <h2>
            Training at the speed<br />
            of opportunity.
          </h2>
        </div>

        <div className="flex-row mt-40">
          <div className="col-half illustration">
            {/* Note the leading slash for the public folder */}
            <img
              src="/images/23 [Vectorized].png"
              alt="Illustration of person with charts"
            />
          </div>
          
          <div className="col-half text-content">
            <p>
              <strong>
                In regulated industries, training serves an essential purpose.
              </strong>
            </p>
            <p>
              Standards protect workers, customers, and the public. But too
              often the systems behind training create friction for the people
              they are meant to support.
            </p>
            <p>
              When the systems behind training slow down, opportunity slows
              with them.
            </p>
            <p>
              That’s why a new category of training technology is emerging — platforms designed specifically for regulated
               industries, where learning, certification, and compliance must work together.
            </p>

            <button className="btn-primary mt-20">Book a Demo</button>
          </div>
        </div>
        
      </div>
    </section>
  );
}