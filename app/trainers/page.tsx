'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, Target, Users, CheckCircle2, Star, Briefcase, GraduationCap, ChevronRight, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

const trainers = [
  {
    name: "Dr. Aakash Kadam",
    role: "Head Physiotherapist",
    exp: "12+ Years",
    specs: ["Sports Rehabilitation", "Post-operative Care"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Priya Sharma",
    role: "Strength & Conditioning Coach",
    exp: "8+ Years",
    specs: ["Athletic Performance", "Functional Power"],
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Rahul Desai",
    role: "Senior Yoga Instructor",
    exp: "10+ Years",
    specs: ["Mobility Flow", "Mindfulness Resilience"],
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Anjali Gupta",
    role: "Kickboxing & Fitness Coach",
    exp: "6+ Years",
    specs: ["Cardio Conditioning", "Agility Training"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Sameer Patel",
    role: "Geriatric Specialist",
    exp: "15+ Years",
    specs: ["Senior Mobility", "Fall Prevention"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Neha Joshi",
    role: "Recovery Specialist",
    exp: "7+ Years",
    specs: ["Deep Tissue Therapy", "Sports Massage"],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800"
  }
];

export default function TrainersPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-eom-blue text-white py-40 lg:py-56 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <Image src="/images/gym_hero.png" fill className="object-cover opacity-20 filter grayscale" alt="EOM Training Facility" />
        <div className="absolute inset-0 bg-gradient-to-t from-eom-blue via-eom-blue/80 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eom-green/10 text-eom-green font-bold text-xs uppercase tracking-widest border border-eom-green/20"
          >
            <Star size={14} fill="currentColor" /> World-Class Team
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-bold font-heading mb-4 tracking-tighter text-white uppercase"
          >
            Meet the Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-2xl text-gray-300 font-medium max-w-xl mx-auto tracking-tight"
          >
            Experienced, data-driven, and dedicated to your long-term evolution.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Our Trainers */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-eom-green block">The Elite Standard</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-eom-blue tracking-tighter uppercase">Why Choose Our Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: GraduationCap, title: "Certified Masters", desc: "Our specialists hold advanced degrees and international certifications in clinical physiotherapy and sports science." },
              { icon: Target, title: "Precision Training", desc: "We eliminate the guesswork. Every program is built on objective movement screening and your specific biomechanics." },
              { icon: Briefcase, title: "Diverse Expertise", desc: "Experience ranging from elite professional athletes to geriatric rehabilitation and complex injury recovery." }
            ].map((benefit, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-eom-light text-eom-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-eom-green group-hover:text-white transition-colors duration-500 shadow-sm border border-eom-green/5">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-heading text-eom-blue mb-4 tracking-tight uppercase">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium">{benefit.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {trainers.map((trainer, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group flex flex-col h-full">
                  <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
                    <Image 
                      src={trainer.image} 
                      fill 
                      alt={trainer.name} 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6">
                       <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl shadow-xl border border-white/20 flex flex-col items-center">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Exp.</span>
                          <span className="text-lg font-bold text-eom-blue leading-none">{trainer.exp}</span>
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-eom-blue/90 via-eom-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                       <Link href="/contact" className="w-full bg-white text-eom-blue py-5 rounded-2xl font-bold text-center text-lg hover:bg-eom-green hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 group/btn">
                         Book With {trainer.name.split(' ')[1]} <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                  </div>
                  
                  <div className="pt-8 space-y-5">
                    <div className="space-y-2">
                       <h3 className="text-2xl font-bold font-heading text-eom-blue tracking-tight leading-tight">{trainer.name}</h3>
                       <div className="inline-flex items-center gap-2 bg-eom-light text-eom-green px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest border border-eom-green/10">
                          {trainer.role}
                       </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-50 text-left">
                       <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Specializations</p>
                       <div className="flex flex-wrap gap-2">
                          {trainer.specs.map((spec, i) => (
                            <span key={i} className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600 hover:border-eom-green/20 transition-colors">
                               {spec}
                            </span>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
           <div className="bg-eom-light rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 border border-eom-green/10 shadow-sm">
              <div className="flex-1 space-y-5 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold font-heading text-eom-blue leading-tight tracking-tighter uppercase">Ready to train <br/>with the best?</h2>
                <p className="text-lg text-gray-600 font-medium max-w-lg">Take the first step towards elite performance with an expert assessment.</p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact" className="inline-flex items-center justify-center bg-eom-blue text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-eom-green transition-all shadow-xl hover:-translate-y-1 transform duration-300">
                  Book Free Consultation <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
