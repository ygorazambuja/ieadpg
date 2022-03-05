import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding-right: 30px;
  }

  background: #f3f2f2;
`;
