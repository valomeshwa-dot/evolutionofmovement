'use client';

import Link from 'next/link';
import { Activity, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useBookingModal } from './BookingProvider';

export function Footer() {
  const { openModal } = useBookingModal();

  return (
    <footer className="w-full mt-auto">
      {/* CTA Strip */}
      <div className="bg-eom-blue border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-white text-lg md:text-xl font-bold tracking-tight">
            Ready to get started?{" "}
            <Link 
              href="/contact#consultation-form"
              className="text-eom-green hover:text-white transition-all duration-300 relative group inline-block"
            >
              Book your first consultation.
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-eom-green group-hover:bg-white transition-colors"></span>
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-eom-blue text-white pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Line */}
        <div className="text-center mb-16 pb-12 border-b border-white/10">
          <p className="text-lg md:text-xl font-bold tracking-tight text-gray-300">
            Trusted by athletes, working professionals, and recovery-focused individuals across Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-16 overflow-hidden">
                <Image 
                  src="/images/eom-logo.jpeg" 
                  alt="EOM Logo" 
                  fill 
                  className="object-contain object-top scale-[2.2] translate-y-[-2px]" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-tighter uppercase leading-none">EOM</span>
                <span className="text-[10px] uppercase font-bold text-eom-green tracking-[0.2em] leading-none mt-1">Movement</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Evolution of Movement.<br/>
              A medical-grade studio for physiotherapy and elite performance.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/eomcolaba" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-eom-green hover:text-white transition-all duration-300 border border-white/5 hover:scale-110 active:scale-95"><Instagram size={16} /></a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-eom-green hover:text-white transition-all duration-300 border border-white/5"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-eom-green hover:text-white transition-all duration-300 border border-white/5"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-eom-green">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Philosophy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Services</Link></li>
              <li><Link href="/trainers" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Expert Team</Link></li>
              <li><Link href="/contact#consultation-form" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Book Your First Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-eom-green">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Physiotherapy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Strength Training</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Yoga & Mobility</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Bio-recovery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-eom-green">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 mt-0.5" />
                <p className="text-gray-300 text-sm font-medium uppercase tracking-tight">Colaba, Mumbai, MH</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-500" />
                <a href="tel:+919820289337" className="text-gray-300 hover:text-eom-green transition-colors text-sm font-bold tracking-wider">+91 98202 89337</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500" />
                <a href="mailto:eomcolaba@gmail.com" className="text-gray-300 hover:text-eom-green transition-colors text-sm font-medium">eomcolaba@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">© {new Date().getFullYear()} Evolution of Movement Studio.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
