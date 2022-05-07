import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const userdata = JSON.parse(localStorage.getItem("active_user"));
  useEffect(() => {
    const is_logged = localStorage.getItem("is_logged");
    if (is_logged != "true") {
      history.push("/login");
    }
    if (userdata.type == "admin") {
      history.push("/admin");
    }
  });
  return (
    <div>
      <h1>HELLO {userdata?.first_name}</h1>
    </div>
  );
};

export default Home;
