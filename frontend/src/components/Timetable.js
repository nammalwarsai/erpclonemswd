import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Fade, Slide } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timetable = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [showForm, setShowForm] = useState(true);

  const handleToggle = () => {
    setShowForm(false);
    setTimeout(() => {
      setIsSignUp((prev) => !prev);
      setFormData({ username: '', password: '', confirmPassword: '' });
      setShowForm(true);
    },100); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(
      `${isSignUp ? 'Sign Up' : 'Sign In'} Successful!\nUsername: ${
        formData.username
      }\nPassword: ${formData.password}`
    );
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ 
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <Box
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          padding: '30px',
          border: '1px solid #4caf50',
          borderRadius: '15px',
          boxShadow: '0px 0px 20px rgba(0, 128, 0, 0.5)',
          background: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '450px',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: 'scale(1)',
        }}
      >
        <Slide in={showForm} direction="up" mountOnEnter unmountOnExit>
          <div style={{ width: '100%' }}>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '15px',
                color: '#2e7d32',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Fade in={true} timeout={800}>
                <TextField
                  label={isSignUp ? 'Username / Email ID' : 'Username'}
                  name="username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'white', borderRadius: '5px', borderColor: '#4caf50' }}
                />
              </Fade>
              <Fade in={true} timeout={1000}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'white', borderRadius: '5px', borderColor: '#4caf50' }}
                />
              </Fade>
              {isSignUp && (
                <Fade in={true} timeout={1200}>
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: 'white', borderRadius: '5px', borderColor: '#4caf50' }}
                  />
                </Fade>
              )}
              <Button
                type="submit"
                variant="contained"
                style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: '#388e3c',
                  color: 'white',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#2e7d32')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#388e3c')
                }
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </form>
            <Button
              variant="text"
              onClick={handleToggle}
              style={{
                marginTop: '10px',
                transition: 'color 0.3s',
                textDecoration: 'underline',
                color: '#388e3c',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#2e7d32')}
              onMouseLeave={(e) => (e.target.style.color = '#388e3c')}
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </Button>
          </div>
        </Slide>
      </Box>
    </Container>
  );
};

export default Timetable;
