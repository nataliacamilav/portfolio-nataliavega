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
import { CgClose, CgMenu } from "react-icons/cg";
import ButtonNav from "../Buttons/ButtonNav/ButtonNav";
import SwitchMode from "../Buttons/ButtonNav/switchMode";
import DropDown from "../Dropdown/DropDown";

const NavBar = () => {
  const location = useLocation();
  // Modal
  const [openModal, setOpenModal] = useState(false);
  const [titleDialog, setTitleDialog] = useState(``);
  const [textDialog, setTextDialog] = useState(``);

  const [sectionSelected, setSectionSelected] = useState(location.pathname);
  const [open, setStateMenu] = useState(true);
  const Nav = styled.nav`
    width: 100%;
    height: 52px;
    display: flex;
    background: #f2f2f2;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @media (max-width: 960px) {
      position: fixed;
      z-index: 3000;
      width: ${open ? `50%` : `56px`};
      height: ${open ? `calc(100vh - 32px)` : `56px`};
      flex-direction: column;
      border-radius: 50px;
      padding-bottom: ${open ? `52px` : `0`};
      justify-content: ${open ? `start` : `center`};
    }
    @media (max-width: 500px) {
      width: ${open ? `calc(100% - 32px)` : `56px`};
    }
  `;
  const MenuIconContainer = styled.div`
    display: none;
    @media (max-width: 960px) {
      display: flex;
      font-size: 24px;
      justify-content: ${open ? `flex-end` : `center`};
      width: 100%;
      height: ${open ? `56px` : `100%`};
      padding: ${open ? `24px 32px 0 32px` : `8px`};
    }
  `;
  const ButtonNavContainer = styled.div`
    width: calc(100% - 60px);F
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  
    @media (max-width: 960px) {
      display: ${open ? `flex` : `none`};
      width: 100%;
      flex-direction: column;
    }
  `;

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
  console.log(open);
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
      setterMenu={setStateMenu}
      stateMenu={open}
    ></ButtonNav>
  ));
  return (
    <Nav>
      <MenuIconContainer className="closeMenu">
        {open ? (
          <CgClose
            style={{ cursor: `pointer`, height: `100%`}}
            onClick={() => setStateMenu(!open)}
          />
        ) : (
          <CgMenu
            style={{ cursor: `pointer`, height: `100%`,}}
            onClick={() => setStateMenu(!open)}
          />
        )}
      </MenuIconContainer>
      <ButtonNavContainer>{renderButtons}</ButtonNavContainer>
      <SwitchMode stateMenu={open}></SwitchMode>
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
