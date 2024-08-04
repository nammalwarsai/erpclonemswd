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
import Feedbacksection from './components/Feedbacksection';


function App() {
  return (
    <Router>
      <div className="maindiv">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<User name="KURAPATI RAJA SAI NAMMALWAR--2300033899" type="student" />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/myassignments" element={<Assignments/>} />
          <Route path="/myattendence" element={<Attendence/>} />
          <Route path="/feedbacksection" element={<Feedbacksection/>} />

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;