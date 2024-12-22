import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaDownload, FaCalendarAlt, FaRupeeSign, FaUniversity } from 'react-icons/fa';

const MySemFeeStructure = () => {
  const feeStructure = {
    semester: 'Spring 2024',
    tuitionFee: '150000',
    developmentFee: '15000',
    registrationFee: '5000',
    studentActivityFee: '8000',
    medicalInsurance: '12000',
    infrastructureFee: '20000',
    laboratoryFee: '25000',
    libraryFee: '10000',
    examFee: '5000',
    totalFee: '190000',
    dueDate: '2024-03-31'
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Add header with logo
    doc.setFillColor(26, 35, 126);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('KLEF DEEMBED TO BE UNIVERSITY', pageWidth/2, 20, { align: 'center' });


    doc.setFontSize(16);
    doc.text('Fee Structure Receipt', pageWidth/2, 32, { align: 'center' });

    // Add student details section
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Semester: ${feeStructure.semester}`, 20, 60);
    doc.text(`Generated Date: ${new Date().toLocaleDateString()}`, pageWidth - 20, 60, { align: 'right' });

    // Customize table
    doc.autoTable({
      startY: 70,
      head: [[{ content: 'Description', styles: { fillColor: [26, 35, 126] }}, 
              { content: 'Amount', styles: { fillColor: [26, 35, 126] }}]],
      body: [
        ...Object.entries(feeStructure)
          .filter(([key]) => !['semester', 'totalFee', 'dueDate'].includes(key))
          .map(([key, value]) => [
            key.replace(/([A-Z])/g, ' $1').trim(),
            { content: `₹${parseInt(value).toLocaleString()}`, styles: { halign: 'right' }}
          ]),
        ['', ''],  // Empty row for spacing
        [{ content: 'Total Fee', styles: { fillColor: [240, 240, 240], fontStyle: 'bold' }}, 
         { content: `₹${parseInt(feeStructure.totalFee).toLocaleString()}`, 
           styles: { fillColor: [240, 240, 240], fontStyle: 'bold', halign: 'right' }}],
      ],
      theme: 'grid',
      styles: {
        fontSize: 12,
        cellPadding: 8,
        lineColor: [200, 200, 200],
        lineWidth: 0.5,
      },
      headStyles: {
        textColor: [255, 255, 255],
        fontSize: 14,
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [249, 249, 249],
      },
    });

    // Add footer
    const footerY = pageHeight - 30;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, footerY, pageWidth - 20, footerY);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Due Date:', 20, footerY + 15);
    doc.setFont('helvetica', 'bold');
    doc.text(new Date(feeStructure.dueDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }), 70, footerY + 15);

    doc.save('fee-structure.pdf');
  };

  return (
    <div className="container py-5">
      <div className="card border-0 shadow-lg">
        <div className="card-header position-relative py-4" 
             style={{background: 'linear-gradient(135deg, #1a237e, #0d47a1)'}}>
          <div className="text-center text-white">
            <FaUniversity className="display-4 mb-2" />
            <h2 className="fw-bold mb-0">
              <span className="border-bottom border-3 pb-2">Semester Fee Structure</span>
            </h2>
          </div>
          <div className="wave-shape position-absolute bottom-0 start-0 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        <div className="card-body p-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light p-4 rounded-3 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-primary mb-0">Semester</h3>
                  <h3 className="fw-bold mb-0">{feeStructure.semester}</h3>
                </div>
              </div>
              
              <div className="fee-breakdown bg-white p-4 rounded-3 shadow-sm">
                {Object.entries(feeStructure)
                  .filter(([key]) => !['semester', 'totalFee', 'dueDate'].includes(key))
                  .map(([key, value]) => (
                    <div key={key} className="d-flex justify-content-between align-items-center py-3 border-bottom">
                      <span className="text-secondary fs-5">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="fw-bold fs-5">
                        <FaRupeeSign className="me-1" />
                        {parseInt(value).toLocaleString()}
                      </span>
                    </div>
                  ))}
                
                <div className="mt-4 p-4 bg-light rounded-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-dark mb-0">Total Fee</h4>
                    <h4 className="text-primary fw-bold mb-0">
                      <FaRupeeSign className="me-1" />
                      {parseInt(feeStructure.totalFee).toLocaleString()}
                    </h4>
                  </div>
                </div>

                <div className="alert alert-warning mt-4 d-flex align-items-center">
                  <FaCalendarAlt className="me-2 fs-4" />
                  <div>
                    <strong className="d-block">Due Date</strong>
                    <span className="text-dark">
                      {new Date(feeStructure.dueDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={downloadPDF} 
                  className="btn btn-primary btn-lg w-100 mt-4 d-flex align-items-center justify-content-center"
                  style={{background: 'linear-gradient(45deg, #1a237e, #0d47a1)'}}
                >
                  <FaDownload className="me-2" />
                  Download Fee Structure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wave-shape {
          height: 50px;
          overflow: hidden;
        }
        .card {
          border-radius: 1rem;
          overflow: hidden;
        }
        .fee-breakdown {
          background: linear-gradient(to bottom, #ffffff, #f8f9fa);
        }
        .btn-primary {
          background: linear-gradient(45deg, #1a237e, #0d47a1);
          border: none;
          padding: 1rem;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 71, 161, 0.3);
          transition: all 0.3s ease;
        }
        .alert-warning {
          background: linear-gradient(45deg, #fff3cd, #fff8e1);
          border: none;
          border-left: 5px solid #ffc107;
        }
        .card-header h2 {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        /* Add more custom styles as needed */
      `}</style>
    </div>
  );
};

export default MySemFeeStructure;
