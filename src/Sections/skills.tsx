"use client" ;
import SkillCard from "../app/Components/SkillCards";


export default function SkillsSection() {
  
  const skillsData = [
    {
      icon: "fas fa-code",
      title: "Frontend Development",
      description: "HTML5, CSS3, JavaScript, React, Vue.js, TypeScript, Next.js"
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch, Prototyping, User Research, Wireframing"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Mobile-First Approach, CSS Grid, Flexbox, Media Queries"
    },
    {
      icon: "fas fa-rocket",
      title: "Performance",
      description: "Optimization, Lazy Loading, Code Splitting, SEO Best Practices"
    }
  ];

  return (
    <div className="container">
      <div className="section-title fade-in">
        <h2>My Skills</h2>
      </div>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index} // O React precisa de uma chave única para cada item
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

