// React Imports
import React, { useEffect, useState } from "react";

// Stylesheet
import "./Loader.css";

const Loader = () => {
  // Array de mis Skills
  const skillsLoader = ["HTML5", "CSS3", "JavaScript", "ReactJS"];

  // Renderizado del innerText de un <p> dinamico de mis skills

  const [skillText, setSkillText] = useState("");

  useEffect(() => {
    
    const interval = setInterval(() => {
      for (let i = 0; i < skillsLoader.length; i++) {
        const skills = skillsLoader[i];
        setSkillText(skills);
      }
    }, 5000);
  }, [skillText]);

  return (
    <section className="lightLoader-container">
      <h1>
        Natalia Vega <span>portfolio</span>
      </h1>
      <div className="skillsCarrousel-container">
        <p>{skillText}</p>
      </div>

      {/* FUNCIONA */}
    </section>
  );
};
export default Loader;
