import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />

        {isAuthenticated && <Route path="/home" component={Home} />}

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
