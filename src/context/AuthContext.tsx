'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/lib/supabase'; // Import your Supabase client
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  role: string | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error getting session:', error);
        setLoading(false);
        return;
      }

      setUser(session?.user || null);

      if (session?.user) {
        // Fetch user's role from the public.roles table via the auth.users table
        const { data, error: roleError } = await supabase
          .from('users') // Assuming 'users' is the table where role_id is stored, linked to auth.users
          .select('role_id, roles(name)')
          .eq('id', session.user.id)
          .single();

        if (roleError) {
          console.error('Error fetching user role:', roleError);
        } else if (data && data.roles) {
          const roles = data.roles as { name: string } | { name: string }[];
          setRole(Array.isArray(roles) ? roles[0]?.name : roles.name);
        }
      }
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        if (session?.user) {
          const { data, error: roleError } = await supabase
            .from('users')
            .select('role_id, roles(name)')
            .eq('id', session.user.id)
            .single();

          if (roleError) {
            console.error('Error fetching user role on auth state change:', roleError);
          } else if (data && data.roles) {
            const roles = data.roles as { name: string } | { name: string }[];
            setRole(Array.isArray(roles) ? roles[0]?.name : roles.name);
          }
        } else {
          setRole(null);
        }
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      setUser(null);
      setRole(null);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
