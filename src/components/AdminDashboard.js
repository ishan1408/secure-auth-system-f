import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const AdminDashboard = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/admin')
      .then(res => {
        setMessage(res.data.message);
        setLoading(false);
      })
      .catch(err => {
        const errorMsg = err.response?.data?.error || 'Access denied or server error';
        setMessage(errorMsg);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <p style={styles.message}>{message}</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '60px auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  loading: {
    fontSize: '18px',
    color: '#777',
  },
  message: {
    fontSize: '20px',
    color: '#1a73e8',
    fontWeight: '500',
  },
};

export default AdminDashboard;
