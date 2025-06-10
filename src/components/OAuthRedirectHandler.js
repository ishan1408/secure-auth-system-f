import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      toast.error('No token found in URL');
      navigate('/login');
    }
  }, [location.search, navigate]);

  return <p>Redirecting...</p>;
};

export default OAuthRedirectHandler;
