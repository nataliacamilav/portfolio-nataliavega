// React imports
import React from "react";
import TecnicalItem from "./TecnicalItem";
import SoftItem from "./SoftItem";
// Style
import Theme from "../Theme/Theme";
import styled, { css, keyframes } from "styled-components";
import { BsStars } from "react-icons/bs";
const Habilities = () => {
  const Container = styled.section`
    width: 100%;
    padding-top: 32px;
    padding-bottom: 72px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 960px) {
      padding-top: 56px;
      
    }
  `;
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.light.colors.green};
  `;
  const ContainerTecnical = styled.div`
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    gap: 24px;
    max-width: 700px;
    justify-content: center;
  `;
  const ContainerSoft = styled.div`
    
    display: flex;
    flex-flow: row wrap;
    row-gap: 24px;
    column-gap: 52px;
    max-width: calc(700px + 32px);
    
  `;
  const tecnicalH = [
    // HTML
    {
      thname: `HTML5`,
      icon: `htmlIcon.svg`,
    },
    // CSS
    {
      thname: `CSS3`,
      icon: `cssIcon.svg`,
    },
    // Javascript
    {
      thname: `JavaScript`,
      icon: `javascriptIcon.svg`,
    },
    // React JS
    {
      thname: `React JS`,
      icon: `reactJSIcon.svg`,
    },
    // github
    {
      thname: `github`,
      icon: `githubIcon.svg`,
    },
    // git
    {
      thname: `git`,
      icon: `gitIcon.svg`,
    },
    // Figma
    {
      thname: `Figma`,
      icon: `figmaIcon.svg`,
    },
    // whimsical
    {
      thname: `whimsical`,
      icon: `whimsicalIcon.svg`,
    },
    // uxtweak
    {
      thname: `uxtweak`,
      icon: `uxtweakIcon.svg`,
    },
    // illustrator
    {
      thname: `illustrator`,
      icon: `illustratorIcon.svg`,
    },
    // photoshop
    {
      thname: `photoshop`,
      icon: `photoshopIcon.svg`,
    },
    // photoshop
    {
      thname: `styled components`,
      icon: `styledcomponentsIcon.svg`,
    },
  ];
  const softH = [
    {
      thname: `Trabajo en equipo.`,
      icon: <BsStars />,
    },
    {
      thname: `Capacidad resolutiva`,
      icon: <BsStars />,
    },
    {
      thname: `comunicación clara`,
      icon: <BsStars />,
    },
    {
      thname: `empatía`,
      icon: <BsStars />,
    },
    {
      thname: `creatividad`,
      icon: <BsStars />,
    },
    {
      thname: `atención a los detalles.`,
      icon: <BsStars />,
    },
    {
      thname: `adaptabilidad`,
      icon: <BsStars />,
    },
    {
      thname: `buena organización`,
      icon: <BsStars />,
    },
    {
      thname: `persistente`,
      icon: <BsStars />,
    },
    {
      thname: `colaborativa`,
      icon: <BsStars />,
    },
    {
      thname: `Trabajo bajo presión`,
      icon: <BsStars />,
    },
  ];

  const renderTecnicalH = tecnicalH.map((item) => (
    <TecnicalItem
      icon={item.icon}
      thname={item.thname}
      key={item.thname}
    ></TecnicalItem>
  ));
  const renderSoftH = softH.map((item) => (
    <SoftItem thname={item.thname} key={item.thname}></SoftItem>
  ));
  return (
    <Container>
      <H2>Habilidades técnicas</H2>
      <ContainerTecnical>{renderTecnicalH}</ContainerTecnical>
      <H2>Habilidades blandas</H2>
      <ContainerSoft>{renderSoftH}</ContainerSoft>
    </Container>
  );
};

export default Habilities;
