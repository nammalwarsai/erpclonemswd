import React, { useState } from 'react';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() === '') {
      setError('Feedback cannot be empty');
      setMessage('');
      return;
    }

    // Simulate an API call or other submission logic
    setTimeout(() => {
      setMessage('Your feedback was submitted successfully');
      setFeedback('');
      setError('');

      // Clear the message after a delay
      setTimeout(() => setMessage(''), 3000);
    }, 500);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Give Your Feedback Here</h1>
      <div style={styles.feedbackSection}>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="feedbackTextarea" style={styles.formLabel}>
              Type Your Feedback
            </label>
            <textarea
              style={styles.textarea}
              id="feedbackTextarea"
              rows="5"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              aria-describedby="feedbackHelp"
              aria-required="true"
            ></textarea>
          </div>
          {error && <div style={styles.error}>{error}</div>}
          {message && <div style={styles.success}>{message}</div>}
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'red',
    fontSize: '24px',
  },
  feedbackSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
    ':focus': {
      borderColor: '#007bff',
    },
  },
  error: {
    color: '#ff4d4f',
    marginBottom: '10px',
  },
  success: {
    color: '#52c41a',
    marginBottom: '10px',
  },
  submitButton: {
    width: '50%',
    padding: '5px',
    backgroundColor: 'red',
    color: 'yellow',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: 'green',
    },
  },
};

export default FeedbackSection;
