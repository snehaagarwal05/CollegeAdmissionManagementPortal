import React from "react";
import "./Admission.css";

export default function Admission() {
  const courses = [
    {
      name: "B.Tech (Computer Science)",
      eligibility: "12th Pass with PCM (Minimum 60%)",
      duration: "4 Years",
      fees: "₹1,20,000 / year",
    },
    {
      name: "BBA (Bachelor of Business Administration)",
      eligibility: "12th Pass (Minimum 55%)",
      duration: "3 Years",
      fees: "₹80,000 / year",
    },
    {
      name: "MBA (Master of Business Administration)",
      eligibility: "Graduation with minimum 60%",
      duration: "2 Years",
      fees: "₹1,50,000 / year",
    },
  ];

  const recruiters = [
    { name: "TCS", package: "₹7 LPA" },
    { name: "Infosys", package: "₹6 LPA" },
    { name: "Google", package: "₹30 LPA" },
    { name: "Deloitte", package: "₹10 LPA" },
  ];

  return (
    <div className="admission-page">
      <div className="left-section">
        <h2>Courses Offered</h2>
        <div className="cards">
          {courses.map((course, index) => (
            <div className="card" key={index}>
              <h3>{course.name}</h3>
              <p><strong>Eligibility:</strong> {course.eligibility}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Fees:</strong> {course.fees}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <h2>Top Recruiters</h2>
        <div className="cards">
          {recruiters.map((rec, index) => (
            <div className="card recruiter-card" key={index}>
              <h3>{rec.name}</h3>
              <p><strong>Package Offered:</strong> {rec.package}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="apply-btn">Apply for Admission</button>
    </div>
  );
}
