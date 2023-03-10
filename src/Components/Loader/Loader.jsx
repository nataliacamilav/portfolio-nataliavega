// React Imports
import React, { useEffect, useState } from "react";

// components
import DynamicSkills from "./DynamicSkills";

// Style
import styled, { css, keyframes } from "styled-components";

// import "./Loader.css";

const Loader = (props) => {
  const [valueTop, setValueTop] = useState(0);

  // Cambio de value Top del loader LoaderContainer. Se va sumando de
  // a 1 vh cada cierto tiempo generando el efecto que se desliza hacia arriba
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < 101; i++) {
        const valueTop = i++;
        setTimeout(() => {
          setValueTop(`-` + valueTop + `vh`);
        }, i * 10);
      }
    }, 7000);
  }, []);

  // STYLED COMPONENTS
  // Nubes moviiendose hacia la derecha
  const infiniteLoop = keyframes`
  to {
  background-position: 1500px;
  }
  `;
  // Loader Container
  const LoaderContainer = styled.div`
  
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 85%, rgba(255,255,255,0) 100%);
  position:absolute;
  top: ${valueTop};
  left: 0;
  }
  `;
  // Section
  const Section = styled.section`
  background: url(assets/pinkClouds.svg) repeat-x;
  width: 100%;
  height: 100%;
  
  background-size: 1500px 100vh;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  
  font-family: "Convergence", sans-serif;
  animation: ${infiniteLoop} 10s linear infinite;
  
  }
  `;
  // H1
  const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #653939;
    font-size: 32px;
  `;
  return (
    <LoaderContainer>
      <Section>
        <H1>
          Natalia Vega
          <span style={{ fontSize: `24px`, color: `#bc6a69` }}>portfolio</span>
        </H1>
        <DynamicSkills />
      </Section>
    </LoaderContainer>
  );
};
export default Loader;
