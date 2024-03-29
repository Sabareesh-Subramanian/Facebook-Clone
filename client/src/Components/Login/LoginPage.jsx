import { useEffect, useState } from "react";
import "../../App.css";
import "../styles/Login/LoginPage.css";
import db from "../../firebase";
import LoginLogo from "./LoginLogo";
import LoginForm from "./LoginForm";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import {
  loginRequest,
  signupRequest,
} from "../../Redux/Auth/actions";
import { WaveLoading } from "react-loadingg";
import ResetPassword from "./ResetPassword";

const initFormSignup = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
  photoURL:"",
};
const initFormLogin = {
  email: "",
  password: "",
};
function LoginPage() {
  const [state, disPatch] = useStateValue();
  const [isCreateClick, setIsCreateClick] = useState(false);
  const [signUpForm, setSignUpForm] = useState(initFormSignup);
  const [logInForm, setLogInForm] = useState(initFormLogin);
  const [loginData, setLoginData] = useState([]);
  const [loginErrorMessage] = useState("");
  const { first_name, last_name, email, password , photoURL} = signUpForm;
  const [dob,setDob] = useState("1, June, 1950");
  const [day, setDay] = useState("1");
  const [mon, setMon] = useState("June");
  const [year, setYear] = useState("1950");
  const [reset, setReset] = useState(false);
  const { errorMessage, isError, isLoading } = useSelector(
    (store) => store.auth
  );
  const handleSignUpForm = (e) => {
    const { value, name } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
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
  };

  useEffect(() => {
    db.collection("user_data").onSnapshot((snapshot) => {
      setLoginData(snapshot.docs.map((doc) => doc.data()));
        });
  },[])
  useEffect(() => {
    setDob(day + ", " + mon + ", " + year);
  }, [day, mon, year]);

  const handleSingUp = () => {
    db.collection("user_data").add({
      email: signUpForm.email,
      password: signUpForm.password,
      first_name: signUpForm.first_name,
      last_name: signUpForm.last_name,
      gender: signUpForm.gender,
      photoURL: signUpForm.photoURL,
      uid: uuid(),
    })
    setIsCreateClick(false);
  };

  const handleLogin = () => {
    let isTrue = false;
    let data = [];
    for (var i = 0; i < loginData.length; i++){
      if (loginData[i].email === logInForm.email && loginData[i].password === logInForm.password) {
        isTrue = true;
        data.push(loginData[i]);
        break;
      }
    }
    if (isTrue) {
      disPatch({
          type: actionTypes.SET_USER,
          user: data[0],
        });
    } else {
      alert('Wrong Credentials')
    }
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
          <p>This site is for educational purposes</p>
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
              type="url"
              value={photoURL}
              placeholder="Image Url"
              name="photoURL"
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
