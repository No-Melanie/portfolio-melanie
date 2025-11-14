"use client"
import Image from "next/image"

const AboutSection = () => {

  return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-title fade-in">
            <h2>About Me</h2>
          </div>
          <div className="about-content fade-in">
            <div className="about-image">
              <Image 
              src="https://placehold.co/600x400" 
              alt="Melanie Rocha" 
              width={600} 
              height={600} 
              unoptimized/>
            </div>
            <div className="about-text">
              <h3>Frontend Developer & UI/UX Designer</h3>
              <p>I&apos;m just starting as a frontend developer, after two years in design, I wanted to focus on technology, with profound interest in the technology that brings ideas to life. That curiosity led me straight to frontend development and UX/UI, where I now bridge the gap between creative vision and technical execution.</p>
              <p>I bring a designer&apos;s mindset to my development work. I believe in a &apos;plan first&apos; approach, using tools like Figma and Penpot to prototype and explore multiple options. This process doesn&apos;t just lead to a better product; it&apos;s how I build understanding and get valuable feedback. I&apos;m just as comfortable bringing new ideas to the table as I am collaborating to execute a well-defined plan.</p>
              <ul className="info-list">
                <li><i className="fas fa-map-marker-alt"></i> São Paulo, SP</li>
                <li><i className="fas fa-envelope"></i> melaniegr1902@gmail.com</li>
                <li><i className="fas fa-graduation-cap"></i> Computer Engineering Student</li>
                <li><i className="fas fa-briefcase"></i> 2+ Years of Experience</li>
              </ul>
              <a href="#" className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutSection;
