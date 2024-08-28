import React, { useState, useEffect } from 'react';

const Paymentsdone = () => {
  const [payments, setPayments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPayments = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockPayments = [
        { id: 1, amount: "1,50,000", date: '2024-08-01' },
        { id: 2, amount: "1,00,000", date: '2024-08-10' },
        { id: 3, amount: "50,000", date: '2024-08-15' },
        { id: 4, amount: "1,00,000", date: '2024-08-25' },
      ];

      setPayments(mockPayments);
      calculateTotal(mockPayments);
    } catch (err) {
      setError('Failed to fetch payments');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (paymentsArray) => {
    const total = paymentsArray.reduce((sum, payment) => sum + parseInt(payment.amount.replace(/,/g, ''), 10), 0);
    setTotalAmount(total.toLocaleString());
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  if (loading) {
    return (
      <div className="container text-center mt-7">
        <h2>Loading your payment data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-7">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="container mt-7">
      <h1 className="text-center">Total Payments Done</h1>
      <br />
      {payments.length > 0 ? (
        <div>
          <h2 className="text-center">
            YOUR TOTAL PAYMENTS DONE <strong>₹{totalAmount}</strong>
          </h2>
          <div className="mt-4">
            <h4>Payment Details:</h4>
            <ul className="list-group">
              {payments.map((payment) => (
                <li key={payment.id} className="list-group-item">
                  Payment ID: {payment.id} | Amount: ₹{payment.amount} | Date: {payment.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <h2 className="text-center">No payments found</h2>
      )}
    </div>
  );
};

export default Paymentsdone;
