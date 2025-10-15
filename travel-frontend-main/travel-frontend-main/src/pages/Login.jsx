import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/auth/login", form);
      localStorage.setItem("token", res.data);
      localStorage.setItem("username", form.username);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="auth-container travel-theme">
      <div className="auth-box">
        <h2>Login to TravelEase</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username"
                 onChange={(e) => setForm({ ...form, username: e.target.value })} required />
          <input type="password" placeholder="Password"
                 onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <button type="submit">Login</button>
        </form>
        <p>New traveler? <Link to="/signup">Register here</Link></p>
      </div>
    </div>
  );
}
