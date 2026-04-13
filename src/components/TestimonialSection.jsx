"use client"; // Required because of the interactive video modal

import { useState, useEffect } from "react";
import '../CSS/testimonialsection.css'; // Importing the CSS for this component

export default function TestimonialSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock the background scrolling when the video is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isVideoOpen]);

  // Allow closing the video by clicking the dark background
  const handleOutsideClick = (e) => {
    if (e.target.id === "videoModal") {
      setIsVideoOpen(false);
    }
  };

  return (
    <section className="testimonial-section dark-bg">
      <div className="container text-center">
        <div className="stars">★★★★★</div>
     <h3 className="quote">
  "We Know Training transformed how we deliver <br /> certifications. Our compliance requirements 
  are <br /> met, learners pass exams faster, and we've built a <br /> revenue stream we didn't have before."
</h3>
        
        <div className="author-info">
          <img src="/images/man.jpg" alt="Colin Johnson" className="avatar" />
          
          <div className="author-text">
            <strong className="author-name">Colin Johnson</strong>
            <p>Deputy Executive Director, Edmonton Federation of Community Leagues</p>
          </div>
        </div>

        {/* Video Thumbnail */}
        <div 
          className="video-container video-thumbnail-wrapper" 
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Note how inline styles must be objects in React: style={{ zIndex: 0 }} */}
          <img 
            src="/images/Container with Vectorized Illustration.png" 
            alt="Video presentation" 
            style={{ zIndex: 0 }} 
          />
          
          <div className="play-overlay" style={{ zIndex: 1 }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="#0f172a">
              <polygon points="8,5 19,12 8,19"></polygon>
            </svg>
          </div>
        </div>

        {/* The Video Modal (Only renders if isVideoOpen is true) */}
        {isVideoOpen && (
          <div
            id="videoModal"
            className="video-modal active"
            onClick={handleOutsideClick}
          >
            <div className="modal-content-box">
              <span className="close-video" onClick={() => setIsVideoOpen(false)}>
                &times;
              </span>
              <div className="iframe-container">
                <iframe
                  id="youtubeIframe"
                  src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}