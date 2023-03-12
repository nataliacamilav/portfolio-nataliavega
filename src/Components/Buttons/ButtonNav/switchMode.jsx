// React imports
import React, { useState } from "react";

// Style
import styled, { css, keyframes } from "styled-components";

const SwitchMode = () => {
  const [mode, setMode] = useState(false);

  const Contenedor = styled.div`
    margin: 0 16px;
    background-color: ${mode ? `#87C6FF` : `#1F2533`};
    width: 60px;
    height: 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: ${mode ? `flex-start` : `flex-end`};
    padding: 1px 3px;
    position: relative;
    cursor: pointer;
    transition: all 5s linear;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;

      background: url(${mode
        ? `assets/whiteClouds.svg`
        : `assets/whiteStars.svg`});

      transition: background 5s linear;
    }
  `;
  const MoonSun = styled.div`
    background-color: ${mode ? `#ffc187` : `#ffffff`};
    box-shadow: ${
      mode
        ? `-3.9px 6.5px 5.2px rgba(183, 183, 183, 0.35),
        0px 0px 11.7px rgba(255, 193, 135, 0.6), inset 0px -2.6px 5.2px #ffa149,
        inset 0px 2.6px 5.2px #ffd0a5;
      clip-path: circle(50% at 50% 50%);`
        : `-3.9px 0px 19.5px rgba(183, 183, 183, 0.31),
    inset 0px -2.6px 5.2px #ffffff, inset 0px 2.6px 5.2px #bfbfc0;`
    }
     
    border-radius: 100px;
    width: 16px;
    height: 16px;
    position: relative;
    transition: all 5s linear;

    &:after {
      content: "";
      position: ${mode ? `relative` : `absolute`};
      width: 10px;
      height: 10px;
      background-color: #1f2533;
      border-radius: 100px;
      top: calc(50% - 8px);

      right: -2px;
      transition: all 5s linear;

    }
  `;
  return (
    <Contenedor onClick={() => setMode(!mode)}>
      <MoonSun></MoonSun>
    </Contenedor>
  );
};

export default SwitchMode;
