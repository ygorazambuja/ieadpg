import styled from "styled-components";

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  justify-content: center;

  background-color: ${({ color }) => color};

  color: var(--shape);
  font-weight: 600;

  border-radius: 24px;

  transition: all 0.3s;

  span {
    font-size: 1rem;
    padding: 0.7rem;
  }

  &:hover {
    cursor: pointer;

    filter: drop-shadow(6px 0px 6px rgba(0, 0, 0, 0.2));
  }
`;
