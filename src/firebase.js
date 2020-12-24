import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyAmKXre8iS9UuH2MIitPFcv2eF0zqahfOM",
  authDomain: "auth-development-77e73.firebaseapp.com",
  databaseURL: "https://auth-development-77e73.firebaseio.com",
  projectId: "auth-development-77e73",
  storageBucket: "auth-development-77e73.appspot.com",
  messagingSenderId: "834684008020",
  appId: "1:834684008020:web:4899972faf07199872dfc1",
});

export const auth = app.auth();
// console.log(auth);
export default app;
