import React, { useState } from 'react';
const MERNTASK = () => {
  const [presentCounter, setPresentCounter] = useState(0);
  const students = [
    { id: '2300032191', name: 'Naidu Basudev', branch: 'CSE', year: '2nd Year', attendance: 'Present' },
    { id: '2300031724', name: 'Swayam Sreetam Swain', branch: 'CSE', year: '2nd Year', attendance: 'Present' },
    { id: '2300032306', name: 'Jatin Paridaal', branch: 'CSE', year: '2nd Year', attendance: 'Present' },
    { id: '2300031514', name: 'Suraj Patra', branch: 'CSE', year: '2nd Year', attendance: 'Present' },
    { id: '2300031724', name: 'Abhinandan', branch: 'CSE', year: '2nd Year', attendance: 'Present' },
    { id: '2300032190', name: 'B Ashok', branch: 'CSE', year: '2nd Year', attendance: 'Present' },
  ];
  const handleMarkPresent = () => {
    if (presentCounter < students.length) {
      setPresentCounter(presentCounter + 1);
    }
  };
  const handleMarkAbsent = () => {
    if (presentCounter > 0) {
      setPresentCounter(presentCounter - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Attendance REGISTER</h1>
      <h2 className="text-center mb-4">Mark the Attendance</h2>
      <h3 className="text-center mb-4">TOTAL Present : {presentCounter}</h3>
      <div className="row">
        {students.map((student, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card border-${student.attendance === 'Present' ? 'success' : 'danger'} mb-3`} style={{ maxWidth: '20rem' }}>
              <div className="card-header">STUDENT DETAILS</div>
              <div className="card-header"></div>
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text"><strong>Student ID:</strong> {student.id}</p>
                <p className="card-text"><strong>Branch:</strong> {student.branch}</p>
                <p className="card-text"><strong>Year:</strong> {student.year}</p>
                <p className="card-text"><strong>Attendance:</strong>
                  <span className={`badge ${student.attendance === 'Present' ? 'badge-success' : 'badge-danger'}`}>
                    {student.attendance}
                  </span>
                </p>
                <button type="button" className="btn btn-outline-success" onClick={handleMarkPresent}>Mark Present</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleMarkAbsent}>Mark Absent</button>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default MERNTASK;
