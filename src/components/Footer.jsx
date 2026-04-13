import '../CSS/footer.css';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-logo">
          <img src="/images/Subtract.png" alt="Logo" />
          WE KNOW <strong>TRAINING</strong>
        </div>

        <div className="footer-top">
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">Training management</a></li>
              <li><a href="#">Adaptive learning</a></li>
              <li><a href="#">Storefronts</a></li>
              <li><a href="#">Training Catalogue</a></li>
              <li><a href="#">Proof Network</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Industries we Serve</h4>
            <ul>
              <li><a href="#">Safety & Transportation</a></li>
              <li><a href="#">Business & Finance</a></li>
              <li><a href="#">Retail & Hospitality</a></li>
              <li><a href="#">Government Regulators</a></li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Get the latest updates on platform.</h4>
            <p>
              By subscribing you agree to our Privacy Policy and consent to
              receive updates.
            </p>

            <form className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button type="button">→</button>
            </form>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
          <div className="copyright">
            &copy; 2025 We Know Training. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  );
}