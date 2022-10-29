import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const signIn = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ googleSignIn, createUser, user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
