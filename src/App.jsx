import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import StudentDashboard from "./components/dashboards/StudentDashboard";
import FacultyReviewerDashboard from "./components/dashboards/FacultyReviewerDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import AdmissionOfficerDashboard from "./components/dashboards/AdmissionOfficerDashboard";
import PaymentPage from "./components/dashboards/PaymentPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Admission from "./components/admission/Admission";
import Faculty from "./components/faculty/Faculty";
import CampusLife from "./components/campus/CampusLife";
import AdmissionPage from "./components/admissionPage/AdmissionPage";
import Department from "./components/department/Department";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NIRF from "./components/nirf/NIRF";
import Footer from "./components/footer/Footer";

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
          path="/facultyReviewer"
          element={
            <ProtectedRoute role="facultyReviewer">
              <FacultyReviewerDashboard />
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
          path="/admissionOfficer"
          element={
            <ProtectedRoute role="admissionOfficer">
              <AdmissionOfficerDashboard />
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
          path="/campus"
          element={
          <CampusLife />
          }
        />
      <Route
        path="/admissionPage"
        element={
          <AdmissionPage />
        }
      />

      <Route path="/department" element={<Department />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/footer" element={<Footer />} />
        
        <Route
          path="/nirf"
          element={
            <NIRF />
          }
        />
        
     </Routes>
    </Router>
  );
}

export default App;

