import React, { useState } from "react";
import axios from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", { email, password });

      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Server error or network issue");
      }
      console.error(error);
    }
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:3000/auth/${provider}`;
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Login
      </button>

      <div style={styles.socialLogin}>
        <p>Or login with</p>
        <button
          type="button"
          onClick={() => handleOAuthLogin("google")}
          style={{ ...styles.oauthBtn, backgroundColor: "#db4437" }}
        >
          <FaGoogle style={styles.icon} /> Google
        </button>
        <button
          type="button"
          onClick={() => handleOAuthLogin("github")}
          style={{ ...styles.oauthBtn, backgroundColor: "#333" }}
        >
          <FaGithub style={styles.icon} /> GitHub
        </button>
      </div>

      <div style={styles.linkContainer}>
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          style={{
            ...styles.linkActionBtn,
            backgroundColor: "#ffe0e0",
            color: "#d32f2f",
          }}
        >
          Forgot Password?
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          style={{
            ...styles.linkActionBtn,
            backgroundColor: "#e0f7fa",
            color: "#00796b",
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    padding: 0,
    fontSize: "0.9rem",
    textDecoration: "underline",
  },
  socialLogin: {
    marginTop: "1.5rem",
    marginBottom: "1rem",
  },
  oauthBtn: {
    width: "100%",
    padding: "0.6rem",
    margin: "0.5rem 0",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "0.95rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
  },
  icon: {
    fontSize: "1.2rem",
  },
  linkContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },

  linkActionBtn: {
    flex: 1,
    padding: "0.6rem",
    fontSize: "0.95rem",
    fontWeight: "500",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
