import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  padding: 12px 8px;
  flex-direction: column;

  border-top: 1px solid #b8b8b8;

  font-size: 1.2rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: "1fr 1fr 1fr";
    gap: "12px 12px";
    grid-template-areas:
      ". ."
      ". ."
      ". .";
  }
  & strong {
    font-weight: 600;
    padding-right: 8px;
  }
`;

export const CardFormTitle = styled.div`
  font-size: 14px;
  color: #adabab;
  text-transform: uppercase;
`;
