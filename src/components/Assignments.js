import React, { useState } from 'react';

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Assignment 1',
      subject: 'Advanced Object-Oriented Programming',
      deadline: '2024-08-15'
    },
    {
      id: 2,
      title: 'Assignment 2',
      subject: 'Database Management Systems',
      deadline: '2024-08-20'
    },
    {
      id: 3,
      title: 'Assignment 3',
      subject: 'Artificial Intelligence and Machine Learning',
      deadline: '2024-08-25'
    }
  ]);

  const [showAssignments, setShowAssignments] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    subject: '',
    deadline: ''
  });
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);

  const handleButtonClick = () => {
    setShowAssignments(!showAssignments);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({
      ...newAssignment,
      [name]: value
    });
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    const newId = assignments.length ? assignments[assignments.length - 1].id + 1 : 1;
    setAssignments([
      ...assignments,
      { id: newId, ...newAssignment }
    ]);
    setNewAssignment({
      title: '',
      subject: '',
      deadline: ''
    });
  };

  const handleSelectAssignment = (id) => {
    setSelectedAssignmentId(id);
  };

  const handleRemoveAssignment = () => {
    if (selectedAssignmentId !== null) {
      setAssignments(assignments.filter((assignment) => assignment.id !== selectedAssignmentId));
      setSelectedAssignmentId(null);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    header: {
      color: '#333'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '20px'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    },
    list: {
      marginTop: '20px'
    },
    card: {
      backgroundColor: 'white',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '5px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'left'
    },
    cardHeader: {
      marginTop: '0',
      color: '#007bff'
    },
    cardText: {
      margin: '5px 0'
    },
    form: {
      margin: '20px 0'
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    formButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    removeButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#dc3545',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MY Assignment</h1>
      <button
        style={showAssignments ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onClick={handleButtonClick}
      >
        {showAssignments ? 'Hide Assignments' : 'Show Assignments'}
      </button>
      {showAssignments && (
        <div style={styles.list}>
          <h2>Total Assignments: {assignments.length}</h2>
          {assignments.map((assignment) => (
            <div key={assignment.id} style={styles.card}>
              <input
                type="radio"
                name="selectedAssignment"
                checked={selectedAssignmentId === assignment.id}
                onChange={() => handleSelectAssignment(assignment.id)}
              />
              <h3 style={styles.cardHeader}>{assignment.title}</h3>
              <p style={styles.cardText}><strong>Subject:</strong> {assignment.subject}</p>
              <p style={styles.cardText}><strong>Deadline:</strong> {assignment.deadline}</p>
            </div>
          ))}
          <form style={styles.form} onSubmit={handleAddAssignment}>
            <input
              type="text"
              name="title"
              value={newAssignment.title}
              onChange={handleChange}
              placeholder="Title"
              style={styles.input}
              required
            />
            <input
              type="text"
              name="subject"
              value={newAssignment.subject}
              onChange={handleChange}
              placeholder="Subject"
              style={styles.input}
              required
            />
            <input
              type="date"
              name="deadline"
              value={newAssignment.deadline}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.formButton}>Add Assignment</button>
          </form>
          <button onClick={handleRemoveAssignment} style={styles.removeButton}>Remove Selected Assignment</button>
        </div>
      )}
    </div>
  );
};

export default Assignments;
