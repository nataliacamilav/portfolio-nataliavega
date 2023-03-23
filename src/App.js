// Import React
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style
import Theme from "./Components/Theme/Theme";
import styled from "styled-components";

// Components Imports
import Loader from "./Components/Loader/Loader";
import AboutMe from "./Components/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Studys from "./Components/Studys/Studys";
import Habilities from "./Components/Habilities/Habilities";
import Contact from "./Components/Contacto/Contact";
import Projects from "./Components/Projects/Projects";
import Modal from "./Components/Modal/Modal";
const App = () => {
  // Modal
  const [openModal, setOpenModal] = useState(false);
  const [titleDialog, setTitleDialog] = useState(``);
  const [textDialog, setTextDialog] = useState(``);

  // CAmbios dinamicos de Loader
  const [heightDynamic, setheightDynamic] = useState(`100px`);
  const [valueTop, setValueTop] = useState(0);
  // STYLED COMPONENTS
  const App = styled.div`
  width: 100%
  min-height: 100vh;
  color: ${(props) => props.theme.light.colors.text};
`;
  const Header = styled.header`
    width: 100%;
    height: fit-content;
    padding: 0 92px;
    padding-top: 56px;
    @media (max-width: 1280px) {
      padding: 56px 32px 0;
    }
    @media (max-width: 960px) {
      padding: 16px;
    }
  `;
  const Main = styled.main`
    width: 100%;
    min-height: ${heightDynamic};
    height: ${heightDynamic === `100vh` ? `auto` : `100px`};
    overflow-y: ${heightDynamic === `100vh` ? `visible` : `hidden`};
    padding: 0 122px;
    display: flex;
    flex-direction: column;
    gap: 72px;
    align-items: center;
    @media (max-width: 1280px) {
      padding: 0 56px;
    }
    @media (max-width: 500px) {
      padding: 0 24px;
    }
  `;
  // UseEffect para Loader
  useEffect(() => {
    setTimeout(() => {
      setheightDynamic(`100vh`);
      // Cambio de value Top del loader LoaderContainer. Se va sumando de
      // a 1 vh cada cierto tiempo generando el efecto que se desliza hacia arriba
      for (let i = 0; i < 180; i++) {
        const valueTop = i++;
        setTimeout(() => {
          setValueTop(`-` + valueTop + `vh`);
        }, i * 10);
      }
    }, 3000);
  }, []);

  return (
    <Theme>
      <App>
        {/* Loader dinamico */}
        <Loader valueTop={valueTop} />
        <Modal
          setterModal={setOpenModal}
          openModal={openModal}
          titleDialog={titleDialog}
          textDialog={textDialog}
        ></Modal>
        <BrowserRouter>
          <Header>
            <NavBar
            setterText={setTextDialog}
            setterTitle={setTitleDialog}
            setterModal={setOpenModal}
            openModal={openModal}
            titleDialog={titleDialog}
            textDialog={textDialog}></NavBar>
          </Header>
          <Main>
            <Routes>
              <Route exact path="/" element={<AboutMe />}></Route>
              <Route exact path="/studys" element={<Studys />}></Route>
              <Route exact path="/habilities" element={<Habilities />}></Route>
              <Route exact path="/projects" element={<Projects />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </Main>
          <Footer></Footer>
        </BrowserRouter>
      </App>
    </Theme>
  );
};

export default App;
