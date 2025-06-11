import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const ManagerDashboard = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchManagerData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setMessage('No token found. Please login.');
          return;
        }

        const response = await api.get('/api/manager', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessage(response.data.message);
      } catch (err) {
        console.error('Error:', err.response?.data || err.message);
        setMessage(err.response?.data?.error || 'Access denied');
      }
    };

    fetchManagerData();
  }, []);

  return (
    <>
      <style>
        {`
          .dashboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 90vh;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .dashboard-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .dashboard-message {
            font-size: 1.2rem;
            background-color: rgba(255, 255, 255, 0.15);
            padding: 1rem 2rem;
            border-radius: 8px;
            backdrop-filter: blur(5px);
            max-width: 600px;
          }
        `}
      </style>
      <div className="dashboard-container">
        <h2 className="dashboard-title">Manager Dashboard</h2>
        <p className="dashboard-message">{message}</p>
      </div>
    </>
  );
};

export default ManagerDashboard;
