import { ThemeColors } from "../../styles/global";
import { Container } from "./styles";

interface ChipProps {
  label: string;
  onClick?: () => void;
  color?: string;
}

export function Chip({
  label = "Default",
  onClick,
  color = ThemeColors.blue,
}: ChipProps) {
  return (
    <Container onClick={onClick} color={color}>
      <span>{label}</span>
    </Container>
  );
}
