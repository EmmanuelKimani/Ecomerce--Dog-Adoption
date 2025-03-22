import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Feedback System
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Fetching data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before attempting submission
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      // Posting the data
      const response = await axios.post(
        "https://emmanuelkimani.pythonanywhere.com/api/signup",
        formData
      );
      setLoading(false);
      if (response.data.success) {
        setSuccess("Signup successful! You can now sign in.");
        setUsername("");
        setEmail("");
        setPhone("");
        setPassword("");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg rounded-lg p-4 col-md-6"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center text-primary mb-4">Sign Up</h2>

        {/* Success and Error messages */}
        {loading && <div className="alert alert-info">Connecting...</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control form-control-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control form-control-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="form-control form-control-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mb-3"
            disabled={loading}
            style={{
              background: "linear-gradient(45deg, #ff6347, #ff9c6a)",
              borderColor: "#ff6347",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
