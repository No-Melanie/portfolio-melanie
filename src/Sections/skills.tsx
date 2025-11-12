"use client" ;

    const SkillsSection = () => { 
    return (      
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title fade-in">
            <h2>My Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card fade-in">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Frontend Development</h3>
              <p>HTML5, CSS3, JavaScript, React, Vue.js, TypeScript, Next.js</p>
            </div>
            <div className="skill-card fade-in">
              <div className="skill-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>Figma, Adobe XD, Sketch, Prototyping, User Research, Wireframing</p>
            </div>
            <div className="skill-card fade-in">
              <div className="skill-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Responsive Design</h3>
              <p>Mobile-First Approach, CSS Grid, Flexbox, Media Queries</p>
            </div>
            <div className="skill-card fade-in">
              <div className="skill-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Performance</h3>
              <p>Optimization, Lazy Loading, Code Splitting, SEO Best Practices</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SkillsSection;