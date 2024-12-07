import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../tailwind.css';

export function SkillMeter({ name, level, color }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="mb-6 skillmeter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${level}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-gray-600"
          style={{ minHeight: '20px' }}  // Ensure consistent height when visible
        >
          {getSkillDescription(name)}
        </motion.div>
      )}
    </div>
  );
}

function getSkillDescription(skill) {
  const descriptions = {
    HTML: "Proficient in creating semantic and accessible HTML structures.",
    CSS: "Skilled in responsive design, Flexbox, Grid, and CSS animations.",
    React: "Experienced in building complex UIs with hooks and state management.",
    JavaScript: "Strong understanding of ES6+, async programming, and DOM manipulation.",
    Express: "Capable of creating RESTful APIs and handling server-side logic.",
    MongoDB: "Experienced in designing schemas and performing CRUD operations.",
    MySQL: "Proficient in relational database design and complex SQL queries."
  };
  return descriptions[skill] || "Skilled in various aspects of this technology.";
}
