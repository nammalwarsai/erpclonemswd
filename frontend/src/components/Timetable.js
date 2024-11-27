import React from 'react';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timetable = () => {
  const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5'];
  const subjects = ['Maths', 'Physics', 'Biology', 'Computer Science', 'English'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Generate random classroom numbers for each subject
  const generateClassrooms = () =>
    Array.from({ length: subjects.length }, () => Math.floor(Math.random() * 100) + 1);

  // Timetable with classroom numbers
  const timetable = days.map((day) => ({
    day,
    schedule: subjects.map((subject, index) => ({
      subject,
      classroom: generateClassrooms()[index],
    })),
  }));

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4" style={{ color: '#2e7d32' }}>
        Weekly Timetable
      </h1>
      <Table bordered hover className="text-center">
        <thead className="table-success">
          <tr>
            <th>Day</th>
            {periods.map((period, index) => (
              <th key={index}>{period}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((daySchedule, index) => (
            <tr key={index}>
              <td style={{ fontWeight: 'bold' }}>{daySchedule.day}</td>
              {daySchedule.schedule.map((entry, idx) => (
                <td key={idx}>
                  <div>{entry.subject}</div>
                  <small>Classroom: {entry.classroom}</small>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Timetable;
