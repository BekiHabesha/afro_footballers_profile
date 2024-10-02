import React, { useState } from 'react';
import './Intro.css';

const Intro = () => {
  // States for men and awardmenpl image sliders
  const [menIndex, setMenIndex] = useState(0);
  const [awardmenplIndex, setAwardmenplIndex] = useState(0);

  // Importing images and videos
  const menImages = Array.from({ length: 23 }, (_, i) => require(`./images/menpl/image${i + 1}.jpg`));
  const awardmenplImages = Array.from({ length: 11 }, (_, i) => require(`./images/awardmenpl/image${i + 1}.jpg`));
  const developerImages = Array.from({ length: 21 }, (_, i) => require(`./images/developer/image${i + 1}.jpg`));
  const developerVideos = [
    "https://www.youtube.com/embed/wB9uAKtKw6A",
    "https://www.youtube.com/embed/qKj-mcFyiic",
    "https://www.youtube.com/embed/T1z0C0_KAaE",
  ];

  // Handlers for navigating the images
  const handleNextMen = () => setMenIndex((prev) => (prev + 1) % menImages.length);
  const handlePrevMen = () => setMenIndex((prev) => (prev - 1 + menImages.length) % menImages.length);

  const handleNextAwardmenpl = () => setAwardmenplIndex((prev) => (prev + 1) % awardmenplImages.length);
  const handlePrevAwardmenpl = () => setAwardmenplIndex((prev) => (prev - 1 + awardmenplImages.length) % awardmenplImages.length);

  return (
    <div className="intro-container">
      {/* First Division (Men's Player Images) */}
      <div className="image-video-slider">
        <h2>Ethiopian Premier League Winner</h2>
        <img src={menImages[menIndex]} alt={`Men Player ${menIndex + 1}`} />
        <button onClick={handlePrevMen}>Previous</button> <button onClick={handleNextMen}>Next</button>
          )
      </div>

      {/* Second Division (Men’s EPL Player Award Images) */}
      <div className="image-slider">
        <h2>Men’s 2016 EPL Player Award</h2>
        <img src={awardmenplImages[awardmenplIndex]} alt={`Award Men EPL ${awardmenplIndex + 1}`} />
        <button onClick={handlePrevAwardmenpl}>Previous</button> <button onClick={handleNextAwardmenpl}>Next</button>
      </div>

      {/* Third Division - Developer Awards with Images and YouTube Videos */}
      <div className="image-video-slider">
        <h2>About The Developer</h2>
        <div className="scroll-container">
          <div className="scroll-content">
            {developerImages.map((image, i) => (
	      // eslint-disable-next-line
              <img key={i} src={image} alt={`Developer Image ${i + 1}`} />
            ))}
            {developerVideos.map((videoUrl, i) => (
              <iframe
                key={i}
                src={videoUrl}
                title={`Developer Video ${i + 1}`}
                width="100%"
                height="200"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </div>
	</div>
       </div>
    </div>
  );
};

export default Intro;
