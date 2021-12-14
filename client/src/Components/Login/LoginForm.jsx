import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WaveLoading } from "react-loadingg";
import "../styles/Login/LoginPage.css";
import db from "../../firebase";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";

function LoginForm({
  onClickCreate,
  password,
  email,
  handleLogin,
  handleLoginForm,
  isLoading,
  isError,
  loginErrorMessage,
  handleResetPassword,
}) {
  const [state, disPatch] = useStateValue();
  const [loginData, setLoginData] = useState([]);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const initState = {
          email: result.user.email,
          password: result.user.password,
          first_name: result.user.displayName,
          last_name: "",
          photoURL: result.user.photoURL,
          gender: result.user.gender,
          uid: result.user.uid,
        }
        disPatch({
          type: actionTypes.SET_USER,
          user: initState,
        });
        // window.location.href = "/home";
      })
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    db.collection("user_data").onSnapshot((snapshot) => {
      setLoginData(snapshot.docs.map((doc) => doc.data()));
        });
  },[])
  return (
    <div className="loginFormMainDiv">
      <input
        type="email"
        value={email}
        name="email"
        onChange={handleLoginForm}
        placeholder="Email address or phone number"
      />
      <input
        type="password"
        value={password}
        onChange={handleLoginForm}
        name="password"
        placeholder="Password"
      />
      {isError && (
        <div className="errorMessageContainer">
          <p>{loginErrorMessage}</p>
        </div>
      )}
      <button
        onClick={handleLogin}
        style={{ color: "white" }}
        disabled={isLoading}
      >
        {!isLoading ? (
          "Log In"
        ) : (
          <WaveLoading size="small" color="#fff" style={{ margin: "auto" }} />
        )}
      </button>
      <div style={{ margin: "0 auto" }}>
        <Link to="/" onClick={() => handleResetPassword(true)}>
          <div className="forpass">Forgotten password?</div>
        </Link>
      </div>
      <hr className="hrLoginForm" />
      <button onClick={onClickCreate}>Create New Account</button>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

<div  onClick={signIn} class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Sign in with google</b></p>
</div>
    </div>
  );
}

export default LoginForm;
