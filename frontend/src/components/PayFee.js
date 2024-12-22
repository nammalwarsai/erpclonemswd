import React, { useState, useEffect } from 'react';
import { FaCreditCard, FaUniversity, FaWallet } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stripePromise = loadStripe('your_publishable_key'); // Replace with your Stripe key

const PaymentForm = ({ paymentMethod, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError(null);

    try {
      if (paymentMethod === 'card') {
        const { error, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
        });

        if (error) {
          throw new Error(error.message);
        }

        // Here you would typically make an API call to your backend
        console.log('Payment successful:', stripePaymentMethod);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        amount: amount || '',
        name: '',
        email: '',
      }}
      validationSchema={Yup.object({
        amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form className="space-y-4">
          {/* Form fields */}
          <div className="form-group mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
              onChange={handleChange}
            />
            {errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
              onChange={handleChange}
            />
            {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {paymentMethod === 'card' && (
            <div className="form-group mb-3">
              <label className="form-label">Card Details</label>
              <div className="card-element-container p-3 border rounded">
                <CardElement 
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading || !stripe}
          >
            {loading ? 'Processing...' : `Pay ₹${values.amount}`}
          </button>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </Form>
      )}
    </Formik>
  );
};

const PayFee = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Make Payment</h2>
              
              <div className="payment-methods mb-4">
                <div className="d-flex justify-content-center gap-3">
                  {[
                    { id: 'card', icon: <FaCreditCard />, label: 'Card' },
                    { id: 'netbanking', icon: <FaUniversity />, label: 'Net Banking' },
                    { id: 'wallet', icon: <FaWallet />, label: 'Wallet' }
                  ].map(method => (
                    <div
                      key={method.id}
                      className={`payment-method-card p-3 text-center ${
                        paymentMethod === method.id ? 'selected' : ''
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                      style={{
                        cursor: 'pointer',
                        border: `2px solid ${paymentMethod === method.id ? '#2196F3' : '#ddd'}`,
                        borderRadius: '8px',
                        minWidth: '120px'
                      }}
                    >
                      <div className="mb-2">{method.icon}</div>
                      <div>{method.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Elements stripe={stripePromise}>
                <PaymentForm 
                  paymentMethod={paymentMethod}
                  amount={formData.amount}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayFee;
