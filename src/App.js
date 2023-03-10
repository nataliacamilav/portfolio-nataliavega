// Import React
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Stylesheet
import "./App.css";

// Components Imports
import Loader from "./Components/Loader/Loader";
import AboutMe from "./Components/AboutMe/AboutMe";
const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [stateSlideUp, setStateSlideUp] = useState(false);

  // const navigate = useNavigate();
  // // Sacar el loader
  // useEffect(() => {
  //   // Timer
  //   setTimeout(() => {
  //     setStateSlideUp(true);

  //     navigate("/aboutMe");
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      <header></header>
      {/* {showLoader ? <Loader translateValue={stateSlideUp} /> : <AboutMe />} */}
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Loader/>}
          ></Route>
          <Route exact path="/aboutMe" element={<AboutMe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
