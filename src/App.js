// Stylesheet
import { useEffect, useState } from "react";
import "./App.css";

// Components Imports
import Loader from "./Components/Loader/Loader";
import AboutMe from "./Components/AboutMe/AboutMe";
const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [stateSlideUp, setStateSlideUp] = useState(false);
  // Sacar el loader
  useEffect(() => {
    // Timer
    setTimeout(() => {
      setStateSlideUp(true);

      setTimeout(() => {
        setShowLoader(false);
      }, 2000);

    }, 2000);
  }, []);

  return (
    <div className="App">
      {showLoader ? <Loader translateValue={stateSlideUp} /> : <AboutMe />}
    </div>
  );
};

export default App;
