import React, { useState, useEffect } from "react";

const RegistrationForm = (props) => {
  const [formdata, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    type: "",
    number: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (
      formdata.confirm_password &&
      formdata.password !== formdata.confirm_password
    ) {
      setErrors({ ...errors, mismatch: true });
    } else {
      setErrors({ ...errors, mismatch: false });
    }
  }, [formdata]);

  const checkform = () => {
    let errors = {};
    let error = false;
    if (formdata.first_name === "") {
      errors.first_name = true;
      error = true;
    }
    if (formdata.last_name === "") {
      errors.last_name = true;
      error = true;
    }
    if (formdata.email === "") {
      errors.email = true;
      error = true;
    }
    if (formdata.password === "") {
      errors.password = true;
      error = true;
    }
    if (formdata.type === "") {
      errors.type = true;
      error = true;
    }
    if (formdata.phone_number === "") {
      errors.phone_number = true;
      error = true;
    }
    if (formdata.confirm_password === "") {
      errors.confirm_password = true;
      error = true;
    }
    if (formdata.password !== formdata.confirm_password) {
      error = true;
    }
    setErrors(errors);
    return error;
  };

  const ChangeHandler = (e) => {
    const phone_validator = /^[0-9\b]+$/;
    if (e.target.name == "phone_number") {
      if (phone_validator.test(e.target.value)) {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
      }
    } else {
      setFormData({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let check = await checkform();
    if (!check) {
      props.handleSubmit(formdata);
    }
  };
  return (
    <div className="col-md-10 card mx-auto mt-5 reg_form">
      <h5 className="mt-2">Registration Form</h5>
      <form
        class="row g-3 col-md-10 mx-auto p-3"
        onChange={ChangeHandler}
        onSubmit={submitHandler}
      >
        <div class="col-md-6">
          <label for="first_name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class={`form-control ${errors?.first_name && "is-invalid"}`}
            id="first_name"
            name="first_name"
            placeholder="Enter your first name"
          />
          <div id="first_name" class="invalid-feedback">
            Please provide first name.
          </div>
        </div>
        <div class="col-md-6">
          <label for="last_name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class={`form-control ${errors?.last_name && "is-invalid"}`}
            id="last_name"
            name="last_name"
            placeholder="Enter your last name"
          />
          <div id="last_name" class="invalid-feedback">
            Please provide last name.
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Type
          </label>
          <select id="inputState" class="form-select" name="type">
            <option selected>Choose...</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <div id="inputState" class="invalid-feedback">
            Please provide type.
          </div>
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class={`form-control ${errors?.email && "is-invalid"}`}
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <div id="email" class="invalid-feedback">
            Please provide email.
          </div>
        </div>
        <div class="col-md-12">
          <label for="phone_number" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            class={`form-control ${errors?.phone_number && "is-invalid"}`}
            id="phone_number"
            name="phone_number"
            value={formdata?.phone_number}
            placeholder="Enter your phone number"
            maxLength={10}
          />
          <div id="phone_number" class="invalid-feedback">
            Please provide number.
          </div>
        </div>
        <div class="col-md-6">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class={`form-control ${errors?.password && "is-invalid"}`}
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <div id="password" class="invalid-feedback">
            Please provide password.
          </div>
        </div>
        <div class="col-md-6">
          <label for="confirm_password" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class={`form-control ${errors?.confirm_password && "is-invalid"}`}
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm password"
          />
          <div id="confirm_password" class="invalid-feedback">
            Please provide confirm password.
          </div>
        </div>
        {errors.mismatch && (
          <p className="text-danger">Passwords didnt match</p>
        )}
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
