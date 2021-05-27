import React from "react";
import { useHistory } from "react-router";
import firebase from "../firebase";

const Sigup = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="mx-auto w-50 p-3 border shadow">
        <h1 className="text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="m-5">
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" name="password" className="form-control" />
          </div>
          <button className="btn btn-primary btn-block">Sign Up</button>
          <input
            type="button"
            value="Log In"
            onClick={() => history.push("/login")}
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Sigup;
