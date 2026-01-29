import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [state, setState] = useState("User");

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>{state} Login</h2>
        <p className="subtitle">Please login to continue</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button className="login-btn">Login</button>

          <div className="role-selector">
            <p>Login as: </p>
            <div className="roles">
              <span
                className={state === "User" ? "active-role" : ""}
                onClick={() => setState("User")}
              >
                User
              </span>
              <span
                className={state === "Lawyer" ? "active-role" : ""}
                onClick={() => setState("Lawyer")}
              >
                Lawyer
              </span>
              <span
                className={state === "Admin" ? "active-role" : ""}
                onClick={() => setState("Admin")}
              >
                Admin
              </span>
            </div>
          </div>

          <p className="signup-link">
            Don't have an account?{" "}
            <Link to="/signup">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
