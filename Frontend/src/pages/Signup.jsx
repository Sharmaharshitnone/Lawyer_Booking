import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p className="subtitle">Please sign up to book appointment</p>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create password" />
          </div>

          <button className="signup-btn">Create account</button>

          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
