import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";



const Home = () => {
   const navigate = useNavigate();
  

  return (
    <div className="home">
      <section className="intro">
        <h2>Technology Institute of Engineering, Kolkata, West Bengal</h2>
        <h3>About Institute of Engineering & Management Trust</h3>
        <p>
          The TIE group is an acclaimed educational group amongst the
          industry-centred academic training organisations of today. TIE has set
          sublime standards in addressing the technical and managerial resource
          shortage in the new era of dynamic globalisation. The TIE group has
          risen to fame for its strong foundation in teaching and R&D in
          multifaceted areas. It aims to serve the future generation as well as
          the Nation through its commitment towards self sufficiency and
          unmatchable excellence. TIE is one of the top-ranked engineering
          colleges in Kolkata and Eastern India which provides the best
          engineering course with 100% job assistance.
        </p>
      </section>

      <section className="why-iem">
        <h2>Why TIE?</h2>
        <ul>
          <li>
            TIE Kolkata can proudly state that every year students of the
            institute perform brilliantly in semester exams and several are
            declared University toppers.
          </li>
          <li>
            All eligible departments are NBA accredited (CSE, IT, ECE, MBA, EE).
          </li>
          <li>
            Approximately 100% placement of engineering and management students.
          </li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>
            TIE has been <b>ranked ‘A’ Category by NAAC</b> (National Assessment
            and Accreditation Council)
          </li>
          <li>
            TIE has won the title of <b>“Gold of the East”</b> by Telgraph
          </li>
          <li>
            TIE has ranked the <b>3rd best engineering college in West Bengal</b>{" "}
            after IIT Kharagpur and NIT Durgapur by NIRF
          </li>
          <li>
            TIE has won the title of <b>“Picture Perfect”</b> by ABP Group
          </li>
          <li>
            Achieved the <b>best institute of India in Star News Award</b>
          </li>
        </ul>
      </section>

      <section className="recognition-benefits">
        <div className="card">
          <h2>🏅 Recognition</h2>
          <ul>
            <li><b>AICTE</b> Approved Courses</li>
            <li>
              <b>ICRA</b> assigned “EG2+ WB” and “EB3+ IN” grades for the
              institute.
            </li>
            <li>
              Affiliated to <b>University of Engineering and Management Kolkata</b>
            </li>
            <li>
              Awarded <b>Grade – A with score 3.25</b> by NAAC
            </li>
            <li>NBA Accredited Courses</li>
          </ul>
        </div>

        <div className="card">
          <h2>🎓 Student Benefits</h2>
          <ul>
            <li>Separate Boys & Girls Hostel Facility</li>
            <li>Medical Unit for free Health Checkups</li>
            <li>Free Vaccination & Bus Services</li>
            <li>AC Canteen</li>
            <li>
              <b>Mediclaim Policy for sum assured of Rs. 50,000 per student</b>
            </li>
            <li>5 Country Study Abroad Program</li>
            <li>Scholarships</li>
          </ul>
        </div>
      </section>

      <section className="courses">
        <h2>Top Ranked Engineering College in Kolkata, Eastern India</h2>
        <div className="card">
          <h2>📘 Courses</h2>
          <div className="course-grid">
            <div>
              <h3>B.Tech</h3>
              <ul>
                <li>Computer Science & Engineering</li>
                <li>Artificial Intelligence & ML</li>
                <li>IoT and Cyber Security</li>
              </ul>
            </div>
            <div>
              <h3>M.Tech</h3>
              <ul>
                <li>Computer Science & Engineering</li>
                <li>Electronics and Communications</li>
              </ul>
            </div>
            <div>
              <h3>Management</h3>
              <ul>
                <li>MBA (General/Business Analytics)</li>
                <li>BBA</li>
              </ul>
            </div>
            <div>
              <h3>Computer Application</h3>
              <ul>
                <li>MCA</li>
                <li>BCA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="extra-info">
        <div className="card">
          <h2>🌍 Placements</h2>
          <ul>
            <li>Placement legacy of 30 years</li>
            <li>Average 1–2 job offers per student</li>
            <li>
              In 2021, 463 students got at least one job offer; some got up to 6
              offers.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>💼 Internships</h2>
          <ul>
            <li>Minimum 3 internships during course</li>
            <li>Top companies: NTPC, WBSETCL, NF Railway, etc.</li>
          </ul>
        </div>

        <div className="card">
          <h2>🧪 Laboratories</h2>
          <ul>
            <li>Each department has its own labs</li>
            <li>Innovation Research Center (IEDC)</li>
            <li>AI+ML, AR-VR, Data Science Labs</li>
          </ul>
        </div>

        <div className="card">
          <h2>📚 24x7x365 Digital Library</h2>
          <ul>
            <li>Open all year round</li>
            <li>4306 titles, 20,235 journals</li>
            <li>IEEE, EBSCO, and other major databases</li>
          </ul>
        </div>
        <div className="card">
          <h2> Foreign Collaborations </h2>
          <ul>
            <li>TIE has signed a MOU with Harvard Business School (HBS) for delivering HBS study material, content, programs and courses
            </li>
            <li>Around 20 students go to USA/Europe/Canada and 30+ in IISC, IIT, IIMS for higher study progression.</li>
            <li>In USA, Canada, Singapore, Europe, Australia, Malaysia study tours and industrial visits are organized for the students.</li>
          </ul>
        </div>
        
    
      </section>
      <button
      className="sticky-login-btn"
      onClick={() => navigate("/login")}
      >
        Login
      </button>
   
    </div>
  );
};

export default Home;
