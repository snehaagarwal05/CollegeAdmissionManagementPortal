import React from "react";
import "./Faculty.css";

const facultyData = [
  {
    name: "Dr. Ananya Sharma",
    dept: "Computer Science",
    qualifications: "PhD, M.Tech",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Prof. Rohan Gupta",
    dept: "Mechanical Engineering",
    qualifications: "M.Tech, B.Tech",
    photo: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Dr. Priya Mehta",
    dept: "Mathematics",
    qualifications: "PhD, M.Sc",
    photo: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    name: "Prof. Arjun Verma",
    dept: "Electronics & Communication",
    qualifications: "M.Tech",
    photo: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    name: "Dr. Kavita Rao",
    dept: "Physics",
    qualifications: "PhD",
    photo: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    name: "Prof. Siddharth Sen",
    dept: "Civil Engineering",
    qualifications: "M.Tech",
    photo: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

export default function Faculty() {
  return (
    <div className="faculty-page">
      <h1 className="faculty-title">Our Faculty</h1>

      <div className="faculty-grid">
        {facultyData.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
            <h3 className="faculty-name">{faculty.name}</h3>
            <p className="faculty-dept">{faculty.dept}</p>
            <p className="faculty-qual">{faculty.qualifications}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
