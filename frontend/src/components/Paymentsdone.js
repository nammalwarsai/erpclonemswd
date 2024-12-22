import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilePdf } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Paymentsdone = () => {
  const [payments, setPayments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

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

  const filteredPayments = payments.filter(payment =>
    payment.date.includes(searchTerm) || 
    payment.amount.includes(searchTerm)
  );

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    return sortOrder === 'desc' 
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add title to the PDF
    doc.setFontSize(20);
    doc.text('Payment History Report', 14, 15);
    doc.setFontSize(12);
    doc.text(`Total Amount Paid: ₹${totalAmount}`, 14, 25);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 35);

    // Prepare the data for the table
    const tableData = sortedPayments.map(payment => [
      `#${payment.id}`,
      `₹${payment.amount}`,
      new Date(payment.date).toLocaleDateString(),
      'Completed'
    ]);

    // Add the table to the PDF
    doc.autoTable({
      startY: 40,
      head: [['Payment ID', 'Amount', 'Date', 'Status']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [33, 150, 243] },
      styles: { fontSize: 10 }
    });

    // Save the PDF
    doc.save('payment-history.pdf');
  };

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
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Payment History</h2>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search payments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 text-end">
              <button 
                className="btn btn-outline-primary"
                onClick={exportToPDF}
              >
                <FaFilePdf /> Export PDF
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Payment ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedPayments.map(payment => (
                  <tr key={payment.id}>
                    <td>#{payment.id}</td>
                    <td>₹{payment.amount}</td>
                    <td>{new Date(payment.date).toLocaleDateString()}</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentsdone;
