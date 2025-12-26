import React, { useEffect, useState } from "react";
import data from "../assets/data.js";
function LoginForm() {
  const [userError, setUserError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let formData = new FormData(e.target);
      let email = formData.get("email");
      let user = data.find((user) => user.email === email);
      if (!user) {
        throw new Error("User not found");
      }
      let pass = formData.get("password");

      if (user.password !== pass) {
        throw new Error("Password Incorrect");
      }

      setTimeout(() => {
        console.log(user);
      }, 3000);
    } catch (error) {
      setUserError(error.message);
    }
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" id="input-email" name="email" />
        <br />
        {userError === "User not found" ? (
          <p id="user-error">User not found</p>
        ) : (
          ""
        )}
        <input
          type="password"
          placeholder="Password"
          id="input-password"
          name="password"
        />
        <br />
        {userError === "Password Incorrect" ? (
          <p id="password-error">Password Incorrect </p>
        ) : (
          ""
        )}
        <button type="submit" id="submit-form-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
