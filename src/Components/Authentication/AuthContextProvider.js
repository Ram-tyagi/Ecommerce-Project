import React, { useState,useContext } from "react";
import AuthContext from "./auth-context";


const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  
  if (token === null && localStorage.length !== 0) {
    setToken(localStorage["user"]);
   
  }

  const userLoggedIn = !!token;

  const loginHandler = (tokenId) => {
    setToken(tokenId);
   
    localStorage.setItem("user", tokenId);
    
  };

  const logoutHandler = () => {
    setToken(null);
   
    localStorage.removeItem("user");
    
  };

  const authContext = {
    token: token,
    userEmail: userEmail,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };


  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;