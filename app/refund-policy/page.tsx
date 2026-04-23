'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, RefreshCcw, Clock, AlertCircle, Ban, Mail } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Spacer */}
      <div className="h-24 lg:h-32"></div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-eom-blue transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-eom-green mb-3 block">Service Support</span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-eom-blue uppercase tracking-tight">
            Refund & Cancellation
          </h1>
          <div className="w-12 h-1 bg-eom-green mx-auto mt-6 rounded-full"></div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed"
        >
          <div className="grid grid-cols-1 gap-6 mb-16">
            {[
              {
                icon: Ban,
                text: "All payments are non-refundable once a session or program is booked",
                color: "text-red-500",
                bg: "bg-red-50"
              },
              {
                icon: Clock,
                text: "Rescheduling is allowed with prior notice (minimum 24 hours)",
                color: "text-eom-green",
                bg: "bg-eom-green/5"
              },
              {
                icon: AlertCircle,
                text: "Missed sessions without notice may not be compensated",
                color: "text-amber-500",
                bg: "bg-amber-50"
              },
              {
                icon: RefreshCcw,
                text: "Packages, once started, cannot be cancelled",
                color: "text-eom-blue",
                bg: "bg-eom-blue/5"
              }
            ].map((policy, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-5 p-6 ${policy.bg} rounded-3xl border border-transparent hover:border-gray-100 transition-all`}
              >
                <div className={`w-12 h-12 ${policy.bg} ${policy.color} rounded-2xl flex items-center justify-center shrink-0 shadow-inner`}>
                  <policy.icon size={24} />
                </div>
                <span className="text-gray-800 font-bold leading-tight">{policy.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-gray-100 text-center">
            <h3 className="text-lg font-bold text-eom-blue uppercase tracking-tight mb-6">
              For support, contact:
            </h3>
            <a 
              href="mailto:eomcolaba@gmail.com" 
              className="inline-flex items-center gap-4 group bg-gray-50 px-8 py-4 rounded-full border border-gray-100 hover:border-eom-blue transition-all"
            >
              <div className="w-10 h-10 bg-white text-eom-blue rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <span className="font-bold text-gray-700 group-hover:text-eom-blue transition-colors">eomcolaba@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
