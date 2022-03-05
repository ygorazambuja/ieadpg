import styled from "styled-components";

interface ContainerProps {
  size: number;
  color: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 24px;
  padding: 8px;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  svg {
    font-size: ${({ size = 24 }) => size}px;
    transition: all 0.2s;
  }

  &:hover {
    svg {
      transform: translateY(-2px);
      filter: drop-shadow(8px 0px 8px rgba(0, 0, 0, 0.4));
    }
  }
`;
