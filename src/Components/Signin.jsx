import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Feedback states
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Fetching the Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://emmanuelkimani.pythonanywhere.com/api/signin",
        formData
      );

      if (response.data.user) {
        console.log("Res" + response.data.user);
        setSuccess(response.data.Message);
        navigate("/");
      } else {
        setSuccess(response.data.Message);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="card shadow-lg p-4 col-md-6">
        <h2 className="text-center text-primary mb-4">Sign In</h2>

        {/* Success and Error Messages */}
        {loading && <div className="alert alert-info">{loading}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Signin Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control form-control-lg input-style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control form-control-lg input-style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mb-3 submit-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
