import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaHistory, FaFileInvoiceDollar } from 'react-icons/fa';

const Paymentsection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: 'Payments Done',
      icon: <FaHistory size={40} />,
      path: '/Paymentsection/Paymentsdone',
      color: '#4CAF50'
    },
    {
      title: 'Pay Fee',
      icon: <FaMoneyBillWave size={40} />,
      path: '/Paymentsection/PayFee',
      color: '#2196F3'
    },
    {
      title: 'Fee Structure',
      icon: <FaFileInvoiceDollar size={40} />,
      path: '/Paymentsection/MySemFeeStructure',
      color: '#FF9800'
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{
        fontSize: '2.5rem',
        color: '#1a237e',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>Payment Portal</h1>
      
      <div className="row justify-content-center g-4">
        {cards.map((card, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <Link to={card.path} className="text-decoration-none">
              <div
                className="card h-100"
                style={{
                  transform: activeCard === index ? 'translateY(-10px)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-body text-center p-4">
                  <div style={{ color: card.color }}>{card.icon}</div>
                  <h3 className="card-title mt-3" style={{ color: '#333' }}>{card.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paymentsection;
