import React, { useState } from 'react';
import axios from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { email, password });
      toast.success('Registration successful');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6' }}>
      <div style={styles.form}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#16a34a' }}>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" style={{ display: 'block', textAlign: 'left', marginBottom: '0.5rem', fontWeight: '500' }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', textAlign: 'left', marginBottom: '0.5rem', fontWeight: '500' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={{ ...styles.button, backgroundColor: '#16a34a', marginTop: '1rem' }}>
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            style={{ ...styles.button, backgroundColor: '#e5e7eb', color: '#111827', marginTop: '0.75rem' }}
          >
            Already have an account? Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    width: '100%',
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1.25rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Register;
