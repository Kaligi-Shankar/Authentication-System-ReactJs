import React from "react";
import LoginForm from "../components/Login";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const handleSubmit = async (params) => {
    let users = JSON.parse(localStorage.getItem("users"));
    let trig_user;
    if (users) {
      users.map((user) => {
        if (user.email === params.email) {
          trig_user = user;
        } else {
          return null;
        }
      });
    }
    console.log(trig_user);
    if (trig_user) {
      if (trig_user.password === params.password) {
        console.log("login success");
        localStorage.setItem("active_user", JSON.stringify(trig_user));
        localStorage.setItem("is_logged", true);
        if (trig_user.type === "admin") {
          history.push("/admin");
        } else {
          history.push("/");
        }
      } else {
        alert("Password is incorrect");
      }
    }
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};

export default Login;
