// React imports
import React, { useState } from "react";
import Theme from "../../Theme/Theme";
// Style
import styled, { css, keyframes } from "styled-components";

const ButtonNav = ({ text, bgColor, icon }) => {
  const [colorBg, setColorBg] = useState(false);

  const ButtonNav = styled.button`
    background-color: ${colorBg
      ? (styledProps) => styledProps.theme.light.colors[bgColor]
      : ``};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 8px;
    border-radius: 100px;

    width: 100%;
    height: 100%;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    flex-grow: 1;
    min-width: fit-content;

    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: ${(propsTheme) =>
        propsTheme.theme.light.colors.lightGrey};
    }
  `;

  return (
    <ButtonNav onClick={() => setColorBg(!colorBg)}>
      {icon}
      <p>{text}</p>
    </ButtonNav>
  );
};

export default ButtonNav;
