import React, { useState } from 'react';

const FeedbackSection = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');
  const [remarks, setRemarks] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = () => {
    if (courseName && instructorName && communicationSkills) {
      const newFeedback = {
        courseName,
        instructorName,
        communicationSkills,
        remarks,
      };

      // Add the new feedback to the list of feedbacks
      setFeedbacks([...feedbacks, newFeedback]);

      // Clear the form
      setCourseName('');
      setInstructorName('');
      setCommunicationSkills('');
      setRemarks('');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100vh',
      }}
    >
      <h1>This is a Feedback Section</h1>
      <h2>PROVIDE YOUR Feedback [2300033899]</h2>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="10"
        style={{
          margin: 'auto',
          width: '80%',
          borderCollapse: 'collapse',
        }}
      >
        <tbody>
          <tr>
            <td>NAME OF THE COURSE</td>
            <td>
              <textarea
                rows="3"
                cols="30"
                placeholder="Enter course name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>NAME OF THE INSTRUCTOR</td>
            <td>
              <textarea
                rows="3"
                cols="30"
                placeholder="Enter instructor name"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>COMMUNICATION SKILLS</td>
            <td>
              <select
                value={communicationSkills}
                onChange={(e) => setCommunicationSkills(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
                <option value="Very Bad">Very Bad</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>REMARKS</td>
            <td>
              <textarea
                rows="5"
                cols="30"
                placeholder="Enter any additional remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleSubmit} style={{ color: 'black', backgroundColor: 'yellow' }}>
                Submit Feedback
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {feedbacks.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Received Feedbacks</h2>
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ margin: '0 auto' }}
          >
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Instructor Name</th>
                <th>Communication Skills</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.courseName}</td>
                  <td>{feedback.instructorName}</td>
                  <td>{feedback.communicationSkills}</td>
                  <td>{feedback.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;
