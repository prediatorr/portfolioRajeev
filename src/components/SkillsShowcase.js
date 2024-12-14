import React from "react";
import { SkillMeter } from "./SkillMeter";

// src/index.js or src/App.js
// import '../tailwind.css'; // Adjust the path if needed


export default function SkillsShowcase() {
  const skills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "React", level: 80, color: "bg-blue-400" },
    { name: "JavaScript", level: 85, color: "bg-yellow-400" },
    { name: "Express", level: 75, color: "bg-gray-600" },
    { name: "MongoDB", level: 70, color: "bg-green-500" },
    { name: "MySQL", level: 75, color: "bg-blue-600" },
  ];

  return (
    <section className="py-12 bg-gray-50 my-4">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {skills.map((skill) => (
            <SkillMeter
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
