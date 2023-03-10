// Import React
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Style
import styled from "styled-components";

// Components Imports
import Loader from "./Components/Loader/Loader";
import AboutMe from "./Components/AboutMe/AboutMe";

const App = () => {
  // STYLED COMPONENTS
  const App = styled.div`
  width: 100%
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  return (
    <App>
      {/* Loader dinamico */}
      <Loader />
      <BrowserRouter>
        <header>{/* navBar */}</header>
        <main>
          <Routes>
            <Route exact path="/" element={<AboutMe />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </App>
  );
};

export default App;
