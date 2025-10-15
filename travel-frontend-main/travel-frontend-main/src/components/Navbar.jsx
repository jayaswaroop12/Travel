import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <h1>🌴 KL TravelEase</h1>
      <ul>
        {!isLoggedIn && (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}
