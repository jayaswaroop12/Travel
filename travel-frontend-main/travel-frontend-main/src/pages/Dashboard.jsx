import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uname = localStorage.getItem("username");
    if (!token) navigate("/");
    else setUsername(uname);
  }, []);

  return (
    <div className="dashboard-grid">
      <header className="header">✈️ Welcome to TravelEase Dashboard</header>
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li>Destinations</li>
          <li>Bookings</li>
          <li>Customers</li>
          <li>Payments</li>
          <li>Reports</li>
        </ul>
      </aside>
      <main className="content">
        <h2>Hello, {username}</h2>
        <p>Manage tours, bookings, and payments in one place.</p>
        <div className="cards">
          <div className="card">🌍 Available Tours : 12</div>
          <div className="card">🧳 Active Bookings : 34</div>
          <div className="card">👥 Customers : 250</div>
          <div className="card">💰 Revenue : ₹7.4 L</div>
        </div>
      </main>
    </div>
  );
}
