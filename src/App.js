import { useContext } from "react";
import { Switch, Route } from "react-router-dom";

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
        <Route path="/home">
          <HomePage />
        </Route>
        {!ctx.isLogin && (
          <Route path="/" exact>
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
      {ctx.isLogin && <UserProfile></UserProfile>}
    </Layout>
  );
}

export default App;
