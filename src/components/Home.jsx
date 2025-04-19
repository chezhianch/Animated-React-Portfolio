import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hello,<br />
            I'm <span className="highlight">Porchezhian</span><br />
            a <span className="highlight">Frontend Developer</span>
          </h1>
          <p>
            I’m an aspiring frontend developer passionate about building user-focused,
            responsive websites. I'm also skilled in Java and love writing clean, efficient code.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/chezhianch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" className="icon" />
            </a>
            <a
              href="https://github.com/chezhianch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.png" alt="GitHub" className="icon" />
            </a>
            <a
              href="https://x.com/Chezhian__?s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/twitter.png" alt="x" className="icon" />
            </a>
            <Link to="/Contact" className="cnt-btn">Contact </Link>

          
           
          </div>
        </div>

        <div className="hero-img">
          <img src="/Images/cd.png" alt="Porchezhian" />
        </div>
      </div>
    </section>
  );
};

export default Home;
