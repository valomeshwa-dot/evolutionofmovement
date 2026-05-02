'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from "@/lib/supabaseClient";
import { Loader2, X, ShieldCheck, Mail, Lock } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'motion/react';

type BookingContextType = {
  triggerAuth: (onSuccess: () => void) => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

export function useBookingModal() {
  return useBooking();
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [onAuthSuccess, setOnAuthSuccess] = useState<(() => void) | null>(null);
  
  // Auth state
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authEmail, setAuthEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user ?? null;
      
      if (currentUser && isModalOpen) {
        if (onAuthSuccess) {
          onAuthSuccess();
          setOnAuthSuccess(null);
        }
        setIsModalOpen(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [onAuthSuccess, isModalOpen]);

  const triggerAuth = (onSuccess: () => void) => {
    setOnAuthSuccess(() => onSuccess);
    setAuthMode('signin');
    setAuthEmail('');
    setPassword('');
    setAuthError('');
    setIsModalOpen(true);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    let error;
    if (authMode === 'signup') {
      const res = await supabase.auth.signUp({ email: authEmail, password });
      error = res.error;
      if (!error && res.data.user && !res.data.session) {
        setAuthError("Check your email for the confirmation link!");
        setAuthLoading(false);
        return;
      }
    } else {
      const res = await supabase.auth.signInWithPassword({ email: authEmail, password });
      error = res.error;
      
      // FORCE CLEAN LOGIN FLOW
      if (!error) {
        await supabase.auth.getSession();
      }
    }

    setAuthLoading(false);

    if (error) {
      setAuthError(error.message);
    }
  };

  return (
    <BookingContext.Provider value={{ 
      triggerAuth,
      openModal,
      closeModal,
      isModalOpen
    }}>
      {children}
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-eom-blue/40 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-md overflow-hidden relative border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-eom-blue hover:bg-gray-100 rounded-full transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="p-10">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-16 h-16 bg-eom-green/10 rounded-2xl flex items-center justify-center text-eom-green mb-6">
                    <ShieldCheck size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-eom-blue tracking-tight uppercase font-heading">
                    {authMode === 'signin' ? 'Welcome Back' : 'Join EOM'}
                  </h2>
                  <p className="text-gray-500 mt-2 font-medium">
                    {authMode === 'signin' ? 'Sign in to complete your booking' : 'Create an account to track your sessions'}
                  </p>
                </div>

                <form onSubmit={handleAuth} className="space-y-5">
                  {authError && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 text-sm text-red-600 bg-red-50 rounded-2xl border border-red-100 font-medium"
                    >
                      {authError}
                    </motion.div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-eom-blue uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="email" 
                        required
                        value={authEmail}
                        onChange={e => setAuthEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green focus:bg-white outline-none transition-all text-sm font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-eom-blue uppercase tracking-widest ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="password" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green focus:bg-white outline-none transition-all text-sm font-medium"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={authLoading}
                    className="w-full mt-4 bg-eom-blue hover:bg-eom-green text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                  >
                    {authLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      authMode === 'signin' ? 'Sign In Now' : 'Create Account'
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500 font-medium">
                    {authMode === 'signin' ? "New to EOM? " : "Already have an account? "}
                    <button 
                      type="button"
                      onClick={() => {
                        setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
                        setAuthError('');
                      }}
                      className="text-eom-green font-bold hover:underline ml-1"
                    >
                      {authMode === 'signin' ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
