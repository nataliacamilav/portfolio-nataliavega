// React imports
import React from "react";

import SocialMediaItem from "./SocialMediaItem";
// Style
import Theme from "../Theme/Theme";
import styled, { css, keyframes } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { IoMail } from "react-icons/io5";
const Contact = () => {
  const Container = styled.section`
    width: 100%;

    padding-top: 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    & img {
      align-self: center;
      width: 350px;
      object-fit: cover;
      @media (max-width: 960px) {
        width:250px;
        
      }
    }
    @media (max-width: 960px) {
      padding-top: 56px;
    }
  `;
  const ContactTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `;
  const H2 = styled.h2`
    font-family: "Convergence";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    color: ${(propsTheme) => propsTheme.theme.light.colors.purple};
  `;
  const H3 = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
  `;
  const H4 = styled.h4`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14x;
    text-align: center;
  `;
  const SocialMediaContainer = styled.article`
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    justify-content: center;
    gap: 16px;
    width: 660px;
    @media (max-width: 960px) {
      width:100%;
      
    }
  `;
  const socialMediaCollection = [
    // Linkedin
    {
      scname: `Natalia Camila Vega`,
      icon: <BsLinkedin />,
      link: `https://www.linkedin.com/in/natalia-camila-vega-74783b228/`,
    },
    {
      scname: `nataliavega98`,
      icon: <BsGithub />,
      link: `https://github.com/nataliavega98`,
    },
    {
      scname: `nataliavega98`,
      icon: <ImBehance2 />,
      link: `https://www.behance.net/nataliavega98`,
    },
    {
      scname: `natalia.camila@hotmail.com`,
      icon: <IoMail />,
      link: `natalia.camila@hotmail.com`,
    },
  ];
  const renderSocialMedia = socialMediaCollection.map((item) => (
    <SocialMediaItem
      icon={item.icon}
      scname={item.scname}
      link={item.link}
    ></SocialMediaItem>
  ));
  return (
    <Container>
      <ContactTextContainer>
        <H2>Contacto</H2>
        <H3>¡Muchas gracias por visitar mi portfolio!</H3>
        <H4>
          Si te gustó mi trabajo no dudes en contactarme a través de mis redes
          sociales.
        </H4>
        <SocialMediaContainer>{renderSocialMedia}</SocialMediaContainer>
      </ContactTextContainer>

      <img src="assets/avatar.gif" alt="" className="avatarImg" />
    </Container>
  );
};

export default Contact;
