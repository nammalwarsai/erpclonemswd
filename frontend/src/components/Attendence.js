import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  
  const fetchAttendance = async () => {
    try {
      const response = await fetch('/api/attendance');
      const data = await response.json();
      setAttendanceData(data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: 'green', fontWeight: 'bold' }}>
        Attendance Report
      </h1>
      <Button 
        className="mb-4" 
        variant="primary" 
        onClick={fetchAttendance}
      >
        See Attendance
      </Button>
      <Table bordered hover className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <thead className="table-success">
          <tr>
            <th>Subject</th>
            <th>Attendance (%)</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((subject, index) => (
            <tr key={index}>
              <td style={{ fontWeight: 'bold' }}>{subject.name}</td>
              <td>{subject.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Attendance;
