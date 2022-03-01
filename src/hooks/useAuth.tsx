import { User } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { doLoginWithEmailAndPassword } from "../services/firebase/auth";

interface AuthContext {
  isAuthenticated: boolean;
  user?: User | null;
  handleLogin: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function handleLogin(email: string, password: string) {
    try {
      const credentials = await doLoginWithEmailAndPassword({
        email,
        password,
      });

      const { user } = credentials;

      setIsAuthenticated(true);
      setUser(user);

      toast("Login realizado com sucesso!");
    } catch (error) {
      throw Error();
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin }}>
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
