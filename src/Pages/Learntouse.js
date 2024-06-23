import React from 'react';
import '../Styles/Learntouse.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import videoSrc from '../Assets/saveNum2.mp4';
import { FaPlay, FaPause } from 'react-icons/fa';
import { BiAbacus } from "react-icons/bi";
import { useEffect,useState,useRef } from 'react';
const Learntouse = () => {
  const platforms = [
    { id: 1, name: 'Amazon' },
    { id: 2, name: 'Shopify' },
    { id: 3, name: 'eBay' },
    { id: 4, name: 'Walmart' },
    { id: 5, name: 'Facebook' },
    { id: 6, name: 'Instagram' },
  ];

  const videos = platforms.map((platform) => ({ id: platform.id }));

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
    <div className='bodyguide'>
       <div className='bodyguide2'>
      <Navbar/>
     
       
      <h2 className='lerntouseposit'>Learn to use</h2>
      <h2 className='lerntouseposit'>Learn to use</h2>

      <h7 className='dashboardtext '>Dashboard</h7>
      <span className="triangle-right"></span>
      <h7 className='lerntousetxt2 '>Learn to use</h7>
      <h7 className='filtertxt '>  <BiAbacus /> Filter</h7>
      <div className='positvid'>
        <div className='row'>
          {videos.map((video, index) => (
            <div className='col-md-4' key={video.id}>
              <div className='video-wrapper'>
                <div className='videodiv'>
                  <video
                    ref={(ref) => (videoRefs.current[index] = ref)}
                    src={videoSrc}
                    className={activeVideo === index ? 'playing' : ''}
                  >
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
                  <h4> Integrate with {platforms[index].name}</h4>
                </div>
             
              </div>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Learntouse;