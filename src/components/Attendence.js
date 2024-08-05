import React from 'react';

const Attendence = ({ hours, attendancePercentage }) => {
  return (
    <div>
      <h1 className='h1main'>YOU CAN CHECK YOUR SUBJECT ATTENDENCE HERE</h1>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">COURSE NAME</th>
      <th scope="col">TOTAL ATTENDENCE(INCLUDING ALL COMPONENTS)</th>
      
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <th scope="row">AOOP-E</th>
      <td>95%</td>
    </tr>
    <tr>
      <th scope="row">DBMS-R</th>
      <td>97%</td>
     
    </tr>
    <tr class="table-primary">
      <th scope="row">MSWD</th>
      <td>100%</td>
     
    </tr>
    <tr class="table-secondary">
      <th scope="row">AIML-O</th>
      <td>95%</td>
      
    </tr>
    <tr class="table-success">
      <th scope="row">LAA-E</th>
      <td>93%</td>
     
    </tr>
   
  </tbody>
</table>
    </div>
  );
};

export default Attendence;
