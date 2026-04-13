"use client";

import { useState, useEffect } from "react";
import '../CSS/hero.css'; // This will now only contain the video CSS

export default function Hero({ data }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isVideoOpen]);

  const openVideoModal = () => setIsVideoOpen(true);
  const closeVideoModal = () => setIsVideoOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === "videoModal") {
      closeVideoModal();
    }
  };

  return (
    <header className="bg-[#0d1b2a] text-white text-center pt-[60px] pb-0 px-[15px] md:pt-[80px] md:px-[20px] relative">
      
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute rounded-full bg-[rgba(255,255,255,0.025)] w-[700px] h-[700px] top-[20%] -left-[350px]"></div>
        <div className="absolute rounded-full bg-[rgba(255,255,255,0.025)] w-[900px] h-[900px] -top-[200px] -right-[300px]"></div>
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto mt-[40px] px-[15px] mb-[-60px] md:px-0 md:mb-[-250px]">
        
        {/* Content */}
        <div className="relative z-[2]">
          <h1 className="font-['Montserrat',sans-serif]  max-w-[900px] mx-auto mb-[15px] px-[10px] leading-[1.2] md:text-[50px] md:mb-[20px] md:px-0 md:leading-normal hero_heading">
            {data.heading}
          </h1>
          <p className="max-w-[600px] mx-auto mb-[30px] px-[15px] leading-[1.5] text-[#ccc] text-[12px] md:text-base md:px-0">
            {data.description}
          </p>
          {/* Note: I added a default background color (bg-blue-600) to the button since the original CSS didn't specify it. Feel free to change it. */}
          <button className="btn-primary bg-blue-600 text-white rounded py-[15px] px-[30px] w-[10%] max-w-[300px] text-[16px] mx-auto block md:inline-block md:w-auto md:px-[40px]">
            {data.buttonText}
          </button>
        </div>

        {/* Video Thumbnail Wrapper */}
        <div 
          className="relative block cursor-pointer mt-[30px] group top-[150px] video_block" 
          onClick={openVideoModal}
        >
          <img
            src={data.imagePath}
            alt="People working"
            className="w-full rounded-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] block m-0"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-[50px] h-[50px] md:w-[65px] md:h-[65px] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-out z-[2] group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="fill-[#0f172a] w-[20px] h-[20px] md:w-[30px] md:h-[30px]">
              <polygon points="8,5 19,12 8,19"></polygon>
            </svg>
          </div>
        </div>

        {/* === THIS BLOCK REMAINS UNTOUCHED AS REQUESTED === */}
        {isVideoOpen && (
          <div
            id="videoModal"
            className="video-modal active"
            onClick={handleOutsideClick}
          >
            <div className="modal-content-box">
              <span className="close-video" onClick={closeVideoModal}>
                &times;
              </span>
              <div className="iframe-container">
                <iframe
                  id="youtubeIframe"
                  src={data.videoUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
        {/* ================================================= */}

        {/* Floating Card Left (Hidden below 1400px) */}
        <div className="hidden min-[1400px]:flex absolute bg-white rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-[5] w-[70px] h-[70px] p-0 m-0 items-center justify-center top-[73%] -translate-y-1/2 -left-[14px] back_white ds_none">
          <img src="/images/Group.png" alt="Graduation Cap"  />
        </div>

        {/* Floating Card Right (Hidden below 1400px) */}
        <div className="hidden min-[1400px]:flex absolute bg-white rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-[5] bottom-[-100px] -right-[230px] py-[20px] px-[25px] flex-col w-max back_white ds_none">
          <div className="flex items-center h-[45px] w-[278px] gap-[15px]">
            <span className="text-[#e11d48] text-[42px] font-[800] font-['Caveat',cursive]">
              {data.stats.number}
            </span>
            <span className="text-[14px] text-[#64748b] leading-[1.4] text-left font-[600] font-['Roboto',sans-serif]">
              {data.stats.textLine1}
              <br />
              {data.stats.textLine2}
            </span>
          </div>
          <div className="absolute -bottom-[35px] right-[15px] font-['Cedarville_Cursive','Brush_Script_MT',cursive] text-[20px] font-bold text-[#333] whitespace-nowrap">
            {data.stats.script}
          </div>
        </div>
      </div>
    </header>
  );
}