'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration successful! Please check your email for verification.');
        // Optionally redirect to login page after a short delay
        // setTimeout(() => router.push('/login'), 3000);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="portal-shell flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-2">Create Client Portal Account</h1>
      <p className="mb-4 text-muted">Register to manage requests and updates</p>
      <form onSubmit={handleSubmit} className="portal-card w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#0b7a46' }}
          >
            Register
          </button>
          <a href="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Already have an account? Login
          </a>
        </div>
      </form>
    </div>
  );
}
