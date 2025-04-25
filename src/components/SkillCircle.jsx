import React from "react";
import "./SkillCircle.css";

const SkillCircle = ({ skill, percent, color, logo }) => {
  const radius = 35;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="skill-scroll"> 
    <div className="skill-wrapper">
      <img src={logo} alt={`${skill} logo`} className="skill-logo" />
      <div className="skill-card">
        <div className="skill-svg">
          <svg width={radius * 2} height={radius * 2}>
            <circle
              className="bg-circle"
              stroke="#333"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              className="fg-circle"
              stroke={color}
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg> 
          <div className="skill-percent">{percent}%</div>
          <div className="skill-name">{skill}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkillCircle;
