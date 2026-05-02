'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsConditions() {
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
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-eom-green mb-3 block">User Agreement</span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-eom-blue uppercase tracking-tight">
            Terms & Conditions
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
          <p className="mb-10 text-lg">
            By using this website and booking services at Evolution of Movement (EOM), you agree to the following:
          </p>

          <div className="space-y-6 mb-12">
            {[
              "All sessions must be booked in advance",
              "Clients must provide accurate health and fitness information",
              "EOM is not liable for injuries arising from undisclosed conditions",
              "Programs are personalised and results may vary",
              "Cancellations must be made at least 12 hours in advance"
            ].map((term, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-eom-green/20 transition-colors"
              >
                <div className="w-6 h-6 bg-eom-green/10 text-eom-green rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-gray-700 font-bold">{term}</span>
              </div>
            ))}
          </div>

          <div className="p-8 bg-eom-blue/5 rounded-[2rem] border border-eom-blue/10">
            <div className="flex items-center gap-3 mb-4 text-eom-blue">
              <ShieldAlert size={20} />
              <h2 className="text-lg font-bold uppercase tracking-tight m-0">Modifications</h2>
            </div>
            <p className="m-0 text-gray-600 italic">
              EOM reserves the right to modify services and schedules when necessary.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
