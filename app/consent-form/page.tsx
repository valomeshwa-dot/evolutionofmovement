'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ShieldCheck, ClipboardCheck, Info, Check } from 'lucide-react';

export default function ConsentForm() {
  const [agreed, setAgreed] = useState(false);

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
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-eom-green mb-3 block">Digital Signature</span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-eom-blue uppercase tracking-tight">
            Client Consent & Liability Waiver
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
            By booking a session with Evolution of Movement (EOM), I confirm that:
          </p>

          <div className="space-y-4 mb-12">
            {[
              "I am physically fit to participate in training/therapy",
              "I have disclosed all medical conditions or injuries",
              "I understand that physical activity carries some risk",
              "I voluntarily agree to participate in sessions"
            ].map((point, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-6 h-6 bg-eom-blue/5 text-eom-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-bold">{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100 mb-12">
            <div className="flex items-center gap-3 mb-4 text-amber-700">
              <Info size={20} />
              <h2 className="text-lg font-bold uppercase tracking-tight m-0">Liability Disclaimer</h2>
            </div>
            <p className="m-0 text-amber-900/80 font-bold leading-relaxed">
              EOM and its trainers are not responsible for injuries caused due to undisclosed conditions or improper participation.
            </p>
          </div>

          {/* Interactive Checkbox Section */}
          <div className="bg-gray-50 p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 text-center">
            <label className="flex items-center justify-center gap-4 cursor-pointer group select-none">
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="peer sr-only" 
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                <div className="w-7 h-7 border-2 border-gray-300 rounded-lg bg-white peer-checked:bg-eom-green peer-checked:border-eom-green transition-all duration-200 flex items-center justify-center group-hover:border-eom-green">
                  <Check 
                    size={18} 
                    className={`text-white transition-opacity duration-200 ${agreed ? 'opacity-100' : 'opacity-0'}`} 
                    strokeWidth={4} 
                  />
                </div>
              </div>
              <span className="text-sm lg:text-base font-bold text-gray-700 group-hover:text-eom-blue transition-colors">
                I agree to the <Link href="/terms-conditions" className="text-eom-green hover:underline">Terms</Link>, <Link href="/privacy-policy" className="text-eom-green hover:underline">Privacy Policy</Link>, and <span className="text-eom-blue">Consent Form</span>
              </span>
            </label>

            <div className="mt-8">
              <button
                disabled={!agreed}
                className={`px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl ${
                  agreed 
                    ? 'bg-eom-blue text-white hover:bg-eom-green hover:shadow-2xl hover:-translate-y-1' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                }`}
              >
                {agreed ? 'Submit Consent' : 'Please Review & Agree'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
