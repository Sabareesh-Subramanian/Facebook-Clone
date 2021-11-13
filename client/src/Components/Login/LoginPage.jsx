import { useEffect, useState } from "react";
import "../../App.css";
import "../styles/Login/LoginPage.css";
import LoginLogo from "./LoginLogo";
import LoginForm from "./LoginForm";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";
// import { login, resetPassword, signup } from '../../Firebase/authentication';
// import { database } from '../../Firebase/firebase';
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  signUpFailure,
  signupRequest,
  signupSuccess,
} from "../../Redux/Auth/actions";
import { WaveLoading } from "react-loadingg";
import useVisibility from "../../Hooks/useVisibility";
import ResetPassword from "./ResetPassword";

const initFormSignup = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
};
const initFormLogin = {
  email: "",
  password: "",
};
function LoginPage() {
  const [isCreateClick, setIsCreateClick] = useState(false);
  const [signUpForm, setSignUpForm] = useState(initFormSignup);
  const [logInForm, setLogInForm] = useState(initFormLogin);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const { first_name, last_name, email, password } = signUpForm;
  const [dob, setDob] = useState("1, June, 1950");
  const [day, setDay] = useState("1");
  const [mon, setMon] = useState("June");
  const [year, setYear] = useState("1950");
  const [reset, setReset] = useState(false);
  const { errorMessage, isError, isLoading } = useSelector(
    (store) => store.auth
  );
  const handleSignUpForm = (e) => {
    //console.log(e.target.value)
    const { value, name } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
    //console.log(signUpForm)
  };

  const handleLoginForm = (e) => {
    const { value, name } = e.target;
    setLogInForm({ ...logInForm, [name]: value });
  };

  const handleChangeDob = (e) => {
    if (e.target.name === "date_of_birth:day") {
      setDay(e.target.value);
    } else if (e.target.name === "date_of_birth:mon") {
      setMon(e.target.value);
    } else if (e.target.name === "date_of_birth:year") {
      setYear(e.target.value);
    }

    //console.log(dob)
  };

  useEffect(() => {
    setDob(day + ", " + mon + ", " + year);
  }, [day, mon, year]);

  const dispatch = useDispatch();

  const handleSingUp = () => {
    dispatch(signupRequest());
    // signup(email,password)
    // .then(res=>{
    //    const {uid} = res.user
    //    let payload = {uid,...signUpForm,dob,accessibility:true}
    //    delete  payload.password;
    //    database.collection("users").doc(uid).set(payload).then((res)=>{
    //        database.collection("users").doc(uid)
    //        .onSnapshot((doc) => {
    //            dispatch( signupSuccess(doc.data()) );
    //        });
    //    })
    // }).catch((err)=>{
    //     dispatch(signUpFailure(err.message))
    // })
  };

  const handleLogin = () => {
    dispatch(loginRequest());
    // login(logInForm.email,logInForm.password)
    // .then(res=>{
    //     const { uid } = res.user
    //     database.collection("users").doc(uid)
    //     .onSnapshot((doc) => {
    //         dispatch( loginSuccess(doc.data()) );
    //     });
    // })
    // .catch((err)=>{
    //     console.log("p",err);
    //     setLoginErrorMessage(err.message)
    //     dispatch(loginFailure(err))
    // })
  };

  const handleCreateClick = () => {
    setIsCreateClick(true);
  };
  const handleCloseClick = () => {
    setIsCreateClick(false);
  };

  const years = new Array(60).fill(1950);
  const days = new Array(31).fill(1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div>
        <div className="loginPageContainer flexBox">
          <LoginLogo />
          {reset ? (
            <ResetPassword
              toggleReset={setReset}
              onClickCreate={handleCreateClick}
            />
          ) : (
            <LoginForm
              {...logInForm}
              isLoading={isLoading}
              handleLoginForm={handleLoginForm}
              handleLogin={handleLogin}
              onClickCreate={handleCreateClick}
              isError={isError}
              loginErrorMessage={loginErrorMessage}
              handleResetPassword={setReset}
            />
          )}
        </div>
        <div className="LoginPageFooter">
          <p>English (UK)</p>
          <p>Facebook © 2021</p>
        </div>
      </div>

      {isCreateClick && (
        <div className="signUpModel">
          <div className="signUpContainer">
            <h2 className="signUpH2">Sign Up</h2>
            <p className="signUpP">It's quick and easy.</p>
            <hr className="signUpHr" />
            {/* <br /> */}
            <button className="signUpbuttonClose" onClick={handleCloseClick}>
              <CloseIcon />
            </button>
            <div className="nameSignUpContainer">
              <input
                type="text"
                placeholder="First name"
                value={first_name}
                name="first_name"
                onChange={handleSignUpForm}
              />
              <input
                style={{ marginLeft: "10px" }}
                type="text"
                placeholder="Surname"
                value={last_name}
                name="last_name"
                onChange={handleSignUpForm}
              />
            </div>
            <input
              className="numPassInput"
              type="email"
              value={email}
              placeholder="Email address"
              name="email"
              onChange={handleSignUpForm}
            />
            <input
              className="numPassInput"
              type="password"
              value={password}
              placeholder="New password"
              name="password"
              onChange={handleSignUpForm}
            />
            <div className="dobSignUpContainer">
              <p>Date of birth</p>
              <select
                onChange={(e) => handleChangeDob(e)}
                className="first"
                name="date_of_birth:day"
                tabindex="7"
              >
                {days.map((el, i) => (
                  <option key={el + i} value={el + i}>
                    {el + i}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handleChangeDob(e)}
                name="date_of_birth:mon"
                tabindex="8"
              >
                {months.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handleChangeDob(e)}
                name="date_of_birth:year"
                tabindex="9"
              >
                {years.map((el, i) => (
                  <option key={el + i} value={el + i}>
                    {el + i}
                  </option>
                ))}
              </select>
            </div>
            <p className="genderPtag">Gender</p>
            <div className="dobSignUpContainer flexBox">
              <div style={{ marginLeft: "-15px" }}>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="MALE"
                  name="gender"
                />
                <p>Male</p>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="FEMALE"
                  name="gender"
                />
                <p>Female</p>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="OTHERS"
                  name="gender"
                />
                <p>Others</p>
              </div>
            </div>
            <p className="termsSignUpContainer">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy.{" "}
            </p>
            {isError && (
              <div className="errorHandlingContainerSignUp">
                <p>{errorMessage}</p>
              </div>
            )}
            <button
              disabled={isLoading}
              className="signUpButton"
              onClick={handleSingUp}
            >
              {!isLoading ? (
                "Sign-up"
              ) : (
                <WaveLoading
                  size="small"
                  color="var(--primary-background)"
                  style={{
                    margin: "0 auto",
                    paddingTop: "0",
                    paddingBottom: "0",
                  }}
                />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
