'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4 text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-24 h-24 bg-eom-green/10 text-eom-green rounded-full flex items-center justify-center mb-8"
      >
        <CheckCircle2 size={48} />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold font-heading text-eom-blue mb-4 uppercase tracking-tight"
      >
        Your session has been booked successfully!
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-600 mb-10 max-w-lg font-medium"
      >
        Thank you for your booking. Our team will contact you shortly to confirm the details.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/" className="bg-eom-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-eom-green transition-all shadow-xl hover:-translate-y-1 block">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
