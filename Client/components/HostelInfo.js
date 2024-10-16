// src/components/HostelInfo.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const HostelInfo = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <HomeIcon style={{ fontSize: '100px', color: '#0d6efd' }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Hostel Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore details related to your hostel, apply for out passes, and check your power meter reading.
          </Typography>

          {/* Buttons for navigating to different sections */}
          <Row className="mt-4">
            <Col>
              <Link to="/hostelroominfo">
                <Button variant="warning" className="mb-3">
                  My Hostel Room Info
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/applyoutpass">
                <Button variant="warning" className="mb-3">
                  Apply Out Pass
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/powermeterreading">
                <Button variant="warning" className="mb-3">
                  Power Meter Reading
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HostelInfo;
