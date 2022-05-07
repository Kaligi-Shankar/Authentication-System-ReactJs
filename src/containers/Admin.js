import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Admin = () => {
  const history = useHistory();
  const users = JSON.parse(localStorage.getItem("users"));
  useEffect(() => {
    const is_logged = localStorage.getItem("is_logged");
    const active_user = JSON.parse(localStorage.getItem("active_user"));
    if (is_logged != "true") {
      history.push("/login");
    } else if (active_user?.type !== "admin") {
      history.push("/login");
      alert("You are not an admin");
    }
  });
  return (
    <div className="col-md-10 mx-auto">
      <h5>Admin Dashboard</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Type</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.type}</td>
              <td>{user.phone_number}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
