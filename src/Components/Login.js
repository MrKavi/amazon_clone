import React, { useState } from "react";
import "./Login.css";
import Amazon_logo from "../images/Amazon_logo.svg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="logo" src={Amazon_logo} alt="" />
      </Link>
      <div className="login_compo">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Sign in</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} className="sign" type="submit">
            Sign In
          </button>
        </form>
        <p>
          this is amazon official site and by sign in you are accepting our term
          and conditions....Thank you!
        </p>
        <button onClick={register} className="register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
