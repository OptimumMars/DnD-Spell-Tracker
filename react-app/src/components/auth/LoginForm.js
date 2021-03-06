import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.session.user)

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.login(email, password));
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.login('demo@aa.io', 'password'));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (currentUser) {
    return <Redirect to="/characters" />;
  }

  return (
    <div className="parchment_paper">
      <div className="login_form">
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button type="submit">Login</button>
          </div>
        </form>
        <form onSubmit={demoLogin}>
          <label>Click here to demo the site without an account!</label>
          <button type="submit">Demo User</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
