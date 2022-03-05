import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  color: var(--shape);
  font-size: 18px;
  padding: 14px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  cursor: pointer;

  svg {
    margin-right: 12px;
  }

  &:hover {
    filter: blur(0.6px);

    background-color: var(--blue-light);
  }
`;
