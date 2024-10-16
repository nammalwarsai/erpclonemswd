import React from 'react';

const PayFee = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h1 className="card-title mb-4">Pay Fee</h1>
          <p className="card-text mb-4">
            Use the form below to pay your semester fees. Follow the instructions to complete your payment.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input 
                type="number" 
                id="amount" 
                className="form-control" 
                placeholder="Enter amount" 
              />
            </div>
            <div className="form-group mt-4">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayFee;
