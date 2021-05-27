import React, { createContext, useState, useEffect } from "react";
import firebase from "./firebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(false);
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
