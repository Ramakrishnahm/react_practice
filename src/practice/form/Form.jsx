import "./style.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    if (loginForm.email.length && loginForm.password.length) {
      tryLogin({ ...loginForm });
    }
  };
  const tryLogin = ({ email, password }) => {
    axios
      .post("https://strapi-store-server.onrender.com/api/auth/local", {
        identifier: email,
        password: password,
      })
      .then((res) => {
        setLoginForm({ email: "", password: "" });
      });
  };
  

  return (
    <div className="login-container ">
      <div className="form-container">
        <h2 className="text">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="main">
            <label htmlFor="email" className="form-text">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="main">
            <label htmlFor="exampleInputPassword1" className="form-text">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
