import React from "react";
import SkillCircle from "./SkillCircle";
import "./SkillCircle.css";

const skills = [
  { name: "React", percent: 75, color: "#00CFFF", logo: "/icons/react.png" },
  { name: "Java", percent: 70, color: "#FFA500", logo: "/icons/java.png" },
  { name: "C++", percent: 60, color: "#0074D9", logo: "/icons/cpp.png" },
  { name: "HTML", percent: 90, color: "#E34C26", logo: "/icons/html.png" },
  { name: "CSS", percent: 65, color: "#264de4", logo: "/icons/css.png" },
  { name: "JavaScript", percent: 60, color: "#F0DB4F", logo: "/icons/js.png" },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">
        Here are the skills I've honed and developed along my learning journey:
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCircle
            key={index}
            skill={skill.name}
            percent={skill.percent}
            color={skill.color}
            logo={skill.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
