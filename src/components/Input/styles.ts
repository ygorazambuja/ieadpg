import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0px 4px;
`;

export const StyledLabel = styled.label`
  padding: 0.8rem 0;
  color: var(--label);
  font-weight: 400;

  font-size: 1.1rem;
`;

export const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 12px;

  &::placeholder {
    color: ${(props) => lighten(0.6, "#333")};
  }
`;
