'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, PhoneCall, Star, Activity, ShieldCheck, Zap, 
  Frown, Timer, TrendingDown, Monitor, Dumbbell, Sun, Sparkles, Heart 
} from 'lucide-react';
import { useBookingModal } from '@/components/BookingProvider';

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

export default function Home() {
  const { openModal } = useBookingModal();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16 flex items-center bg-white min-h-0 border-0">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-eom-blue)_0%,_transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eom-light text-eom-blue font-bold text-xs uppercase tracking-widest w-max border border-eom-blue/10">
              <Activity size={14} className="text-eom-green" /> Strength • Mobility • Function
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-gray-900 leading-[1.1] tracking-tighter">
              Fix Pain.<br/>
              Move Better.<br/>
              <span className="text-eom-green">Get Stronger.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed font-medium -mt-1">
              Personalised physiotherapy and performance training designed around your body, your data, and your goals.
            </p>
            <div className="flex flex-wrap gap-4 mt-0">
              <Link href="/contact#consultation-form" className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 w-max">
                Book Your Consultation <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/919820289337" target="_blank" rel="noopener noreferrer" className="bg-white text-eom-blue border-2 border-gray-100 px-10 py-5 rounded-full font-bold text-lg hover:border-eom-green hover:text-eom-green transition-all flex items-center gap-2 shadow-sm">
                <PhoneCall size={20} /> WhatsApp Now
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 font-bold">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, zIndex: 10 }}
                    className="w-10 h-10 rounded-full border-4 border-white overflow-hidden relative bg-gray-100 shadow-sm"
                  >
                    <Image src={`https://picsum.photos/seed/${i+10}/100/100`} fill alt="Client Avatar" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
              <p className="max-w-[200px] leading-tight">Trusted by <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-eom-green">500+</motion.span> athletes & professionals in Mumbai.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[350px] lg:h-[720px] rounded-[2rem] overflow-hidden group shadow-2xl"
          >
            <Image 
              src="/images/home-hero.jpeg" 
              fill 
              alt="EOM Fitness Studio" 
              className="object-cover transform scale-105 transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOUND FAMILIAR SECTION */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500 mb-1 block">The Struggle</span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-eom-blue tracking-tighter uppercase">Sound Familiar?</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Frown, text: "Constant body pain that won't go away.", color: "bg-red-50 text-red-500" },
                  { icon: Timer, text: "Injury recovery taking way too long.", color: "bg-orange-50 text-orange-500" },
                  { icon: TrendingDown, text: "Plateauing with no structured pathway.", color: "bg-yellow-50 text-yellow-500" },
                  { icon: Monitor, text: "Poor posture and stiffness from desk jobs.", color: "bg-blue-50 text-blue-500" }
                ].map((problem, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-default"
                  >
                    <div className={`w-9 h-9 shrink-0 ${problem.color} rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12`}>
                      <problem.icon size={18} />
                    </div>
                    <span className="text-gray-700 text-sm lg:text-base font-bold self-center leading-relaxed">{problem.text}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-eom-blue text-white p-12 lg:p-20 rounded-[3.5rem] shadow-2xl relative overflow-hidden ring-8 ring-eom-blue/5 scale-105">
              <div className="absolute top-0 right-0 p-12 transform translate-x-1/4 -translate-y-1/4 opacity-10">
                <ShieldCheck size={200} className="text-eom-green" />
              </div>
              <div className="relative z-10 space-y-8">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-eom-green">Our Approach</span>
                <h2 className="text-4xl lg:text-6xl font-bold font-heading text-white leading-tight uppercase tracking-tighter">The EOM Solution</h2>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-medium max-w-lg">
                  EOM combines targeted physiotherapy and performance training to <strong className="text-white border-b-2 border-[#34d399] brightness-125 font-bold">fix the root cause</strong>, not just the symptoms. We focus on long-term resilience over quick fixes.
                </p>
                <div className="pt-6">
                  <Link href="/services" className="inline-flex items-center gap-4 bg-eom-green text-white px-12 py-6 rounded-full font-bold text-lg lg:text-xl hover:bg-white hover:text-eom-green transition-all shadow-lg transform hover:-translate-y-1">
                    Discover Our Methodology <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-eom-green mb-2 block">What We Do</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-eom-blue tracking-tight">Personalised Care Programs</h2>
            </div>
            <Link href="/services" className="text-eom-blue font-bold flex items-center gap-2 hover:text-eom-green transition-colors pb-1 border-b-2 border-currentColor text-sm tracking-tight transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Physiotherapy", desc: "Scientific diagnosis and manual therapy to relieve pain and restore full function." },
              { icon: Dumbbell, title: "Strength & Conditioning", desc: "Performance-focused training to build resilience and optimize athletic output." },
              { icon: Sun, title: "Yoga", desc: "Strategic mobility flow to enhance flexibility, balance, and mind-body resilience." },
              { icon: Zap, title: "Kickboxing", desc: "High-intensity cardio conditioning and agility work for peak physical fitness." },
              { icon: Sparkles, title: "Deep Tissue Massage", desc: "Recovery-focused therapy to release chronic tension and accelerate healing." },
              { icon: Heart, title: "Geriatric Training", desc: "Safe, data-driven movement strategies designed for senior mobility and safety." },
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href="/services" className="group block h-full">
                  <div className="bg-white border-2 border-gray-50 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-eom-green/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                    <div className="w-14 h-14 bg-eom-light rounded-xl flex items-center justify-center text-eom-green mb-6 group-hover:bg-eom-green group-hover:text-white transition-colors duration-300">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-eom-blue">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium flex-grow">{service.desc}</p>
                    <div className="flex items-center font-bold text-eom-green group-hover:gap-2 transition-all text-sm">
                      <span>Learn More</span> <ArrowRight size={16} className="translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY EOM SECTION */}
      <section className="py-32 bg-eom-blue text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-eom-blue via-[#0a1e36] to-eom-blue opacity-100"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-eom-green">The Differentiator</span>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">Why EOM is Not a Standard Gym</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Data-Driven Recovery", desc: "Scientific metrics and movement screens guide every single phase of your training." },
              { title: "Bespoke Programs", desc: "We don't use templates. Every drill is built specifically for your biomechanics." },
              { icon: Activity, title: "Bridging the Gap", desc: "We combine the precision of clinical rehab with the intensity of elite performance." },
              { title: "Integrative Team", desc: "Specialists across physio, strength, and yoga working together on your case." }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative">
                <div className="w-10 h-1 bg-eom-green mb-6"></div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{feature.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-32 bg-gray-50 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-eom-green mb-2 block">Success Stories</span>
            <h2 className="text-2xl lg:text-4xl font-bold font-heading text-eom-blue tracking-tight">Verified Client Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Vikram Malhotra", role: "Elite Squash Player", text: "EOM completely changed how my body feels. The tailored approach fixed my shoulder pain when nothing else worked." },
              { name: "Ananya Shah", role: "Corporate Executive", text: "Dealing with chronic back pain for years, the structured posture correction at EOM was a lifesaver. Highly recommend." },
              { name: "Karan Johar", role: "Fitness Enthusiast", text: "The cross-training between Physiotherapy and Strength coaching is unlike any other studio in Colaba." }
            ].map((client, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow relative">
                  <div className="flex gap-1 text-eom-green mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 mb-8 text-base italic leading-relaxed font-medium flex-grow">"{client.text}"</p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden relative bg-eom-light shrink-0 shadow-inner">
                      <Image src={`https://picsum.photos/seed/res${idx+20}/150/150`} fill alt="Verified Client" className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-eom-blue text-base leading-tight">{client.name}</h4>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{client.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 lg:py-36 bg-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-bold font-heading mb-6 text-eom-blue tracking-tighter leading-tight uppercase">Your body can perform better. <br/>Start today.</h2>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">Stop living with pain or hitting plateaus. Let our experts build the right path for your success.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <Link href="/contact#consultation-form" className="bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest flex items-center justify-center">
                Book Your First Consultation
              </Link>
              <a href="tel:+919820289337" className="bg-white text-eom-blue border-2 border-gray-100 px-10 py-5 rounded-full font-bold text-lg hover:border-eom-green hover:text-eom-green transition-all flex items-center gap-3">
                <PhoneCall size={20} /> Call the Studio
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
