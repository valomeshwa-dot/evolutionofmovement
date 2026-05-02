'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Target, Heart, Award, Activity, Users, TrendingUp, Sun, ShieldCheck, Sparkles, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <Image 
          src="/images/about.jpeg" 
          fill 
          className="object-cover" 
          alt="About EOM" 
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col gap-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-bold font-heading tracking-tight text-white uppercase"
          >
            About EOM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-2xl text-gray-100 font-medium max-w-2xl mx-auto"
          >
            Evolving the way you move, perform, and recover.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <Link href="/contact#consultation-form" className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2">
              Book Your First Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <FadeIn className="w-full lg:w-[55%] space-y-6">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-eom-green mb-2 block">Our Foundation</span>
                <h2 className="text-3xl lg:text-5xl font-bold font-heading text-eom-blue leading-tight uppercase">Movement is Medicine</h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
                <p>
                  We believe that every body is unique, and so is every injury. Generic programs yield generic results. At EOM, we address the root cause systematically.
                </p>
                <p>
                  We don't just want you to feel better today; we want you to stay better tomorrow through scientific progression and elite-level care.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="w-full lg:w-[45%]">
              <div className="relative h-[300px] lg:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-gray-50">
                <Image 
                  src="/images/about-hero.jpeg" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="EOM Evolution of Movement" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. HOLISTIC BELIEF SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
            <FadeIn>
               <h2 className="text-3xl lg:text-4xl font-bold font-heading text-eom-blue mb-4 uppercase tracking-tight max-w-2xl mx-auto leading-[1.3]">
                 EOM Fitness is built on the belief that movement is fundamental to life.
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group h-full">
                    <div className="w-14 h-14 bg-eom-green/10 text-eom-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <Heart size={28} />
                    </div>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-medium max-w-[320px]">
                      We focus on optimizing movement to improve physical health, mental well-being, and overall quality of life.
                    </p>
                  </div>
                  <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group h-full">
                    <div className="w-14 h-14 bg-eom-green/10 text-eom-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <Activity size={28} />
                    </div>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-medium max-w-[320px]">
                      We take a holistic approach by combining physiotherapy, strength training, yoga, and performance training.
                    </p>
                  </div>
               </div>
               <div className="mt-8 py-5 px-12 bg-gradient-to-r from-eom-blue to-[#1a2e4d] text-white rounded-full shadow-2xl inline-block border border-white/5 hover:scale-105 transition-transform cursor-default">
                  <p className="text-base lg:text-lg font-bold font-heading tracking-widest uppercase leading-none">
                    Personalised care. No templates. No shortcuts.
                  </p>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 4. MISSION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-eom-green text-white rounded-3xl flex-shrink-0 flex items-center justify-center shadow-xl rotate-3">
            <Target size={40} />
          </div>
          <div className="text-center md:text-left space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-eom-green block">Our Mission</span>
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-eom-blue leading-tight uppercase tracking-tight">
              To empower individuals to achieve optimal physical health and functional movement.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-2xl">
              We provide personalized, science-based training and rehabilitation designed to help people move better and live better, regardless of their starting point.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-eom-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-eom-green block">Our DNA</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-white uppercase tracking-tighter">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Personalized Care", desc: "No generic templates. Every movement is tailored to your unique biomechanics." },
              { icon: Sparkles, title: "Holistic Wellness", desc: "Integrating mental and physical well-being into every training session." },
              { icon: BookOpen, title: "Evidence-Based", desc: "Our methods are rooted in the latest sports science and medical research." },
              { icon: Activity, title: "Movement as Medicine", desc: "We believe movement is the ultimate tool for healing and performance." },
              { icon: TrendingUp, title: "Long-Term Health", desc: "We build resilience that lasts a lifetime, not just a quick fix." },
              { icon: Users, title: "Supportive Community", desc: "Join a network of individuals committed to evolution and growth." }
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)" }}
                  className="bg-white/5 p-8 rounded-[2rem] h-full border border-white/10 transition-all duration-300 group shadow-lg flex flex-col"
                >
                  <div className="w-12 h-12 bg-white text-eom-green rounded-xl flex items-center justify-center mb-6 shadow-2xl transition-transform duration-500 group-hover:rotate-6 shadow-eom-green/20">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-3 text-white uppercase tracking-tight">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium flex-grow">{value.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STUDIO GALLERY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-eom-green mb-1 block">Gallery</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-eom-blue uppercase tracking-tight">Inside the Studio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              "/images/home-hero.jpeg",
              "/images/service.jpeg",
              "/images/yoga.jpeg",
              "/images/about-hero.jpeg",
              "/images/about.jpeg",
              "/images/about1.jpeg"
            ].map((src, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 w-full">
                <Image 
                  src={src} 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-in-out" 
                  alt={`EOM Studio Gallery ${idx + 1}`} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-eom-green mb-1 block">Support</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-eom-blue uppercase tracking-tight">Common Questions</h2>
          </div>
          
          <div className="space-y-6">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
           <div className="relative bg-eom-blue rounded-[3rem] overflow-hidden p-12 md:p-20 text-center shadow-3xl">
              <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-eom-green)_0%,_transparent_100%)]"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl lg:text-6xl font-bold font-heading text-white tracking-tighter leading-tight uppercase">Start Your Movement <br className="hidden md:block" /> Journey Today</h2>
                <Link href="/contact#consultation-form" className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-12 py-6 rounded-full text-lg lg:text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-4 group">
                    Book Your First Consultation <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes EOM different from a regular gym?",
      a: "EOM combines physiotherapy with performance training. We focus on fixing the root cause of pain and improving long-term strength and mobility through science-based methods."
    },
    {
      q: "Do I need to be injured to start?",
      a: "No. We work with both injured clients and those looking to improve performance, mobility, and overall fitness for long-term health."
    },
    {
      q: "Is this suitable for beginners?",
      a: "Yes. All programs are personalised based on your current level, whether you’re a beginner or an athlete."
    },
    {
      q: "How is this different from physiotherapy clinics?",
      a: "Unlike traditional clinics, we combine hands-on therapy with strength training to ensure lasting results and physical resilience."
    },
    {
      q: "Where is the studio located?",
      a: "We are located in Colaba, Mumbai. You can find us on Google Maps or contact us for precise directions."
    },
    {
      q: "How do I book a session?",
      a: "You can book directly through the website, call the studio, or contact us via WhatsApp for immediate scheduling."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-sm"
        >
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <span className="text-lg font-bold text-eom-blue group-hover:text-eom-green transition-colors">{faq.q}</span>
            <ChevronDown 
              size={20} 
              className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-eom-green' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 text-gray-500 font-medium leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
