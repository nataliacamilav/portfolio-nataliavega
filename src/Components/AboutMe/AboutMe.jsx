import React from "react";

// Style
import Theme from "../Theme/Theme";
import styled, { keyframes } from "styled-components";

const AboutMe = () => {
  // Nubes moviiendose hacia la derecha
  const infiniteLoop = keyframes`
    to {
    background-position: 1500px;
    }
    `;
  const Container = styled.section`
    width: 100%;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  `;
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(propsTheme) => propsTheme.theme.light.colors.pink};
  `;
  const BgImg = styled.div`
    background-color: pink;
    clip-path: circle(50% at 50% 50%);
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-basis: 250px;
    background-size: 1500px 100%;
    position: relative;

    &:after {
      content: "";
      background: url(assets/cvClouds.svg) repeat-x;
      background-size: 500px 250px;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      animation: ${infiniteLoop} 15s linear infinite;
    }
  `;

  const InfoContainer = styled.article`
    width: 100%;
    display: flex;
    gap: 24px;
  `;

  const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  const P = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  `;

  const Span = styled.span`
    color: ${(propsTheme) => propsTheme.theme.light.colors.pink};
    font-weight: 500;
  `;
  return (
    <Container>
      <H2>Sobre mi</H2>
      <InfoContainer>
        <BgImg>
          <img
            src="../../assets/cvPicture.png"
            alt=""
            style={{ width: `250px`, height: `250px` }}
          />
        </BgImg>
        <Paragraph>
          <P>
            Soy una persona <Span>creativa</Span>, <Span>entusiasta</Span> y 
            <Span> responsable</Span>. A comienzos del año 2022 decidí tomar un
            rumbo distinto con mi vida profesional y cambié de estudiar
            odontología a dedicarme al diseño y desarrollo web.
          </P>
          <P>
            Realicé cursos de Diseño UX UI y además proyectos donde cumplí este
            rol. Luego comencé a estudiar desarrollo web aprendiendo
            <Span> HTML5</Span>,<Span> CSS3</Span>,<Span> JavaScript</Span> y
            <Span> React JS</Span>. También poseo proyectos integradores, te
            invito a verlos más abajo 😊.
          </P>
          <P>
            Me gusta trabajar en equipo por lo que considero que tengo la
            capacidad de adaptarme rápidamente, empatizar y comunicarme
            claramente. Además, soy atenta a los detalles y puedo resolver
            problemas emergentes.
          </P>
        </Paragraph>
      </InfoContainer>
      <P style={{textAlign: `center`}}>
        Espero conseguir un puesto laboral donde pueda emplear mis conocimientos
        actuales y tener la oportunidad de seguir ampliándolos
      </P>
    </Container>
  );
};

export default AboutMe;
