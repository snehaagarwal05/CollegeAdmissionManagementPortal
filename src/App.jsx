import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import StudentDashboard from "./components/dashboards/StudentDashboard";
import TeacherDashboard from "./components/dashboards/TeacherDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import PaymentPage from "./components/dashboards/PaymentPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Admission from "./components/admission/Admission";
import Faculty from "./components/faculty/Faculty";
import CampusLife from "./components/campus/CampusLife";

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admission" element={<Admission />} />
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute role="student">
              <PaymentPage />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/faculty" 
          element={
            <Faculty />
          }
        />
        <Route
          path="/campus-life"
          element={
          <CampusLife />
          }
        />
     </Routes>
    </Router>
  );
}

export default App;

