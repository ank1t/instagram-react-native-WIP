import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app =
  firebase.apps.length == 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = firebase.firestore();
const auth = firebase.auth();

export { db, firebase };
