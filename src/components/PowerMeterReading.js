// src/components/PowerMeterReading.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const PowerMeterReading = () => {
  return (
    <Container className="mt-5">
      <h3>Power Meter Reading</h3>
      <p>Customer Details</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>Mobile No1</th>
            <th>Mobile No2</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7">No results found.</td>
          </tr>
        </tbody>
      </Table>

      <p>Meter Readings</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Reading</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>345 kWh</td>
            <td>Active</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PowerMeterReading;
