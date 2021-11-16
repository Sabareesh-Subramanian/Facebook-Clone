import React from "react";
import { Link } from "react-router-dom";
import { WaveLoading } from "react-loadingg";
import "../styles/Login/LoginPage.css";
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

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        disPatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        console.log(result.user);
        // window.location.href = "/home";
      })
      .catch((error) => alert(error.message));
  };
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
        onClick={signIn}
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
    </div>
  );
}

export default LoginForm;
