import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import Context from "../store/store";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const ctx = useContext(Context);

  const newPasswordRef = useRef();

  const history = useHistory();

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(ctx.token);

    const enteredPasswordRef = newPasswordRef.current.value;

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZWnWVqZsnQYcTMGxbHuzjB87AyJACNb4",
      {
        method: "POST",

        body: JSON.stringify({
          idToken: ctx.token,
          password: enteredPasswordRef, //e.target[0].value always use Ref hook to grap form value
          returnSecureToken: true,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.replace("/"); // (/ ) means go to home page
    console.log(response);
  };

  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
