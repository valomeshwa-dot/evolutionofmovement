'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Home, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function BookingSuccess() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-10 md:p-12 text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-eom-green/10 rounded-full flex items-center justify-center text-eom-green mx-auto mb-8"
        >
          <CheckCircle2 size={48} strokeWidth={2.5} />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-eom-blue mb-4 tracking-tight uppercase">
          Booking Confirmed
        </h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
          Your consultation request has been received. We will contact you shortly.
        </p>

        <div className="flex flex-col gap-3 items-center mb-8 text-sm font-bold text-gray-700">
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-100">
            <CheckCircle2 size={16} /> Booking Request Received
          </div>
        </div>

        <div className="bg-eom-blue/5 rounded-3xl p-6 mb-10 text-sm text-eom-blue/80 font-semibold leading-relaxed border border-eom-blue/10">
          Please arrive 5–10 minutes early for your session. <br />
          For any changes, contact us via WhatsApp or email.
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98] uppercase tracking-widest text-xs"
          >
            <Home size={16} /> Home
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Need help? Contact us anytime.</p>
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/919820289337" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-eom-blue hover:text-eom-green transition-colors font-bold text-sm">
               <MessageSquare size={16} /> WhatsApp
            </a>
            <a href="mailto:eomcolaba@gmail.com" className="flex items-center gap-2 text-eom-blue hover:text-eom-green transition-colors font-bold text-sm">
               Email Support
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
