import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  padding: 12px 4px;
  flex-direction: column;

  border-top: 1px solid #b8b8b8;

  span {
    font-size: 14px;
    color: #adabab;
    text-transform: uppercase;
  }

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
`;
