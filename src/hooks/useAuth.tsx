import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { doLoginWithEmailAndPassword } from "../services/firebase/auth";

interface AuthContext {
  isAuthenticated: boolean;
  user?: User | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const history = useHistory();

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  async function getUserFromLocalStorage() {
    const user = localStorage.getItem("@iead:user");
    if (user) {
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
      return;
    }

    setIsAuthenticated(false);
  }

  function setUserInLocalStorage(user: User) {
    localStorage.setItem("@iead:user", JSON.stringify(user));
  }

  async function handleLogin(email: string, password: string) {
    try {
      const credentials = await doLoginWithEmailAndPassword({
        email,
        password,
      });

      const { user } = credentials;

      setIsAuthenticated(true);
      setUser(user);

      setUserInLocalStorage(user);
      setIsAuthenticated(true);

      toast.success("Login realizado com sucesso! 👍 ");
    } catch (error) {
      throw Error();
    }
  }

  async function handleLogout() {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("@iead:user");
    toast.success("Logout realizado com sucesso! 👍 ");

    history.replace("/");
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
