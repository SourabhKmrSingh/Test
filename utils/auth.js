import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useRecoilState } from "recoil";
// import {  onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";
import { loggedState } from "./reoil-atoms";

export function useAuthentication() {
  const [user, setUser] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(loggedState);

 
  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setIsLogin(true)
      } else {
        // User is signed out
        setUser("");
        setIsLogin(false)

      }
    });

    return unsubscribeFromAuthStatuChanged();
  }, []);

  return user;
}
