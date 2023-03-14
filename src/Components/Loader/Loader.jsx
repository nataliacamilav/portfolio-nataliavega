// React Imports
import React, { useEffect, useState } from "react";
import Theme from "../Theme/Theme";
// components
import DynamicSkills from "./DynamicSkills";

// Style
import styled, { css, keyframes } from "styled-components";

// import "./Loader.css";

const Loader = ({ heightDynamic, valueTop }) => {
  // const [valueTop, setValueTop] = useState(0);

  // Cambio de value Top del loader LoaderContainer. Se va sumando de
  // a 1 vh cada cierto tiempo generando el efecto que se desliza hacia arriba

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
  height: ${heightDynamic};
  background: ${(props) => props.theme.light.colors.background};
  position:absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
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

    justify-content: center;
    align-items: center;

    font-family: "Convergence", sans-serif;
    animation: ${infiniteLoop} 10s linear infinite;

    .avatarImg {
      
      height: 500px;
      align-self: end;
    }
  `;
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
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
        <TextContainer>
          <H1>
            Natalia Vega
            <span style={{ fontSize: `24px`, color: `#bc6a69` }}>
              portfolio
            </span>
          </H1>
          <DynamicSkills />
        </TextContainer>
        <img src="assets/avatar.gif" alt="" className="avatarImg" />
      </Section>
    </LoaderContainer>
  );
};
export default Loader;
