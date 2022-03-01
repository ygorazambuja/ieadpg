import { Container, StyledInput, StyledLabel } from "./styles";

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest}></StyledInput>
    </Container>
  );
}
