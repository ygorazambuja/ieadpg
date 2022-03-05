import styled, { createGlobalStyle } from "styled-components";
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
    --green: #78B728;
    /* --blue: #5429CC; */
    --blue-light: #9975ff;
    --red: #E52E4D;
    --text-title: #B8B8B8;
    --shape: #f0f2f5;
    --label: #616161;
    --green-light: #ccf2e5;
    --blue: #6C91C2
  }

  @media (prefers-color-scheme: light) {
    :root {
    }
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
    }
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
    font-family: 'PT Sans', sans-serif;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
