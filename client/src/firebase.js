
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { getStorage } from "firebase/storage";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

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
let database = "";
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp)
const usersCollectionRef = collection(db, 'users');


export { auth, provider, firebaseApp, storage, database };
export default db;