import React from "react";
import { ThemeProvider } from "styled-components";

const light = {
  colors: {
    // Background
    background: `#ffffff`,
    bgNavBar: `#F2F2F2`,
    bgTransparent: ``,

    // Pink
    darkerPink: `#653939`,
    darkPink: `#BC6A69`,
    pink: `#FB8B8C`,
    lightPink: `#FFDAD9`,

    // Yellow
    darkerYellow: `#cfb900`,
    darkYellow: `#EED500`,
    yellow: `#FFD600`,
    lightYellow: `#FFF3B4`,
    lighterYellow: `#F9F8EE`, 

    // Purple
    darkerPurple: ``,
    darkPurple: `#DFB6FF`,
    purple: `#E544FF`,
    lightPurple: `#FAD9FF`,

    // Blue
    darkerBlue: ``,
    darkBlue: ``,
    blue: `#47A6FF`,
    lightBlue: `#C6F1FF`,

    // Green
    darkerGreen: ``,
    darkGreen: ``,
    green: `#2EE400`,
    lightGreen: `#A9FF94`,

    // Grey
    darkerGrey: ``,
    darkGrey: ``,
    grey: `#2EE400`,
    lightGrey: `#c9c9c9`,
    


    // Text
    text: `#151515`,
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={{ light }}>{children}</ThemeProvider>
);

export default Theme;
