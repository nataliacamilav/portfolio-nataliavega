// React imports
import React from "react";
import { Link } from "react-router-dom";
import Theme from "../../Theme/Theme";
// Style
import styled from "styled-components";

const ButtonNav = ({
  text,
  bgColor,
  icon,
  link,
  setterSection,
  sectionSelected,
  id,
  dialog,
  titleDialog,
  textDialog,
  setterModal,
  openModal,
  setterTitleDialog,
  setterTextDialog,
  setterMenu,
  stateMenu
}) => {
  const ButtonNav = styled.button`
    background-color: "";
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 8px;
    border-radius: 100px;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    flex-grow: 1;
    min-width: fit-content;

    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: ${(propsTheme) =>
        propsTheme.theme.light.colors.lightGrey};
    }

    &.selected {
      background-color: ${(propsTheme) =>
        propsTheme.theme.light.colors[bgColor]};
    }

  `;
  const LinkButton = styled.div`
    textdecoration: none;
    color: none;
    width: 100%;
    height: 52px;
  `;
  const onClickFx = () => {
    link && setterSection(link);
    setterMenu(!stateMenu)
    const dialogSetter = () => {
      setterModal(!openModal);
      setterTitleDialog(titleDialog);
      setterTextDialog(textDialog);
    };
    dialog && dialogSetter();
  };
  const changeState = () => {
    if (link) {
      return sectionSelected === link ? `selected` : ``;
    }
    return;
  };
  return (
    <LinkButton>
      <Link
        to={link}
        style={{
          textDecoration: `none`,
          color: `none`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <ButtonNav onClick={() => onClickFx()} className={changeState()}>
          {icon}
          <p>{text}</p>
        </ButtonNav>
      </Link>
    </LinkButton>
  );
};

export default ButtonNav;
