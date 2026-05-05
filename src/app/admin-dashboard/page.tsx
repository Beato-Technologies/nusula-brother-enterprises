'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const AdminDashboardPage = () => {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login'); // Redirect unauthenticated users to login
      } else if (role !== 'admin') {
        router.push('/'); // Redirect non-admin users to home
      }
    }
  }, [user, role, loading, router]);

  if (loading || !user || role !== 'admin') {
    return <div className="portal-shell flex min-h-screen items-center justify-center">Loading dashboard access...</div>;
  }

  return (
    <div className="portal-shell container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg">Welcome, {user.email}. You have full administrative access to Nusula and Brother Enterprises operational controls.</p>
      {/* Admin-specific content and tools will go here */}
      <div className="portal-card mt-8 p-4 border rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-2">Nusula Admin Tools</h2>
        <ul>
          <li>Manage Product Inventory</li>
          <li>Manage Orders and Customers</li>
          <li>View Sales Analytics</li>
          <li>Manage Team and Operations</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
