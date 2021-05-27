import React from "react";
import { useHistory } from "react-router";
import firebase from "../firebase";

const Login = () => {
  const history = useHistory();
  const HanldeSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .catch((error) => {
          alert(error);
        });
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="mx-auto w-50 p-3 shadow border">
        <h1 className="text-center">Login</h1>
        <form onSubmit={HanldeSubmit} className="m-5">
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" name="password" className="form-control" />
          </div>
          <button className="btn btn-primary btn-block">Log In</button>
          <input
            type="button"
            value="Sign Up"
            onClick={() => history.push("/signup")}
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
