import styled from "styled-components";
import { darken, lighten } from "polished";
import { ThemeColors } from "../../styles/global";

interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  max-width: 100%;
  min-width: 10rem;
  height: 48px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: none;

  transition: all 0.4s;

  background: ${(props) => {
    if (props.primary) return ThemeColors.blue;
    if (props.secondary) return ThemeColors.shape;
    if (props.success) return ThemeColors.green;
  }};

  font-weight: 600;

  color: ${(props) => {
    if (props.primary) return ThemeColors.shape;
    if (props.secondary) return ThemeColors.blue;
    if (props.success) return ThemeColors.shape;
  }};

  &:hover {
    filter: brightness(0.9);
    transform: translateY(-2px);
  }
`;
