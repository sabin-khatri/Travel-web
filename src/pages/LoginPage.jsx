/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = (event) => {
    
    event.preventDefault();

    
    console.log('Logging in with:', { email, password });

    
    alert('Login Successful! Redirecting to homepage...');

   
    setTimeout(() => {
      navigate('/');
    }, 1500); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-slate-200 px-4 py-12">
      <div
        className={`w-full max-w-md p-6 sm:p-8 space-y-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl transform transition-all duration-700 ease-out
                    ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Welcome Back!
          </h1>
          <p className="mt-2 text-slate-600">
            Sign in to continue your journey.
          </p>
        </div>

      
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-full px-4 py-3 bg-white/50 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400
                         focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              placeholder="sabinkhatri@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white/50 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400
                         focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-orange-500 rounded-lg shadow-lg shadow-orange-500/30
                       hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/50
                       transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-slate-600">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-semibold text-orange-600 hover:text-orange-700 hover:underline transition-colors duration-300"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;