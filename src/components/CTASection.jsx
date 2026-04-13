import '../CSS/ctasection.css'; // Importing the CSS for this component
export default function CTASection() {
  return (
    <>
      {/* Spacer to give the overlapping testimonial video room to breathe */}
      <section className="video-spacer white-bg"></section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>
            Get started with a demo <br /> of the platform.
          </h2>
          <p>
            See how We Know Training powers learning delivery, <br /> exam
            preparation, and credential verification.
          </p>
          <button className="btn-primary mt-20">Book a Demo</button>
          
          {/* Decorative Arrows */}
          <div className="cta-content-wrapper">
            <img
              src="/images/arrow_left.png"
              alt="Left arrow"
              className="cta-arrow arrow-left"
            />
            <img
              src="/images/arrow_right.png"
              alt="Right arrow"
              className="cta-arrow arrow-right"
            />
          </div>
        </div>
      </section>
    </>
  );
}