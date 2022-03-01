import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { doLoginWithEmailAndPassword } from "../../services/firebase/auth";
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

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = form;

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
      />
      <Input
        label="Senha"
        name="password"
        value={form.password}
        onChange={handleInputChange}
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
