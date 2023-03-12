// React imports
import React from "react";

// Style
import styled, { css, keyframes } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
const Options = ({ text, img, icon, id, setterLanguage }) => {
  const ButtonOption = styled.button`
    border: none;
    display: flex;
    gap: 4px;

    align-items: center;

    font-family: "Roboto", sans-serif;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    font-variant: all-small-caps;

    align-items: center;
    justify-center: center;

    padding: 0 16px;
    height: 52px;
    width: 90px;
    border-radius: 7px;
    background-color: "";
    
    cursor: pointer;
    &:hover {
      background-color: ${(propsTheme) =>
        propsTheme.theme.light.colors.lightGrey};
    }
  `;

  return (
    <ButtonOption onClick={() => setterLanguage && setterLanguage(id)}>
      <img src={`assets/` + img} alt="" width={`20px`} />
      {text}
      {icon}
    </ButtonOption>
  );
};

export default Options;
