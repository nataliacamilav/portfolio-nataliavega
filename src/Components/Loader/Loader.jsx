// React Imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import DynamicSkills from "./DynamicSkills";

// Style
import styled, { css, keyframes } from "styled-components";

// import "./Loader.css";

const Loader = (props) => {
  // console.log(props.translateValue)
  // const stateSlideUp = props.translateValue
  const navigate = useNavigate();
  const [stateSlideUp, setStateSlideUp] = useState(false);

  // Sacar el loader
  useEffect(() => {
    // Timer
    setTimeout(() => {
      setStateSlideUp(true);
      setTimeout(() => {
        navigate("/aboutMe");
      }, 2000);
    }, 2000);
  }, []);

  // STYLED COMPONENTS
  // Animaciones
  const infiniteLoop = keyframes`
  to {
  background-position: 1500px;
  }
  `;
  const slideUp = keyframes`
  from {
    transform: translateY(0)
    }
  to {
    ${stateSlideUp ? `transform: translateY(-100vh)` : `transform:translateY(0)`}
    }
  `;
  // Loader Container
  const LoaderContainer = styled.div`
  
  width: 100%;
  height: 100vh;
  
  animation: ${slideUp} 3s linear infinite;
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
