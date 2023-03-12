// Import React
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

// Style
import Theme from "./Components/Theme/Theme";
import styled from "styled-components";

// Components Imports
import Loader from "./Components/Loader/Loader";
import AboutMe from "./Components/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
const App = () => {
  // STYLED COMPONENTS
  const App = styled.div`
  width: 100%
  min-height: 100vh;
  
`;

  return (
    <Theme>
      <App>
        {/* Loader dinamico */}
        <Loader />
        <BrowserRouter>
          <header
            style={{
              width: `100%`,
              height: `72px`,
              marginTop: `56px`,
              padding: `0 72px`,
            }}
          >
            <NavBar></NavBar>
          </header>
          <main
            style={{
              width: `100%`,
              minHeight: `100vh`,
              padding: `0 72px`,
              display: `flex`,
              flexDirection: `column`,
              gap: `72px`,
              alignItems: "center",
              
            }}
          >
            <Routes>
              <Route exact path="/" element={<AboutMe />}></Route>
            </Routes>
          </main>
          <footer
            style={{
              width: `100%`,
              height: `72px`,
              padding: `0 72px`,
              display: `flex`,
              flexDirection: `column`,
              gap: `16px`,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Footer
          </footer>
        </BrowserRouter>
      </App>
    </Theme>
  );
};

export default App;
