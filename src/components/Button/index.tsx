import { Spinner } from "../Spinner";
import { StyledButton } from "./styles";

type ButtonProps = {
  content: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({ content, loading, children, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest}>
      {loading ? <Spinner /> : content} {children}
    </StyledButton>
  );
}

export default Button;
