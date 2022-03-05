import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { isEmailValid } from "../../validators/email.validator";
import { isPasswordValid } from "../../validators/password.validator";
import { ButtonsContainer, Container } from "./styles";

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const { handleLogin } = useAuth();
  const history = useHistory();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function isFormValid() {
    const { email, password } = form;

    if (!isEmailValid(email)) {
      toast.error("Email inválido");
      return false;
    }
    if (!isPasswordValid(password)) {
      toast.error("Senha inválida");
      return false;
    }

    return true;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = form;

    if (isFormValid()) {
      try {
        setLoading(true);
        await handleLogin(email, password);
        history.push("/home");
      } catch (error) {
        toast.error("Erro ao realizar login");
      } finally {
        setLoading(false);
      }
    }
  }

  function handleInputChange(event: FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;

    setForm({ ...form, [name]: value });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
        placeholder="seuemail@email.com"
      />
      <Input
        label="Senha"
        name="password"
        value={form.password}
        type="password"
        onChange={handleInputChange}
        placeholder="********"
      />
      <ButtonsContainer>
        <Button
          loading={loading}
          disabled={loading}
          content="Acessar"
          primary
        ></Button>
      </ButtonsContainer>
    </Container>
  );
}
