import React from 'react';

const Attendence = ({ hours, attendancePercentage }) => {
  return (
    <div>
      <div className="alert alert-dismissible alert-success">
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <a href="https://newerp.kluniversity.in/index.php?r=studentattendance%2Fstudentdailyattendance%2Fcourselist" className="alert-link">
          Click here to check your Attendance
        </a>
      </div>
    </div>
  );
};

export default Attendence;
