import React, { useState } from 'react';
import axios from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/forgot-password', { email });
      toast.success('Password reset link sent to your email');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Error sending reset link');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Forgot Password</h2>
        <p style={styles.subheading}>Enter your email to receive a reset link</p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.primaryButton}>
            Send Reset Link
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            style={styles.secondaryButton}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    padding: '1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '15px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '420px',
    width: '100%',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#2563eb',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    color: '#374151',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  primaryButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '0.75rem',
    transition: 'background-color 0.3s ease',
  },
  secondaryButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#f3f4f6',
    color: '#111827',
    fontWeight: '500',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default ForgotPassword;
