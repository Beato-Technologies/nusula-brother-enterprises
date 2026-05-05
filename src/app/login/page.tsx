'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/'); // Redirect to home on successful login
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="portal-shell flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-2">Client Portal Login</h1>
      <p className="mb-4 text-muted">Secure access to your Nusula account</p>
      <form onSubmit={handleSubmit} className="portal-card w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
            Sign In
          </button>
          <a href="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Don't have an account? Register
          </a>
        </div>
      </form>
    </div>
  );
}
