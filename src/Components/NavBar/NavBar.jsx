// React imports
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
// Style
import styled from "styled-components";
import Theme from "../Theme/Theme";
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
`;

const NavBar = () => {
  const location = useLocation();
  console.log(`location->`, location.pathname);

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const [titleDialog, setTitleDialog] = useState(``);
  const [textDialog, setTextDialog] = useState(``);
  // Array de objetos de botones
  const buttonsNav = [
    {
      bgColor: "lightPink",
      text: "Sobre Mi",
      icon: <MdInfoOutline />,
      link: `/`,
      id: `aboutme`,
    },
    {
      bgColor: "lightYellow",
      text: "Estudios",
      icon: <MdOutlineSchool />,
      link: `/studys`,
      id: `studys`,
    },
    {
      bgColor: "lightGreen",
      text: "Habilidades",
      icon: <MdOutlinePsychology />,
      link: `/habilities`,
      id: `habilities`,
    },
    {
      bgColor: "lightBlue",
      text: "Proyectos",
      icon: <MdOutlineFolderSpecial />,
      link: `/projects`,
      id: `projects`,
    },
    {
      bgColor: "lightPurple",
      text: "Contacto",
      icon: <MdOutlineContactSupport />,
      link: `/contact`,
      id: `contact`,
    },
    {
      bgColor: "lightPink",
      text: "Curriculum",
      icon: <MdOutlineFileDownload />,
      href: "cv.pdf",
      id: `resume`,
      titleDialog: `Curriculum Vitae`,
      textDialog: `¿Deseas ir a una pestaña nueva para ver mi curriculum en formato PDF?`,
      dialog: `true`,
    },
  ];
  const [sectionSelected, setSectionSelected] = useState(location.pathname);

  // Renderizado de botones
  const renderButtons = buttonsNav.map((button) => (
    <ButtonNav
      bgColor={button.bgColor}
      text={button.text}
      icon={button.icon}
      key={`ButtonNav` + button.text + button.bgColor}
      link={button.link}
      id={button.id}
      dialog={button.dialog}
      sectionSelected={sectionSelected}
      setterTextDialog={setTextDialog}
      setterTitleDialog={setTitleDialog}
      setterSection={setSectionSelected}
      setterModal={setOpenModal}
      openModal={openModal}
      titleDialog={button.titleDialog}
      textDialog={button.textDialog}
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
      <Modal
        setterModal={setOpenModal}
        openModal={openModal}
        titleDialog={titleDialog}
        textDialog={textDialog}
      ></Modal>
    </Nav>
  );
};

export default NavBar;