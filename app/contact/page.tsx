'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Award, Target, CheckCircle2, Navigation, MessageSquare, Loader2, ShieldCheck } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

function ContactContent() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleBookingAndPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;
    if (!isAgreed) {
      alert("Please agree to the Terms and Privacy Policy to proceed.");
      return;
    }

    const formData = new FormData(formRef.current!);
    const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;

    if (!email || !phone || !formData.get('firstName')) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsProcessing(true);

    // Initialize Razorpay
    const options = {
      key: "rzp_test_SgbolHMqpfC3L7",
      amount: 50000, 
      currency: "INR",
      name: "Clinic Name",
      description: "Consultation Fee",
      image: "/icons/activity.svg", 
      handler: function (response: any) {
        setIsProcessing(false);
        console.log("Payment ID:", response.razorpay_payment_id);
        window.location.href = "/booking-success";
      },
      prefill: {
        name: "Test User",
        email: "test@test.com",
        contact: "9999999999",
      },
      notes: {
        service: service,
      },
      theme: {
        color: "#10b981", // eom-green
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    try {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay failed to load:", err);
      alert("Payment gateway failed to load. Please check your connection.");
      setIsProcessing(false);
    }
  };


  return (
    <div className="flex flex-col w-full bg-white">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Hero Section */}
      <section className="bg-eom-light pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
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
              <h1 className="text-4xl lg:text-6xl font-bold font-heading text-eom-blue leading-[1.1] tracking-tighter uppercase">Book Your Session at EOM</h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl font-medium">Start your journey towards better movement, recovery, and performance with expert guidance.</p>
              
              {/* Trust Elements */}
              <div className="flex flex-wrap gap-y-4 gap-x-10 pt-4 uppercase">
                {[
                  { icon: Award, text: "Certified Experts" },
                  { icon: Target, text: "Personalized" },
                  { icon: MapPin, text: "Colaba, Mumbai" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 text-sm font-bold text-eom-blue"
                  >
                    <div className="w-9 h-9 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-eom-green shadow-inner">
                      <item.icon size={18} />
                    </div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <motion.a 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919820289337" 
                className="flex items-center gap-4 p-5 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:border-eom-green hover:shadow-xl transition-all group"
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
                className="flex items-center gap-4 p-5 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:border-eom-green hover:shadow-xl transition-all group"
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

            <div className="space-y-8 pt-10 border-t border-gray-200">
               <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-eom-blue shadow-md border border-gray-50 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h3>
                  <a href="mailto:eomcolaba@gmail.com" className="text-lg font-bold text-eom-blue hover:text-eom-green transition-colors">eomcolaba@gmail.com</a>
                </div>
              </div>

              <div className="p-8 bg-white rounded-[2.5rem] shadow-inner border border-gray-100">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Navigation size={16} className="text-eom-green" /> Studio Headquarters
                </h3>
                <p className="text-lg font-bold text-eom-blue leading-relaxed uppercase tracking-tight">
                  3rd Floor, Colaba Chambers, <br />
                  Next to Sahakari Bhandar, <br />
                  Colaba, Mumbai - 400005
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative"
          >
            <div className="flex items-center gap-3 mb-8 uppercase tracking-tighter">
               <div className="w-1.5 h-10 bg-eom-green rounded-full"></div>
               <h2 className="text-2xl font-bold font-heading text-eom-blue">Reserve Your Spot</h2>
            </div>
            
            <form ref={formRef} className="space-y-6" onSubmit={handleBookingAndPayment}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">First Name</label>
                  <input required name="firstName" type="text" id="firstName" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium hover:border-gray-300" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Last Name</label>
                  <input required name="lastName" type="text" id="lastName" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Email Address</label>
                  <input required name="email" type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Phone Number</label>
                  <input required name="phone" type="tel" id="phone" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 text-sm font-medium" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

               <div>
                <label htmlFor="service" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Choose Program</label>
                <select required name="service" id="service" defaultValue={defaultService} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all text-gray-900 h-14 appearance-none text-sm font-medium">
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

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-eom-blue mb-2.5 ml-1 uppercase tracking-widest">Message (Optional)</label>
                <textarea name="message" id="message" rows={3} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-eom-green/10 focus:border-eom-green bg-gray-50/50 focus:bg-white transition-all resize-none text-gray-900 text-sm font-medium" placeholder="Tell us what you need help with..."></textarea>
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
                    <Link href="/terms-conditions" target="_blank" className="text-eom-green hover:underline mx-1">Terms & Conditions</Link>, 
                    <Link href="/privacy-policy" target="_blank" className="text-eom-green hover:underline mx-1">Privacy Policy</Link>, and 
                    <Link href="/refund-policy" target="_blank" className="text-eom-green hover:underline mx-1">Refund Policy</Link>
                  </label>
                </div>

                <button 
                  disabled={isProcessing || !isAgreed}
                  type="submit" 
                  className="w-full bg-eom-green text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-emerald-600 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] transform duration-150 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 size={24} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    "Book & Pay"
                  )}
                </button>
                <div className="mt-5 flex flex-col items-center gap-3">
                  <p className="text-[10px] font-bold text-gray-400 flex items-center justify-center gap-2 uppercase tracking-tight">
                    <CheckCircle2 size={16} className="text-eom-green" /> Typically responds within 1–2 hours.
                  </p>
                  <p className="text-[9px] font-bold text-gray-400 flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-eom-green" /> Secure payment powered by Razorpay
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 4. FIND US SECTION (GOOGLE MAPS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-eom-blue mb-4 uppercase tracking-tighter">Find Us</h2>
            <p className="text-lg lg:text-xl text-gray-500 font-medium">Visit our studio in Colaba, Mumbai</p>
          </div>
          
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border-0 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.00416348612!2d72.829026!3d18.9190478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e1f1816f19%3A0xe96264d1f2b70f0!2sEOM%20(EVOLUTION%20OF%20MOVEMENT)!5e0!3m2!1sen!2sin!4v1713778846321!5m2!1sen!2sin" 
              className="w-full h-full border-0 transition-all duration-700" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="EOM Studio Location"
            ></iframe>
            <div className="absolute bottom-6 right-6">
              <a 
                href="https://maps.app.goo.gl/2BTw63QdYWk54B7J8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eom-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl hover:bg-eom-green transition-all transform hover:-translate-y-1"
              >
                <MapPin size={20} /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-eom-blue uppercase tracking-tighter">Ready to begin your fitness journey?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">Join hundreds of satisfied clients who have transformed their lives through the Evolution of Movement.</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="inline-flex items-center justify-center bg-eom-green text-white px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1 uppercase tracking-widest">
            Book Your First Session
          </button>
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

