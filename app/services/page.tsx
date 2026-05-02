'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Activity, Dumbbell, Sun, Zap, Sparkles, Heart, ArrowRight } from 'lucide-react';

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

const services = [
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    desc: "Scientific diagnosis and manual therapy to relieve pain and restore function.",
    icon: Activity,
    image: "/images/about-hero.jpeg",
    includes: [
      "Injury recovery",
      "Pain management",
      "Improved mobility",
      "Preventative care"
    ]
  },
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    desc: "Build resilience and optimize your athletic performance.",
    icon: Dumbbell,
    image: "/images/about.jpeg",
    includes: [
      "Muscle strength",
      "Injury prevention",
      "Athletic performance",
      "Custom programs"
    ]
  },
  {
    id: "yoga",
    title: "Yoga",
    desc: "Enhance mobility, flexibility, and mind-body connection.",
    icon: Sun,
    image: "/images/yoga.jpeg",
    includes: [
      "Stress reduction",
      "Balance and posture",
      "Mind-body connection"
    ]
  },
  {
    id: "kickboxing",
    title: "Kickboxing",
    desc: "High-energy cardiovascular training and coordination.",
    icon: Zap,
    image: "/images/boxing_gym.png",
    includes: [
      "Cardio fitness",
      "Coordination",
      "Strength and endurance"
    ]
  },
  {
    id: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    desc: "Accelerate recovery and relieve chronic muscle tension.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1000",
    includes: [
      "Muscle recovery",
      "Pain relief",
      "Improved circulation"
    ]
  },
  {
    id: "geriatric-training",
    title: "Geriatric Training",
    desc: "Safe, effective movement strategies for seniors.",
    icon: Heart,
    image: "/images/home-hero.jpeg",
    includes: [
      "Balance improvement",
      "Fall prevention",
      "Strength maintenance"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <Image 
          src="/images/service.jpeg" 
          fill 
          className="object-cover" 
          alt="EOM Services" 
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-bold font-heading mb-6 text-white tracking-tight uppercase"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-2xl text-gray-100 mb-10 font-medium max-w-2xl mx-auto"
          >
            Personalised physiotherapy and performance training designed around your body and goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact#consultation-form" className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2">
              Book Your First Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services List - Alternating Split Layout */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-48">
          {services.map((service, idx) => (
            <FadeIn key={service.id} delay={0.1}>
              <div 
                id={service.id} 
                className={`flex flex-col items-center gap-16 lg:gap-24 group ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'
                }`}
              >
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-8 uppercase">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-eom-green font-bold text-xs tracking-widest uppercase">
                       <service.icon size={20} />
                       <span>Exclusive Program</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold font-heading text-eom-blue leading-tight tracking-tight">{service.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium normal-case">{service.desc}</p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-bold text-eom-blue uppercase tracking-widest">Includes:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 size={18} className="text-eom-green shrink-0" />
                          <span className="font-bold text-base tracking-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                     <Link href={`/contact?service=${service.id}#consultation-form`} className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2 group">
                      Book Your First Consultation <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                     </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-700 group-hover:shadow-2xl">
                    <Image 
                      src={service.image} 
                      fill 
                      className="object-cover transition-transform duration-1000 ease-in-out scale-[1.03] group-hover:scale-110" 
                      alt={service.title} 
                      unoptimized={service.image.startsWith('http')} 
                    />
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-10">
           <h2 className="text-4xl lg:text-6xl font-bold font-heading text-eom-blue tracking-tighter uppercase leading-tight">Ready to reclaim <br/>your movement?</h2>
           <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-medium">Join the evolution and start your journey towards peak physical performance today.</p>
           <Link href="/contact#consultation-form" className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2">
            Book Your First Consultation
           </Link>
        </div>
      </section>
    </div>
  );
}
