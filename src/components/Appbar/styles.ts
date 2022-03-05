import styled from "styled-components";

export const Container = styled.nav`
  display: flex;

  height: 4rem;

  align-items: center;
  background-color: var(--blue);
`;

export const Leading = styled.div`
  display: flex;

  width: 50px;
  margin-left: 8px;
  svg {
    font-size: 24px;
    color: var(--shape);

    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.9));
    }
  }
`;

export const Trailing = styled.div`
  padding-right: 8px;
  svg {
    font-size: 24px;
    color: var(--shape);

    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.9));
    }
  }
`;

export const Title = styled.span`
  font-size: 20px;

  font-weight: 800;

  font-family: "PT Sans", sans-serif;

  color: var(--shape);

  width: 100%;
`;
