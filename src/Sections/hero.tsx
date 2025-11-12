
const HeroSection = () => {

  return (
  <section id="home" className="hero">
    <div className="ocean-bg">
      <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    <div className="hero-content">
      <h1>Crafting Digital Experiences</h1>
      <p className="subtitle">Frontend Developer & UI/UX Designer</p>
        <p>Transforming ideas into elegant, user-centered digital solutions with a passion for clean code and intuitive design.</p>
        <div className="btn-group">
          <a href="#portfolio" className="btn btn-primary">
            <i className="fas fa-briefcase"></i>
              View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            <i className="fas fa-envelope"></i>
              Get In Touch
            </a>
        </div>
    </div>
  </section>
  );
}
export default HeroSection;