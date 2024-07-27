import React from 'react';

// Updated Attendence component to receive props
const Attendence = ({ hours, attendancePercentage }) => {
  return (
    <div>
      <div className="alert alert-dismissible alert-success">
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <p>
          Total hours attendend <strong>{hours}25</strong><br />
          Attendance Percentage: <strong>{attendancePercentage}85%</strong>
        </p>
        <a href="https://newerp.kluniversity.in/index.php?r=studentattendance%2Fstudentdailyattendance%2Fcourselist" className="alert-link">
          Click here to check your Attendance
        </a>
      </div>
    </div>
  );
};

export default Attendence;
