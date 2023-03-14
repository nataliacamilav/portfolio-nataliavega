// React
import React from "react";

// Style
import styled from "styled-components";
import StudyItem from "./StudyItem";

const Studys = () => {
  const studyCollection = [
    // React coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: `Certificado de React JS`,
      grade: `10`,
      credential: ``,
      project: ``,
      link: `https://beautycosmetics.vercel.app/`,
      finishDate: `Actualidad`,
      startDate: ``,
    },
    // JS Nucba
    {
      school: `Nucba`,
      schoolLogo: `nucbaLogo.svg`,
      degree: `Certificado de JavaScript`,
      grade: ``,
      credential: ``,
      project: ``,
      link: `https://gamingstore-bynatalia.vercel.app/`,
      finishDate: ``,
      startDate: ``,
    },
    // UXUI Avanzado coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: `Certificado de Diseño UX UI Avanzado`,
      grade: `10`,
      credential: ``,
      project: ``,
      link: `https://www.behance.net/gallery/150898443/Re-diseno-de-la-web-HBO-MAX-Natalia-Vega`,
      finishDate: ``,
      startDate: ``,
    },
    // Diseño web Nucba
    {
      school: `Nucba`,
      schoolLogo: `nucbaLogo.svg`,
      degree: `Certificado de Diseño Web (HTML5 y CSS)`,
      grade: ``,
      credential: ``,
      project: ``,
      link: `https://nereidas-cruceros.vercel.app/`,
      finishDate: ``,
      startDate: ``,
    },
    // UXUI Inicial coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: `Certificado de Diseño UX UI Inicial`,
      grade: `10`,
      credential: ``,
      project: ``,
      link: `https://www.behance.net/gallery/142527049/Share-Natalia-Vega`,
      finishDate: ``,
      startDate: ``,
    },
    // Odontologia - Universidad de Bs As
    {
      school: `Universidad de Buenos Aires`,
      schoolLogo: `UBALogo.svg`,
      degree: `Certificado de Diseño UX UI Inicial`,
      grade: `(44% de la carrera - abandonada)`,
      credential: ``,
      project: ``,
      link: ``,
      finishDate: `Dic. 2021`,
      startDate: ``,
    },
    {
      school: `Colegio Nuestra Señora de Luján - Adrogué`,
      schoolLogo: `CNSLLogo.svg`,
      degree: `Bachiller con orientación en Ciencias naturales`,
      grade: ``,
      credential: ``,
      project: ``,
      link: ``,
      finishDate: `Dic. 2016`,
      startDate: `Mar. 2011`,
    },
  ];
  const Container = styled.section`
    width: 100%;
    padding-top: 32px;
    padding-bottom: 72px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  `;
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.light.colors.yellow};
  `;
  const StudysContainer = styled.article`
    display: flex;
    flex-direction: column;

    width: 100%;
  `;
  const renderStudys = studyCollection.map((study) => (
    <StudyItem
      school={study.school}
      schoolLogo={study.schoolLogo}
      degree={study.degree}
      grade={study.grade}
      credential={study.credential}
      project={study.project}
      link={study.link}
      finishDate={study.finishDate}
      startDate={study.startDate}
    ></StudyItem>
  ));
  return (
    <Container>
      <H2>Estudios</H2>
      <StudysContainer>{renderStudys}</StudysContainer>
      
    </Container>
  );
};

export default Studys;
