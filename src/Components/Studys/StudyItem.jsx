// React imports
import React from "react";

// Style
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { IoIosArrowForward } from "react-icons/io";
const StudyItem = ({
  school,
  schoolLogo,
  degree,
  grade,
  credential,
  project,
  link,
  startDate,
  finishDate,
  studySelected,
  setterStudySelected,
}) => {
  const Container = styled.div`
    display: flex;
    gap: 24px;
    height: 180px;
    align-items: center;
  `;
  const DateLine = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    height: 100%;
    width: 68px;
  `;
  const StudyInfoContainer = styled.div`
    display: flex;
    gap: 8px;
    background-color: ${(props) => props.theme.light.colors.lighterYellow};
    border-radius: 7px;
    min-width: 420px;
    height: 100px;
    padding: 16px;

    align-items: center;
    cursor: pointer;
    .imgLogo {
      border-radius: 7px;

      height: 68px;
    }
    .arrowRight {
      color: ${(props) => props.theme.light.colors.darkerYellow};
      font-size: 24px;
    }
  `;
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 270px;
  `;
  const H3 = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  `;
  const H4 = styled.h4`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14x;
  `;
  const DateP = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 16px 0;
  `;
  const Italic = styled.span`
    font-style: italic;
  `;
  const Divider = styled.div`
    height: 100%;
    width: 3px;
    border-radius: 5px;
    background-color: ${(propsTheme) =>
      propsTheme.theme.light.colors.darkYellow};
  `;

  const activateDisplay = () => {
    !project || !credential
      ? setterStudySelected(undefined)
      : setterStudySelected(degree);
  };
  return (
    <Container>
      <DateLine>
        {finishDate && <DateP>{finishDate}</DateP>}
        <Divider></Divider>
        {startDate && <DateP>{startDate}</DateP>}
      </DateLine>
      <StudyInfoContainer
        onClick={() => activateDisplay()}
        style={(project || credential) ? { cursor: "pointer" } : {cursor: "default"}}
      >
        <img
          src={`assets/` + schoolLogo}
          alt={`Logo` + school}
          className="imgLogo"
        />
        <TextContainer>
          <H3>{school}</H3>
          <H4>
            {degree} - <Italic>Titulación: {grade}</Italic>{" "}
          </H4>
        </TextContainer>
        {(project || credential) && (
          <IoIosArrowForward className="arrowRight" />
        )}
      </StudyInfoContainer>
    </Container>
  );
};

export default StudyItem;
