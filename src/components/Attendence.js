import React from 'react';

// Updated Attendence component to receive props
const Attendence = ({ hours, attendancePercentage }) => {
  return (
    <div>
      <h2>Attendance Information</h2>
      <p><strong>Teaching Hours:</strong> {hours}</p>
      <p><strong>Attendance Percentage:</strong> {attendancePercentage}%</p>
    </div>
  );
};

export default Attendence;
