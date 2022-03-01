import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./hooks/useAuth";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}
