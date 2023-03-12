// React imports
import React from "react";
import Theme from "../Theme/Theme";
import { useState } from "react";

// Style
import styled, { css, keyframes } from "styled-components";
// iconos
import {
  MdInfoOutline,
  MdOutlineFileDownload,
  MdOutlineFolderSpecial,
  MdOutlinePsychology,
  MdOutlineSchool,
  MdOutlineContactSupport,
} from "react-icons/md";
import ButtonNav from "../Buttons/ButtonNav/ButtonNav";
import SwitchMode from "../Buttons/ButtonNav/switchMode";
import DropDown from "../Dropdown/DropDown";

const Nav = styled.nav`
  width: 100%;
  height: 52px;
  display: flex;
  background: #f2f2f2;
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  position: absoluite;
`;

const NavBar = (props) => {
  // Array de objetos de botones
  const buttonsNav = [
    {
      bgColor: "lightPink",
      text: "Sobre Mi",
      icon: <MdInfoOutline />,
    },
    {
      bgColor: "lightYellow",
      text: "Estudios",
      icon: <MdOutlineSchool />,
    },
    {
      bgColor: "lightGreen",
      text: "Habilidades",
      icon: <MdOutlinePsychology />,
    },
    {
      bgColor: "lightBlue",
      text: "Proyectos",
      icon: <MdOutlineFolderSpecial />,
    },
    {
      bgColor: "lightPurple",
      text: "Contacto",
      icon: <MdOutlineContactSupport />,
    },
    {
      bgColor: "lightPink",
      text: "Curriculum",
      icon: <MdOutlineFileDownload />,
    },
  ];
  // Renderizado de botones
  const renderButtons = buttonsNav.map((button) => (
    <ButtonNav
      bgColor={button.bgColor}
      text={button.text}
      icon={button.icon}
      key={`ButtonNav` + button.text + button.bgColor}
    ></ButtonNav>
  ));

  return (
    <Nav>
      <div
        style={{
          width: `calc(100% - 60px)`,
          height: `100%`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderButtons}
      </div>
      <SwitchMode></SwitchMode>
      <DropDown></DropDown>
    </Nav>
  );
};

export default NavBar;
