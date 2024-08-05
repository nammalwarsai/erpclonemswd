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
import Attendence from './components/Attendence';
import Feedbacksection from './components/Feedbacksection';
import Paymentsection from './components/Paymentsection';
import Paymentsdone from './components/Paymentsdone';
import MySemFeeStructure from './components/MySemFeeStructure'; // Import your components
import PayFee from './components/PayFee';

function App() {
  return (
    <Router>
      <div className="maindiv">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<User name="KURAPATI RAJA SAI NAMMALWAR--2300033899" type="student" />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/myattendence" element={<Attendence />} />
          <Route path="/feedbacksection" element={<Feedbacksection />} />
          <Route path="/Paymentsection" element={<Paymentsection />} />
          <Route path="/Paymentsection/Paymentsdone" element={<Paymentsdone />} />
          <Route path="/Paymentsection/MySemFeeStructure" element={<MySemFeeStructure />} />
          <Route path="/Paymentsection/PayFee" element={<PayFee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
