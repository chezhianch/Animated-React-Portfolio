import React from 'react';
import './Projectcard.css';

const ProjectCard = () => {
  const handleClick = () => {
    window.open("https://chezhians-portfolio.vercel.app", "_blank");
  };

  const handleClick2 = () => {
    window.open("https://github.com/chezhianch/Animated-React-Portfolio", "_blank");
  };

  return (
    <div className="page-wrapper">
        <div className="project-scrollbar">
      <div className="cards-container">

        
     
          {/* First Card */}
          <div className="card">
            <div className="banner-image">
              <img src="/Images/Portfolio.png" alt="Portfolio" />
            </div>
            <div className="card-content">
              <h2 className="proj-h2">React Portfolio</h2>
              <p className="proj-p">
                A responsive portfolio website built with React.js, featuring interactive visual
                effects utilizing Particle.js.
              </p>
              <div className="button-wrapper">
                <button className="btn outline" onClick={handleClick}>VIEW</button>
                <button className="btn fill" onClick={handleClick2}>SOURCE</button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="card">
            <div className="banner-image">
              <img src="/Images/wp.jpeg" alt="WhatsApp Project" />
            </div>
            <div className="card-content">
              <h2 className="proj-h2">WhatsApp Chat Extraction</h2>
              <p className="proj-p">
                An automation tool that sends WhatsApp messages and logs them to a database, developed
                using Selenium and React.js.
              </p>
              <div className="button-wrapper">
                <button className="btn outline">VIEW</button>
                <button className="btn fill">SOURCE</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  
  );
};

export default ProjectCard;
