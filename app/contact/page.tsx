'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Award, Target, CheckCircle2, Navigation, MessageSquare, Loader2, ShieldCheck, X, Lock, Clock, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useBookingModal } from '@/components/BookingProvider';
import { supabase } from "@/lib/supabaseClient";

function ContactContent() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: ""
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleBooking = async () => {
    try {
      setLoading(true);

      const res = await fetch('/api/save-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // Redirect to success page as previously requested
      window.location.href = "/booking-success";
      
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Hero & Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eom-green/10 text-eom-green font-bold text-[10px] uppercase tracking-widest border border-eom-green/20">
                <ShieldCheck size={14} /> Secure Booking
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold font-heading text-eom-blue leading-[1.05] tracking-tight uppercase">Book Your Session at EOM</h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl font-medium">Start your journey towards better movement, recovery, and performance with expert guidance.</p>
              
              {/* Trust Elements */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 text-eom-blue font-bold text-base">
                  <div className="w-5 h-5 rounded-full bg-eom-green text-white flex items-center justify-center">
                    <CheckCircle2 size={12} strokeWidth={4} />
                  </div>
                  Certified Experts
                </div>
                <div className="flex items-center gap-3 text-eom-blue font-bold text-base">
                  <div className="w-5 h-5 rounded-full bg-eom-green text-white flex items-center justify-center">
                    <CheckCircle2 size={12} strokeWidth={4} />
                  </div>
                  Injury Recovery Specialists
                </div>
                <div className="flex items-center gap-3 text-eom-blue font-bold text-base">
                  <div className="w-5 h-5 rounded-full bg-eom-green text-white flex items-center justify-center">
                    <CheckCircle2 size={12} strokeWidth={4} />
                  </div>
                  Trusted by 500+ Clients
                </div>
                
                <div className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 w-max">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-sm font-bold text-gray-700">Rated <span className="text-eom-blue font-extrabold">4.9★</span> by our clients</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <motion.a 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919820289337" 
                className="flex items-center gap-4 p-5 bg-white rounded-[2rem] shadow-md border border-gray-100 hover:border-eom-green hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-eom-blue text-white rounded-xl flex items-center justify-center group-hover:bg-eom-green transition-colors shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Direct Call</p>
                  <p className="text-lg font-bold text-eom-blue group-hover:text-eom-green transition-colors">+91 98202 89337</p>
                </div>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919820289337" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-5 bg-white rounded-[2rem] shadow-md border border-gray-100 hover:border-eom-green hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-xl flex items-center justify-center transition-colors shadow-lg">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">WhatsApp Chat</p>
                  <p className="text-lg font-bold text-eom-blue">High Priority</p>
                </div>
              </motion.a>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            id="booking-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative focus-within:ring-4 focus-within:ring-eom-green/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8 uppercase tracking-tighter">
               <div className="w-1.5 h-10 bg-eom-green rounded-full"></div>
               <h2 className="text-2xl font-bold font-heading text-eom-blue">Reserve Your Spot</h2>
            </div>
            
            <form 
              ref={formRef} 
              className="space-y-6" 
            >
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Full Name</label>
                <input 
                  required 
                  name="name" 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium hover:border-gray-300" 
                  placeholder="John Doe" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Email Address</label>
                  <input 
                    required 
                    name="email" 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Phone Number</label>
                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium" 
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
              </div>

               <div>
                <label htmlFor="service" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Choose Program</label>
                <select 
                  required 
                  name="service" 
                  id="service" 
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 h-14 appearance-none text-sm font-medium"
                >
                  <option value="">Select a service...</option>
                  <option value="physiotherapy">Physiotherapy</option>
                  <option value="strength-conditioning">Strength & Conditioning</option>
                  <option value="yoga">Yoga</option>
                  <option value="kickboxing">Kickboxing</option>
                  <option value="deep-tissue-massage">Deep Tissue Massage</option>
                  <option value="geriatric-training">Geriatric Training</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100 group hover:border-eom-green transition-all cursor-pointer" onClick={() => setIsAgreed(!isAgreed)}>
                  <div className="relative flex items-center mt-0.5">
                    <input 
                      type="checkbox" 
                      id="consent"
                      checked={isAgreed}
                      onChange={() => setIsAgreed(!isAgreed)}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-eom-green peer-checked:border-eom-green transition-all flex items-center justify-center">
                      <CheckCircle2 size={14} className={`text-white transition-opacity ${isAgreed ? 'opacity-100' : 'opacity-0'}`} strokeWidth={4} />
                    </div>
                  </div>
                  <label htmlFor="consent" className="text-[11px] font-bold text-gray-500 leading-relaxed cursor-pointer group-hover:text-eom-blue transition-colors uppercase tracking-tight">
                    I agree to the 
                    <Link href="/terms" target="_blank" className="text-eom-green hover:underline mx-1">Terms & Conditions</Link> and 
                    <Link href="/privacy-policy" target="_blank" className="text-eom-green hover:underline mx-1">Privacy Policy</Link>
                  </label>
                </div>

                <hr className="border-gray-100 mb-6" />

                <button
                  type="button"
                  onClick={handleBooking}
                  disabled={loading || !isAgreed}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Processing...
                    </>
                  ) : "Confirm Booking"}
                </button>
                <div className="mt-5 flex flex-col items-center gap-3">
                  <p className="text-[10px] font-bold text-gray-400 flex items-center justify-center gap-2 uppercase tracking-tight">
                    <CheckCircle2 size={16} className="text-eom-green" /> Typically responds within 1–2 hours.
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-eom-green" /> Payment will be handled at the studio
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact & Visit Us Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24 mb-16 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Location */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center border border-gray-50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <MapPin size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Location</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-4">
              105, 1st Floor, Shahid Bhagat Singh Rd,<br/>
              Opposite Theobroma, near Shiv Mandir,<br/>
              Apollo Bandar, Colaba, Mumbai – 400005
            </p>
            <a 
              href="https://maps.app.goo.gl/2BTw63QdYWk54B7J8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 transition-colors mt-auto"
            >
              View on Google Maps →
            </a>
          </div>

          {/* Card 2: Contact */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center border border-gray-50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Phone size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <a 
              href="tel:+919820289337"
              className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 transition-colors mb-4 tracking-tight"
            >
              +91 98202 89337
            </a>
            <p className="text-gray-500 font-medium mt-auto">
              We're available for calls during working hours.
            </p>
          </div>

          {/* Card 3: Working Hours */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center border border-gray-50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Clock size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Working Hours</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Monday – Saturday: <br/>
              <span className="text-gray-900 font-bold">8:00 AM – 8:00 PM</span>
            </p>
            <p className="text-gray-500 font-medium mt-4 pt-4 border-t border-gray-100 w-full">
              Sunday: <span className="font-bold text-gray-400">Closed</span>
            </p>
          </div>

        </div>
      </section>

      {/* 4. FIND US SECTION (GOOGLE MAPS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-eom-blue mb-4 uppercase tracking-tighter">Find Us</h2>
            <p className="text-lg lg:text-xl text-gray-500 font-medium">Visit our state-of-the-art studio in Colaba, Mumbai</p>
          </div>
          
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl border border-gray-200 relative group">
            
            {/* Map Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-gray-100 z-10 hidden sm:block">
              <p className="font-bold text-eom-blue flex items-center gap-2 text-lg">📍 Located in Colaba, Mumbai</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Easy access with parking nearby</p>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.00416348612!2d72.829026!3d18.9190478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e1f1816f19%3A0xe96264d1f2b70f0!2sEOM%20(EVOLUTION%20OF%20MOVEMENT)!5e0!3m2!1sen!2sin!4v1713778846321!5m2!1sen!2sin" 
              className="w-full h-full border-0 transition-all duration-700 relative z-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="EOM Studio Location"
            ></iframe>
            
            <div className="absolute bottom-6 right-6 z-10">
              <a 
                href="https://maps.app.goo.gl/2BTw63QdYWk54B7J8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eom-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-2xl hover:bg-eom-green transition-all transform hover:-translate-y-1"
              >
                <MapPin size={20} /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-6">
              <p className="text-5xl font-extrabold text-eom-blue mb-2 font-heading tracking-tight">500+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Clients Recovered</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-extrabold text-eom-blue mb-2 font-heading tracking-tight">10,000+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Sessions Completed</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-extrabold text-eom-blue mb-2 font-heading tracking-tight text-eom-green">4.9★</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-eom-blue uppercase tracking-tighter">Start Your Recovery Journey Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">Work with certified experts focused on real results, not shortcuts.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="w-full sm:w-auto bg-eom-green text-white px-10 py-5 rounded-full text-base font-bold hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl uppercase tracking-widest"
            >
              Book Your First Session →
            </button>
            <a 
              href="tel:+919820289337"
              className="w-full sm:w-auto bg-white text-eom-blue border-2 border-eom-blue px-10 py-5 rounded-full text-base font-bold hover:bg-eom-blue hover:text-white transition-all duration-300 uppercase tracking-widest"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]">Loading...</div>}>
      <ContactContent />
    </Suspense>
  )
}
