import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Your Dashboard</h1>
      <p>You have successfully logged in!</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    margin: '2rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1.5rem',
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Dashboard;
