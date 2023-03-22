// React imports
import React, { useState } from "react";

// Style
import styled, { css, keyframes } from "styled-components";
import Options from "./Options";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = ({stateMenu}) => {
  const [dropdown, setDropdown] = useState(false);

  const [language, setLanguage] = useState("ES");

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 960px) {
      display: ${stateMenu ? `flex` : `none`};
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  `;
  const OptionsContainer = styled.div`
    background-color: ${(propsTheme) => propsTheme.theme.light.colors.bgNavBar};
    display: ${dropdown ? `flex` : `none`};
    flex-direction: column;
    position: absolute;
    top: 56px;
    width: 100%;
    border-radius: 7px;
  `;

  const languageSettings = [
    {
      text: `ES`,
      img: `spanish.svg`,
      id: `ES`,
    },
    {
      text: `EN`,
      img: `english.svg`,
      id: `EN`,
    },
  ];

  // Renderizado de options
  const renderOptions = languageSettings.map((option) => (
    <Options
      text={option.text}
      img={option.img}
      key={option.id}
      id={option.id}
      setterLanguage={setLanguage}
    ></Options>
  ));

  const renderSelected = () => {
    const selected = languageSettings.find((lang) => lang.id === language);

    return (
      <Options
        text={selected.text}
        img={selected.img}
        icon={<MdKeyboardArrowDown />}
      ></Options>
    );
  };

  return (
    <Container onClick={() => setDropdown(!dropdown)}>
      {language && renderSelected()}
      {/* Contenedor de opciones */}
      <OptionsContainer>{renderOptions}</OptionsContainer>
    </Container>
  );
};

export default DropDown;
