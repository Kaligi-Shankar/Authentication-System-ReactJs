import React, { useState } from "react";

const LoginForm = (props) => {
  const [formdata, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(formdata);
  };

  const ChangeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-md-6 card mx-auto mt-5 reg_form">
      <h5>Login</h5>
      <form
        class="row mt-3 col-md-10 mx-auto p-3"
        onChange={ChangeHandler}
        onSubmit={handleSubmit}
      >
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              name="email"
              class="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              name="password"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="remember"
                id="gridCheck1"
                checked
              />
              <label class="form-check-label" for="gridCheck1">
                Stay logged in
              </label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
