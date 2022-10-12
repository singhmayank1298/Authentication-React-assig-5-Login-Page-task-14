import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import StoreProvider from "./components/store/StoreProvider";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <StoreProvider>
      <Layout>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/" exact>
            <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Layout>
    </StoreProvider>
  );
}

export default App;
