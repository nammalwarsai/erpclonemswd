import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faCalendarAlt, faTasks, faCheckSquare, faCommentDots, faCreditCard } from '@fortawesome/free-solid-svg-icons'; 

const Header = ({ logo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://www.kluniversity.in/">
        <img src={logo} alt="KL Logo" style={{ width: '150px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/courses">
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              MY Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faculty">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Faculty
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/timetable">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              My Timetable
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/myattendence">
              <FontAwesomeIcon icon={faCheckSquare} className="mr-2" />
              My Attendence
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feedbacksection">
              <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
              Feedback Section
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Paymentsection">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
              PAYMENT SECTION
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/MERNTASK">
            <FontAwesomeIcon icon={faCheckSquare} className="mr-2" />
            MARK-Attendance
            </Link>
          </li>
          
        </ul>
        <div className="nav-item">
          <strong>
          <span className="mr-lg-3">ID:2300033899 ||</span>
          <span>STUDENT OF KLU</span>
          </strong>
        </div>
      </div>
    </nav>
  );
};

export default Header;
