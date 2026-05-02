'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Activity, Award, HeartPulse } from 'lucide-react';

const trainers = [
  {
    name: "Aparna Patra",
    role: "Female masseuse",
    category: "Massage Therapy",
    exp: "4+ years of experience",
    specialization: "deep tissue massage therapy",
    image: "/trainers/Aparna.jpg"
  },
  {
    name: "Sahil Shirsat",
    role: "Masseur",
    category: "Massage Therapy",
    exp: "3+ years of experience",
    specialization: "deep tissue therapy",
    image: "/trainers/Sahil.jpeg"
  },
  {
    name: "Jai Joshi",
    role: "Physiotherapy Specialist",
    category: "Physiotherapy",
    exp: "4+ years of experience",
    specialization: "Musculoskeletal science and sports",
    image: "/trainers/Jai.png"
  },
  {
    name: "Nidhi Shetty",
    role: "Physiotherapy Specialist",
    category: "Physiotherapy",
    exp: "3+ years of experience",
    specialization: "Musculoskeletal science and sports",
    image: "/trainers/Nidhi.jpeg"
  },
  {
    name: "Lokesh Rai",
    role: "Strength and Conditioning Coach",
    category: "Strength Training",
    exp: "18 years experience",
    specialization: "General fitness, geriatric training, strength and conditioning, injury prevention & rehab",
    image: "/trainers/Lokesh.png"
  },
  {
    name: "Nikita",
    role: "Physiotherapy Specialist",
    category: "Physiotherapy",
    exp: "",
    specialization: "Musculoskeletal care and rehabilitation",
    image: "/trainers/Nikita.jpeg"
  }
];

const categories = ["All", "Physiotherapy", "Strength Training", "Massage Therapy"];

export default function TrainersPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTrainers = activeCategory === "All" 
    ? trainers 
    : trainers.filter(t => t.category === activeCategory);

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return trainers.length;
    return trainers.filter(t => t.category === cat).length;
  };

  return (
    <div className="flex flex-col w-full font-sans min-h-screen bg-gray-50">
      
      {/* 1. SECTION HEADER */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 text-green-700 font-bold text-xs uppercase tracking-widest border border-green-200 shadow-sm"
          >
            <ShieldCheck size={16} /> Our Expert Team
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            Meet Our Experts
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Certified professionals dedicated to your recovery, strength, and performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px w-full max-w-md mx-auto bg-gray-200 mt-8"
          />
        </div>
      </section>

      {/* 2. MAIN TRAINER GRID WITH FILTERS */}
      <section className="relative pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* FILTER TABS */}
          <div className="mb-16 mt-4">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 overflow-x-auto pb-4 hide-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md ${
                      isActive 
                        ? "bg-blue-600 text-white shadow-blue-500/20" 
                        : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                    }`}
                  >
                    {cat} <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredTrainers.map((trainer) => (
                <motion.div
                  key={trainer.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <Image 
                      src={trainer.image} 
                      alt={trainer.name}
                      width={500}
                      height={500}
                      className="h-[320px] w-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{trainer.name}</h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{trainer.role}</p>
                    </div>

                    <div className="flex-grow space-y-4">
                      {trainer.exp && (
                        <div>
                          <span className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100 uppercase tracking-widest">
                            {trainer.exp}
                          </span>
                        </div>
                      )}

                      <div>
                        <p className="text-sm text-gray-500 font-medium line-clamp-2 leading-relaxed">
                          {trainer.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Visual Break */}
      <div className="border-t border-gray-200 my-10 max-w-7xl mx-auto w-full"></div>

      {/* 3. CLIENT RESULTS STRIP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Real Results. Real Recovery.</h2>
            <p className="text-lg text-gray-500 font-medium">Backed by data and driven by human-centric care.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { number: "500+", text: "Clients Recovered" },
              { number: "10,000+", text: "Sessions Delivered" },
              { number: "4.9★", text: "Client Satisfaction" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                 <span className="text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-tight">{stat.number}</span>
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY TRUST OUR TRAINERS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Why Trust Our Experts</h2>
              <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Medical grade precision applied to everyday movement and performance.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
             {[
               { icon: Award, title: "Certified Experts", text: "All trainers are clinically trained and certified professionals." },
               { icon: HeartPulse, title: "Injury-Focused Approach", text: "Programs designed with physiotherapy-backed safety." },
               { icon: Activity, title: "Proven Experience", text: "Years of hands-on experience across recovery and performance." }
             ].map((card, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
               >
                 <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 border border-gray-100">
                   <card.icon size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                 <p className="text-gray-600 font-medium leading-relaxed">{card.text}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Start Your Recovery Journey Today
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Work with certified experts dedicated to your performance, recovery, and long-term health.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact#consultation-form" 
              className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              Book Your First Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
