import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Birthdays } from "./pages/Birthdays";
import { Home } from "./pages/Home";
import { ImportMember } from "./pages/ImportMember";
import { Login } from "./pages/Login";
import { MemberDetails } from "./pages/MemberDetails";
import { Members } from "./pages/Members";
import { NewMember } from "./pages/NewMember";

export function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />

        {isAuthenticated && <Route path="/home" component={Home} />}
        {isAuthenticated && <Route path="/members" exact component={Members} />}
        {isAuthenticated && <Route path="/new-member" component={NewMember} />}
        {isAuthenticated && (
          <Route path={"/members/:id"} component={MemberDetails} />
        )}
        {isAuthenticated && (
          <Route path="/edit-member/:id" component={NewMember} />
        )}
        {isAuthenticated && <Route path="/birthdays" component={Birthdays} />}
        {isAuthenticated && (
          <Route path={"/import-member"} component={ImportMember} />
        )}
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
