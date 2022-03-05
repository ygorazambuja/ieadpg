import { Container } from "./styles";

type CardFormProps = {
  children?: React.ReactNode;
  title: string;
};
export function CardForm({ children, title }: CardFormProps) {
  return (
    <Container>
      <span>{title}</span>
      {children}
    </Container>
  );
}
