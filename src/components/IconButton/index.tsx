import { IconBase } from "react-icons";
import { Container } from "./styles";

interface IconButtonProps {
  icon: React.ReactElement;
  size?: number;
  onClick?: () => void;
  color?: string;
}

export function IconButton({
  icon,
  size = 32,
  color = "black",
  onClick,
}: IconButtonProps) {
  return (
    <Container size={size} onClick={onClick} color={color}>
      <IconBase color={color}>{icon}</IconBase>
    </Container>
  );
}
