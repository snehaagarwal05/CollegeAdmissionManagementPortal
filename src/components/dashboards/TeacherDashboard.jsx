import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h2>Welcome, Teacher!</h2>
      <p>This is your teacher dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}