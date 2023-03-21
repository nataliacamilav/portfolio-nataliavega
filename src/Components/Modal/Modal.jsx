import React from "react";

import styled from "styled-components";
const Modal = ({ textDialog, titleDialog, openModal, setterModal }) => {
  const Container = styled.div`
    position: fixed;
    display: ${openModal ? `flex` : `none`};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 2000;
    background: #00000025;
    backdrop-filter: blur(1px);
  `;
  const ContainerDialog = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;

    padding: 32px;
    gap: 24px;
    background: linear-gradient(
        0deg,
        rgba(113, 90, 174, 0.11),
        rgba(113, 90, 174, 0.11)
      ),
      #fffbfe;
    border-radius: 28px;
  `;
  const TitleDialog = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${(props) => props.theme.light.colors.text};
  `;
  const TextDialog = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.light.colors.text};
  `;
  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
  `;
  const ButtonDialog = styled.button`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    border: none;
    background: none;
    cursor: pointer;
    font-variant: all-small-caps;
    color: ${(props) => props.theme.light.colors.text};
    &.error {
      color: ${(props) => props.theme.light.colors.error};
    }
  `;
  return (
    <Container onClick={() => setterModal(!openModal)}>
      <ContainerDialog onClick={(e) => e.stopPropagation()}>
        <TitleDialog>{titleDialog}</TitleDialog>
        <TextDialog>{textDialog}</TextDialog>
        <ButtonContainer>
          <ButtonDialog
            className="error"
            onClick={() => setterModal(!openModal)}
          >
            cancelar
          </ButtonDialog>
          <a href="assets/cv.pdf" target="_blank">
            <ButtonDialog >aceptar</ButtonDialog>
          </a>
        </ButtonContainer>
      </ContainerDialog>
    </Container>
  );
};
export default Modal;
