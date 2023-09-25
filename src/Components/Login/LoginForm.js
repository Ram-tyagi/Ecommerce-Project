import React, { useContext, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import AuthContext from "../Authentication/auth-context";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const history = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnFkm3QUNpHzskB0kG02tbilsUExeKDno";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnFkm3QUNpHzskB0kG02tbilsUExeKDno";
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPass,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      //   console.log(data);
      setIsLoading(false);
      if (res.ok) {
        authCtx.login(data.idToken,data.email);
        history("/store", { replace: true });
      } else {
        if (data && data.error) {
          throw new Error("Authentication failed!");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className={classes.auth}>
      {!authCtx.isLoggedIn && <h1>{isLogin ? "Login" : "Sign Up"}</h1>}
      {!authCtx.isLoggedIn && (
        <form onSubmit={loginSubmitHandler}>
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
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create an account"}</button>
            )}
            {isLoading && <p style={{ color: "white" }}>Sending request...</p>}
          </div>
          <div className={classes.actions}>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      )}
      {authCtx.isLoggedIn && (
        <div style={{ color: "white" }}>
          <h2>Hello!</h2>
          <p>{authCtx.userEmail}</p>
        </div>
      )}
    </section>
  );
};

export default LoginForm;