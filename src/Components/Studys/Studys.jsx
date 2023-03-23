// React
import React, { useState, useEffect } from "react";

// Style
import styled from "styled-components";
import StudyDisplay from "./StudyDisplay";
import StudyItem from "./StudyItem";

const Studys = () => {
  const studyCollection = [
    // React coderhouse
    {
      school: `Coderhouse`,
      schoolLogo: `coderLogo.svg`,
      degree: `Certificado de React JS`,
      grade: `10`,
      credential: `coderReactCredential.png`,
      project: `coderReactProject.png`,
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
      credential: `nucbaJSCredential.png`,
      project: `nucbaJSProject.png`,
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
      credential: `coderUXACredential.png`,
      project: `coderUXAProject.png`,
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
      credential: `nucbaDWebCredential.png`,
      project: `nucbaDWebProject.png`,
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
      credential: `coderUXCredential.png`,
      project: `coderUXProject.png`,
      link: `https://www.behance.net/gallery/142527049/Share-Natalia-Vega`,
      finishDate: ``,
      startDate: ``,
    },
    // Odontologia - Universidad de Bs As
    {
      school: `Universidad de Buenos Aires`,
      schoolLogo: `UBALogo.svg`,
      degree: `Titulo de odontóloga general`,
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
    @media (max-width: 960px) {
      padding-top: 56px;
    }
    @media (max-width: 720px) {
      padding-top: 56px;
    }
  `;
  const StudyDisplayContainer = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 960px) {
      width: 100%;
      justify-content: center;
    }
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
    justify-self: start;
    width: fit-content;
    @media (max-width: 960px) {
      width: 100%;
    }
  `;
  const [studySelected, setStudySelected] = useState();
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
      setterStudySelected={setStudySelected}
      studySelected={studySelected}
    ></StudyItem>
  ));

  const findStudySelected = studyCollection.find((study) => {
    if (studySelected && studySelected === study.degree) return study;
  });

  return (
    <Container>
      <H2>Estudios</H2>
      <StudyDisplayContainer>
        <StudysContainer>{renderStudys}</StudysContainer>
        {findStudySelected && (
          <StudyDisplay
            infoStudySelected={findStudySelected}
            setterStudySelected={setStudySelected}
            studySelected={studySelected}
          ></StudyDisplay>
        )}
      </StudyDisplayContainer>
    </Container>
  );
};

export default Studys;
