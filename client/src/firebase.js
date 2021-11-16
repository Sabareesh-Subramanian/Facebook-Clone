
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { getStorage } from "firebase/storage";
import { collection } from "firebase/firestore";



// const firebaseConfig = {
//   apiKey: "AIzaSyC_t59fvof-PBnB4LbQB9DWojpBKcdlwCQ",
//   authDomain: "facebook-clone-29864.firebaseapp.com",
//   projectId: "facebook-clone-29864",
//   storageBucket: "facebook-clone-29864.appspot.com",
//   messagingSenderId: "512217933833",
//   appId: "1:512217933833:web:8d960e1cb31b11a59330d8",
//   measurementId: "G-PR3VXR0BJM"
// };
const firebaseConfig = {
  apiKey: "AIzaSyChgPhr5pRU18tTDn2cY-F9tUJPk6DrRUQ",
  authDomain: "facebook-clone-35703.firebaseapp.com",
  // databaseURL: "https://facebook-clone-35703-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-35703",
  storageBucket: "facebook-clone-35703.appspot.com",
  messagingSenderId: "406546252839",
  appId: "1:406546252839:web:82b51e6ed5a74acc13ba02",
  measurementId: "G-E3PBFRNM3Y"
};
firebase.initializeApp(firebaseConfig)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp)
const usersCollectionRef = collection(db, 'users');

console.log("U",usersCollectionRef)

export { auth, provider, firebaseApp, storage };
export default db;