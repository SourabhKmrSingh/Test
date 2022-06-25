// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKT7-oFMvAUc3Ut0ttIiv-u9an5CgPEfw",
  authDomain: "zenquip2-345e7.firebaseapp.com",
  projectId: "zenquip2-345e7",
  storageBucket: "zenquip2-345e7.appspot.com",
  messagingSenderId: "160758509744",
  appId: "1:160758509744:web:a4ac0f52fcdefad3e74b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);