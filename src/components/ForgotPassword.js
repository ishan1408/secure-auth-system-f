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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Reset Link
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
