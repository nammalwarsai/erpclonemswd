import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Courses from './components/Courses';
import User from './components/User';
import logo from './KLLOGO.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Timetable from './components/Timetable';
import Assignments from './components/Assignments';
import Attendence from './components/Attendence';


function App() {
  return (
    <Router>
      <div className="maindiv">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<User name="Nammalwar Sai" type="student" />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/myassignments" element={<Assignments/>} />
          <Route path="/myattendence" element={<Attendence/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
