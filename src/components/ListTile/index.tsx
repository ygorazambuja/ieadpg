import { Container } from "./styles";

type ListTileProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export function ListTile({ children, onClick }: ListTileProps) {
  return <Container onClick={onClick}>{children}</Container>;
}
