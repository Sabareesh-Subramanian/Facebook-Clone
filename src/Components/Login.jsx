import React, { useState } from 'react'
import "./styles/Login.css"
import {auth,provider} from "../firebase"
import { useStateValue } from '../Context/StateProvider';
import {actionTypes} from "../Context/reducer"


function Login() {
    const [state, disPatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                disPatch({
                    type: actionTypes.SET_USER,
                    user:result.user,
                })

                console.log(result.user);
            }).catch(error => alert(error.message));
        
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />

            </div>
            <button onClick={signIn}  type="Submit" >Sign in</button>
            
        </div>
    )
}

export default Login
