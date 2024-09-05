import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import bg from '../assets/img/bghero.jpg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const { login, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }
        signUp(username, password);
      } else {
        login(username, password);
      }
      navigate('/'); // Navigate to the main website after login or sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex  items-center justify-center">
      <div className="absolute inset-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm"></div>
      </div>
      <div className="relative bg-gradient-to-r from-[#653a08cc]  via-[#a16f35cc] to-[#653a08cc] p-8 rounded shadow-xl shadow-gray-700 w-full max-w-md z-30">
        <h1 className="text-2xl font-bold mb-6 text-center animate-bounce  ">{isSignUp ? 'Sign Up ' : 'Login'}</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent  focus:bg-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent mb-3 leading-tight focus:bg-white focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {isSignUp && (
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent focus:bg-white  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#653a08] opacity-40 hover:bg-[#653a08] hover:opacity-90 text-white font-bold py-2 px-4 rounded shadow-inner focus:outline-none focus:shadow-outline"
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="text-white hover:underline hover:text-amber-950"
            >
              {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
