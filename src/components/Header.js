import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ logo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="KL Logo" style={{ width: '150px' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/courses">MY Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faculty">Faculty</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/timetable">My Timetable</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myassignments">My Assignments</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">My Attendence</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">SAC-CLUBS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">ABOUT KLU</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">TULIP HOSTEL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">TRANSOPRATION</Link>
          </li>

        </ul>
      </div>
      <div className="user-info ml-auto">
        <span className="mr-3">ID:2300033899||</span>
        <span>STUDENT OF KLU</span>
      </div>
    </nav>
  );
};

export default Header;
