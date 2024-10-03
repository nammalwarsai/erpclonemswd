// src/components/HostelInfo.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const HostelInfo = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <HomeIcon style={{ fontSize: '100px', color: '#0d6efd' }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Hostel Information
          </Typography>
          <Typography variant="body1">
            Welcome to the hostel management portal. Here you can find information about the hostel facilities, rules, and regulations.
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default HostelInfo;
