import React from 'react';
import '../Styles/Learntouse.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import videoSrc from '../Assets/saveNum2.mp4';
import { FaPlay, FaPause } from 'react-icons/fa';
import  { useRef, useState, useEffect } from 'react';
import { BiAbacus } from "react-icons/bi";
const Learntouse = () => {
  const videos = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
 const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const handlePlayVideo = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.classList.add('playing');
      videoElement.play();
      setIsPlaying(true);
      setActiveVideo(index);
    }
  };

  const handlePauseVideo = () => {
    if (activeVideo !== null) {
      const videoElement = videoRefs.current[activeVideo];
      videoElement.classList.remove('playing');
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  const handleCloseVideo = () => {
    if (activeVideo !== null) {
      const videoElement = videoRefs.current[activeVideo];
      videoElement.classList.remove('playing');
      videoElement.pause();
      setIsPlaying(false);
      setActiveVideo(null);
    }
  };

  return (
    <div>
      <h2 className='lerntouseposit'>Learn to use</h2>
      <h2 className='lerntouseposit'>Learn to use</h2>

      <h7 className='dashboardtext '>Dashboard</h7>
      <span className="triangle-right"></span>
      <h7 className='lerntousetxt2 '>Learn to use</h7>
      <h7 className='filtertxt '>  <BiAbacus />&nbsp;Filter</h7>
     <div className='positvid'>
        <div className='row'>
          {videos.map((video, index) => {
            return (
              <div className='col-md-4' key={video.id}>
                <div className='video-wrapper'>
                  <div className='videodiv'>
              <video
  ref={(ref) => (videoRefs.current[index] = ref)}
  src={videoSrc}
  className={activeVideo === index ? 'playing' : ''}
>
  <track
    kind="captions"
    srcLang="en"
    src="path/to/captions.vtt"
    label="How to integrate with Amazon"
    default
  />
  <track
    kind="captions"
    srcLang="en"
    src="path/to/captions.vtt"
    label="How to integrate with Shopify"
    default
  />
</video>
     <span className="play-arrow">
                      <button
                        className="play-arrow "
                        onClick={() => handlePlayVideo(index)}
                      >
                        {isPlaying && activeVideo === index ? (
                          <FaPause />
                        ) : (
                          <FaPlay />
                        )}
                      </button>
                    </span>
                    {activeVideo === index && (
                      <button
                        className="close-button"
                        onClick={handleCloseVideo}
                      >
                        X
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learntouse;