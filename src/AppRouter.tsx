import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Members } from "./pages/Members";
import { NewMember } from "./pages/NewMember";

export function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />

        {isAuthenticated && <Route path="/home" component={Home} />}
        {isAuthenticated && <Route path="/members" component={Members} />}
        {isAuthenticated && <Route path="/new-member" component={NewMember} />}
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
