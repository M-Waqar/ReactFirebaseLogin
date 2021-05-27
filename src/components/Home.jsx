import React from "react";
import firebase from "../firebase";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => firebase.auth().signOut()}
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
