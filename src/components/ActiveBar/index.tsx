import Button from "../Button";
import { Container } from "./styles";

type ActiveBarProps = {
  children?: React.ReactNode;
};

export function ActiveBar({ children }: ActiveBarProps) {
  return <Container>{children}</Container>;
}
