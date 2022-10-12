import { useRef, useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setisLoading(true);

    let url = "";
    if (isLogin === true) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZWnWVqZsnQYcTMGxbHuzjB87AyJACNb4"; // AIzaSyAZWnWVqZsnQYcTMGxbHuzjB87AyJACNb4 this is a project key found in project key
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZWnWVqZsnQYcTMGxbHuzjB87AyJACNb4"; // AIzaSyAZWnWVqZsnQYcTMGxbHuzjB87AyJACNb4 this is a project key found in project key
    }
    try {
      const response = await fetch(url, {
        // watch video to found above url vvv. Imp watch video for Api login,logout
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok === false) {
        const message = await response.json(); // we always use if condition to handel with error while using fetch method
        console.log(message.error.message);
        throw new Error(message.error.message);
      }
      if (response.ok === true) {
        const token = await response.json();
        console.log(token.idToken);
      }

      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      alert(error);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "Login" : "Creat account"}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
