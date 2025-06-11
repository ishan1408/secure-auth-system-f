import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const UserProfile = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/api/profile')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage(err.response?.data?.error || 'Access denied'));
  }, []);

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '100px auto',
      padding: '30px',
      backgroundColor: '#f5f7fa',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      fontSize: '28px',
      color: '#2c3e50',
      marginBottom: '20px'
    },
    message: {
      fontSize: '18px',
      color: '#34495e',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Profile</h2>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

export default UserProfile;
