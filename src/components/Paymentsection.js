import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Paymentsection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const headingStyle = {
    color: isHovered ? 'green' : 'red',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '3rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    lineHeight: '1.3',
    textShadow: isHovered ? '2px 20px 60px rgba(0, 0, 0, 0.3)' : '2px 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    borderRadius: '5px',
    backgroundColor: isHovered ? '#d9534f' : 'blue',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease', 
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <div className="container text-center mt-5">
      <h1
        style={headingStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        WELCOME TO KL UNIVERSITY PAYMENT SECTION
      </h1>
      <div className="d-flex flex-column align-items-center mt-4">
        <Link to="/Paymentsection/Paymentsdone" className="btn btn-primary mb-3">
          Payments Done
        </Link>
        <Link to="/Paymentsection/MySemFeeStructure" className="btn btn-secondary mb-3">
          My Sem Fee Structure
        </Link>
        <Link to="/Paymentsection/PayFee" className="btn btn-success mb-3">
          Pay Fee
        </Link>
      </div>
    </div>
  );
};

export default Paymentsection;
