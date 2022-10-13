import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import Context from "./components/store/store";
import StoreProvider from "./components/store/StoreProvider";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const ctx = useContext(Context);
  console.log(ctx.isLogin);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {!ctx.isLogin && (
          <Route path="/login">
            <AuthPage />
          </Route>
        )}

        {ctx.isLogin && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/"></Redirect>
          {/* we can redirect any where we want to do if above routers are to making condition */}
        </Route>
      </Switch>
      {/* {ctx.isLogin && <UserProfile></UserProfile>} */}
    </Layout>
  );
}

export default App;
