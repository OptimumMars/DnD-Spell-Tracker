import React from "react";
import { logout } from "../../services/auth";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(sessionActions.logout());
    history.push("/")
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
