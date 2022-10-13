import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../store/store";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const ctx = useContext(Context);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>{ctx.isLogin ? "" : <Link to="/login">Login</Link>}</li>
          <li>{ctx.isLogin ? <Link to="/profile">Profile</Link> : ""}</li>
          <li>
            {ctx.isLogin ? <button onClick={ctx.logout}>Logout</button> : ""}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
