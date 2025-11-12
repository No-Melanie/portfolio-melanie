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
              <Image src="https://picsum.photos/seed/developer/600/600" alt="Alex Chen" width={600} height={600} />
            </div>
            <div className="about-text">
              <h3>Frontend Developer & UI/UX Designer</h3>
              <p>I&apos;m a passionate frontend developer with a keen eye for design and a deep understanding of user experience. With over 5 years of experience in the industry, I specialize in creating responsive, accessible, and visually stunning web applications.</p>
              <p>My approach combines technical expertise with creative problem-solving to deliver digital experiences that not only look great but also provide exceptional usability.</p>
              <ul className="info-list">
                <li><i className="fas fa-map-marker-alt"></i> San Francisco, CA</li>
                <li><i className="fas fa-envelope"></i> alex.chen@example.com</li>
                <li><i className="fas fa-graduation-cap"></i> B.S. in Computer Science</li>
                <li><i className="fas fa-briefcase"></i> 5+ Years of Experience</li>
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
