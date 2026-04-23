'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Mail, Phone, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Spacer - to account for fixed navbar if any */}
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
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-eom-green mb-3 block">Legal Information</span>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-eom-blue uppercase tracking-tight">
            Privacy Policy
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
          <p className="mb-8">
            We value your privacy. At Evolution of Movement (EOM), we collect basic personal information such as name, contact details, and health-related inputs only to provide better fitness and physiotherapy services.
          </p>

          <div className="bg-gray-50 rounded-[2rem] p-8 lg:p-10 mb-8 border border-gray-100">
            <h2 className="text-xl font-bold text-eom-blue uppercase tracking-tight mb-6 flex items-center gap-3">
              Your data is used strictly for:
            </h2>
            <ul className="space-y-4 text-gray-600 list-none p-0">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-eom-green rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Booking and communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-eom-green rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Personalised training programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-eom-green rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Progress tracking</span>
              </li>
            </ul>
          </div>

          <p className="mb-6">
            We do not sell or share your data with third parties.
          </p>

          <p className="mb-12">
            All payments are securely processed via trusted payment gateways.
          </p>

          <div className="pt-12 border-t border-gray-100">
            <h3 className="text-lg font-bold text-eom-blue uppercase tracking-tight mb-6">
              For any concerns, contact:
            </h3>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:eomcolaba@gmail.com" 
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-10 h-10 bg-eom-blue/5 text-eom-blue rounded-xl flex items-center justify-center group-hover:bg-eom-blue group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-eom-blue transition-colors">eomcolaba@gmail.com</span>
              </a>
              <a 
                href="tel:9820289337" 
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-10 h-10 bg-eom-blue/5 text-eom-blue rounded-xl flex items-center justify-center group-hover:bg-eom-blue group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-eom-blue transition-colors">9820289337</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
