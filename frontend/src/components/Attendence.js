import React from 'react';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Attendance = () => {
  const subjects = [
    { name: 'Physics', attendance: 92 },
    { name: 'maths', attendance: 85 },
    { name: 'chemistry', attendance: 88 },
    { name: 'Computer Science', attendance: 94 },
    { name: 'chess', attendance: 79 },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: 'green', fontWeight: 'bold' }}>
        Attendance Report
      </h1>
      <Table bordered hover className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <thead className="table-success">
          <tr>
            <th>Subject</th>
            <th>Attendance (%)</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
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
