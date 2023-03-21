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
const App = () => {
  // CAmbios dinamicos de Loader
  const [heightDynamic, setheightDynamic] = useState(`100px`);
  const [valueTop, setValueTop] = useState(0);
  // STYLED COMPONENTS
  const App = styled.div`
  width: 100%
  min-height: 100vh;
  color: ${(props) => props.theme.light.colors.text};
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

        <BrowserRouter>
          <header
            style={{
              width: `100%`,
              height: `fit-content`,
              padding: `0 92px`,
              paddingTop: `56px`,
            }}
          >
            <NavBar></NavBar>
          </header>
          <main
            style={{
              width: `100%`,
              minHeight: heightDynamic,
              height: heightDynamic === `100vh` ? `auto` : `100px`,
              overflowY: heightDynamic === `100vh` ? `visible` : `hidden`,
              padding: `0 122px`,
              display: `flex`,
              flexDirection: `column`,
              gap: `72px`,
              alignItems: "center",
            }}
          >
            <Routes>
              <Route exact path="/" element={<AboutMe />}></Route>
              <Route exact path="/studys" element={<Studys />}></Route>
              <Route exact path="/habilities" element={<Habilities />}></Route>
              <Route exact path="/projects" element={<Projects />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </App>
    </Theme>
  );
};

export default App;
