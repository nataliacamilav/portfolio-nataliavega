// React imports
import React from "react";

// Style
import Theme from "../Theme/Theme";
import styled, { css, keyframes } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  const Contenedor = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 144px;
    gap: 16px;
    padding: 32px 92px;
    background-color: ${(props) => props.theme.light.colors.bgNavBar};
    box-sizing: border-box;
    border-radius: 16px 16px 0 0;
  `;
  const P = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  `;
  const RedesContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-sixe: 16px;

    .iconFooterHover {
      cursor: pointer;
    }
  `;
  return (
    <Contenedor>
      <RedesContain>
        <ImBehance2 className="iconFooterHover" />
        <BsGithub className="iconFooterHover" />
        <BsLinkedin className="iconFooterHover" />
        <IoMail style={{ fontSize: `20px` }} className="iconFooterHover" />
      </RedesContain>
      <P>Página diseñada y desarrolada por Natalia Vega</P>
    </Contenedor>
  );
};

export default Footer;
