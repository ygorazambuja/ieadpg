import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

export const ThemeColors = {
  green: "var(--green)",
  blue: "var(--blue)",
  blueLight: "var(--blue-light)",
  red: "var(--red)",
  textTitle: "var(--text-title)",
  shape: "var(--shape)",
  label: "var(--label)",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --green: #33cc95;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --red: #E52E4D;
    --text-title: ##B8B8B8;
    --shape: #f0f2f5;
    --label: #616161;
    --green-light: #ccf2e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media screen {
      font-size: 87.5% ;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
