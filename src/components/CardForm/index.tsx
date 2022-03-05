import { CardFormTitle, Container } from "./styles";

type CardFormProps = {
  children?: React.ReactNode;
  title: string;
};
export function CardForm({ children, title }: CardFormProps) {
  return (
    <Container>
      <CardFormTitle>{title}</CardFormTitle>
      {children}
    </Container>
  );
}
