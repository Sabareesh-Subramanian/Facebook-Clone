import React from 'react';
import { Link } from 'react-router-dom';
import { WaveLoading } from "react-loadingg";
import "../styles/Login/LoginPage.css"

function LoginForm({onClickCreate,password,email,handleLogin,handleLoginForm,isLoading, isError, loginErrorMessage, handleResetPassword}){
    return (
        <div className="loginFormMainDiv">
            <input type="email" value={email}  name="email" onChange={handleLoginForm} placeholder="Email address or phone number"/>
            <input type="password" value={password} onChange={handleLoginForm} name="password" placeholder="Password" />
            {isError && <div className="errorMessageContainer">
                    <p>{loginErrorMessage}</p>
                </div>
            }
            <button  style={{color:"white"}} disabled={isLoading} onClick={handleLogin}>{!isLoading?"Log In":<WaveLoading size="small" color="#fff" style={{margin: "auto"}}/>}</button>
            <div  style={{margin:"0 auto"}}><Link to="/" onClick={()=>handleResetPassword(true)}><div className="forpass">Forgotten password?</div></Link></div>
            <hr className="hrLoginForm" />
            <button onClick={onClickCreate}>Create New Account</button>
        </div>
    )
}

export default LoginForm;