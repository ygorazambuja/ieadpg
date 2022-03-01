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
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({ content, loading, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest}>{loading ? <Spinner /> : content}</StyledButton>
  );
}

export default Button;
