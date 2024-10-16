// src/components/HostelRoomInfo.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const HostelRoomInfo = () => {
  return (
    <Container className="mt-5">
      <h3>My Hostel Room Information</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Campus</th>
            <th>Student Rollno</th>
            <th>Student Name</th>
            <th>Building Name</th>
            <th>Floor No</th>
            <th>Room Name</th>
            <th>Academic Year</th>
            <th>Semester</th>
            <th>Bed ID</th>
            <th>Registered By</th>
            <th>Registered On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>KLVZA</td>
            <td>2300033899</td>
            <td>KURAPATI RAJA SAI NAMMALWAR</td>
            <td>TULIP</td>
            <td>6</td>
            <td>NSQ636C</td>
            <td>2023-2024</td>
            <td>Odd Sem</td>
            <td>2</td>
            <td>2300033899</td>
            <td>2023-09-29 23:19:20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>KLVZA</td>
            <td>2300033899</td>
            <td>KURAPATI RAJA SAI NAMMALWAR</td>
            <td>TULIP</td>
            <td>6</td>
            <td>NSQ636C</td>
            <td>2024-2025</td>
            <td>Odd Sem</td>
            <td>1</td>
            <td>2300033899</td>
            <td>2024-07-14 14:44:55</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default HostelRoomInfo;
