import { useState } from "react";
import Context from "./store";
import { useHistory } from "react-router-dom";

const StoreProvider = (props) => {
  const initialToken = localStorage.getItem("token"); /// importent for Relode the page
  const [responseAPI, setresponseAPI] = useState(initialToken);
  const history = useHistory();

  const isUserLogin = !!responseAPI; // spacial check true or false

  const tokenHandler = (newToken) => {
    setresponseAPI(newToken);

    localStorage.setItem("token", newToken); //if you would wanna store an object you have to convert data to JSON first
    //which then is a string again.usin stringyfy
  };

  // useState(() => { // we can do like this also
  //   // !!!!! this is main function for whenever we refrese the page stay login
  //   const getTokenfromlocalstorage = localStorage.getItem("token");
  //   if (getTokenfromlocalstorage) {
  //     setresponseAPI(getTokenfromlocalstorage);
  //   }
  // }, []);

  const cleanUpHandler = () => {
    setresponseAPI(null);
    history.replace("/login");
    localStorage.removeItem("token");
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
