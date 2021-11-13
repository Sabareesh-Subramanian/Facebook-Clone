
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"



const firebaseConfig = {
  apiKey: "AIzaSyC_t59fvof-PBnB4LbQB9DWojpBKcdlwCQ",
  authDomain: "facebook-clone-29864.firebaseapp.com",
  projectId: "facebook-clone-29864",
  storageBucket: "facebook-clone-29864.appspot.com",
  messagingSenderId: "512217933833",
  appId: "1:512217933833:web:8d960e1cb31b11a59330d8",
  measurementId: "G-PR3VXR0BJM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;