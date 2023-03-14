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

const App = () => {
  const [heightDynamic, setheightDynamic] = useState(`101%`);
  const [valueTop, setValueTop] = useState(0);

  // STYLED COMPONENTS
  const App = styled.div`
  width: 100%
  min-height: heightDynamic;
  
`;

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
    }, 7000);
  }, []);

  return (
    <Theme>
      <App>
        {/* Loader dinamico */}
        <Loader heightDynamic={heightDynamic} valueTop={valueTop} />
        <BrowserRouter>
          <header
            style={{
              width: `100%`,
              height: `72px`,
              marginTop: `56px`,
              padding: `0 92px`,
            }}
          >
            <NavBar></NavBar>
          </header>
          <main
            style={{
              width: `100%`,
              minHeight: heightDynamic,
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
            </Routes>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </App>
    </Theme>
  );
};

export default App;
