import { useState } from "react";
import Context from "./store";
import { useHistory } from "react-router-dom";

const StoreProvider = (props) => {
  const [responseAPI, setresponseAPI] = useState("");
  const history = useHistory();

  const isUserLogin = !!responseAPI; // spacial check true or false

  const tokenHandler = (newToken) => {
    setresponseAPI(newToken);
  };

  const cleanUpHandler = () => {
    setresponseAPI(null);
    history.replace("/login");
  };

  console.log(responseAPI);
  const allProps = {
    tokenStateUpDate: tokenHandler,
    token: responseAPI,
    isLogin: isUserLogin,
    logout: cleanUpHandler,
  };
  return <Context.Provider value={allProps}>{props.children}</Context.Provider>;
};

export default StoreProvider;
