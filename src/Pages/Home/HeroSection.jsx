import React from 'react';

export default function HeroSection() {
  const openResume = () => {
    window.open('/MarjDeveloperResume.pdf', '_blank');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Marjhonie</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FullStack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate about creating user-friendly websites and applications.
          </p>
        </div>
        <button className="btn btn-primary" onClick={openResume}>
          Download Resume
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-me.png" alt="Hero Section" />
      </div>
    </section>
  );
}
