import '../CSS/contentsection.css';
export default function ContentSection() {
  return (
    <section className="content-section white-bg">
      <div className="container">
        <h2 className="text-center">
          Content for the people behind <br /> credentialed work.
        </h2>

        <div className="blog-grid mt-40">
          {/* Card 1 */}
          <div className="blog-card">
            <img src="/images/Frame.png" alt="Blog Graphic 1" className="blog-img" />
            <div className="blog-content">
              <span className="category-tag">TRAINING MANAGEMENT</span>
              <h4>Why compliance training ne...</h4>
              <p>Outdated systems slow down progress. Modern platforms accelerate it.</p>
              <div className="author-info-small">
                <img src="/images/sarah.png" alt="Sarah Chan" className="avatar-small" />
                <div>
                  <strong>Sarah Chan</strong>
                  <span>15 Mar 2024 • 7 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="blog-card">
            <img src="/images/Frame (1).png" alt="Blog Graphic 2" className="blog-img" />
            <div className="blog-content">
              <span className="category-tag">WHITE PAPER</span>
              <h4>How adaptive learning chan...</h4>
              <p>When learners focus on what matters, pass rates rise and study time falls.</p>
              <div className="author-info-small">
                <img src="/images/michel.png" alt="Michael Torres" className="avatar-small" />
                <div>
                  <strong>Michael Torres</strong>
                  <span>08 Mar 2024 • 6 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="blog-card">
            <img src="/images/Frame3.png" alt="Blog Graphic 3" className="blog-img" />
            <div className="blog-content">
              <span className="category-tag">WHITE PAPER</span>
              <h4>How adaptive learning chan...</h4>
              <p>When learners focus on what matters, pass rates rise and study time falls.</p>
              <div className="author-info-small">
                <img src="/images/james.png" alt="James Whitmore" className="avatar-small" />
                <div>
                  <strong>Michael Torres</strong>
                  <span>08 Mar 2024 • 6 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="blog-card">
            <img src="/images/Frame.png" alt="Blog Graphic 4" className="blog-img" />
            <div className="blog-content">
              <span className="category-tag">WHITE PAPER</span>
              <h4>How adaptive learning chan...</h4>
              <p>When learners focus on what matters, pass rates rise and study time falls.</p>
              <div className="author-info-small">
                <img src="/images/james.png" alt="James Whitmore" className="avatar-small" />
                <div>
                  <strong>Michael Torres</strong>
                  <span>08 Mar 2024 • 6 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="blog-card">
            <img src="/images/Frame3.png" alt="Blog Graphic 5" className="blog-img" />
            <div className="blog-content">
              <span className="category-tag">WHITE PAPER</span>
              <h4>How adaptive learning chan...</h4>
              <p>When learners focus on what matters, pass rates rise and study time falls.</p>
              <div className="author-info-small">
                <img src="/images/sarah.png" alt="Sarah Chan" className="avatar-small" />
                <div>
                  <strong>Michael Torres</strong>
                  <span>08 Mar 2024 • 6 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="blog-card">
            <img src="/images/Frame (1).png" alt="Blog Graphic 6" className="blog-img" />
            <div className="blog-content">
              <span className="category-tag">ADAPTIVE LEARNING</span>
              <h4>Building revenue streams th...</h4>
              <p>Training programs can generate income. The right platform makes it simple.</p>
              <div className="author-info-small">
                <img src="/images/michel.png" alt="Michael Torres" className="avatar-small" />
                <div>
                  <strong>James Whitmore</strong>
                  <span>01 Mar 2024 • 8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-40">
          <button className="btn-primary">View all</button>
        </div>
      </div>
    </section>
  );
}