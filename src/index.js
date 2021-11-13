import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Context/StateProvider';
import reducer, { initialState } from './Context/reducer';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*const firebaseConfig = {
  apiKey: "AIzaSyC_t59fvof-PBnB4LbQB9DWojpBKcdlwCQ",
  authDomain: "facebook-clone-29864.firebaseapp.com",
  projectId: "facebook-clone-29864",
  storageBucket: "facebook-clone-29864.appspot.com",
  messagingSenderId: "512217933833",
  appId: "1:512217933833:web:8d960e1cb31b11a59330d8",
  measurementId: "G-PR3VXR0BJM"
};*/
