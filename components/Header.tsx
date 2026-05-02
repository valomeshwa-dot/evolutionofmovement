'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-10 lg:h-12 w-auto min-w-[120px] flex items-center"
            >
              <Image 
                src="/images/eom-logo.jpeg" 
                alt="EOM Logo" 
                width={180}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-eom-green py-1
                  ${pathname === link.href ? 'text-eom-green' : 'text-gray-600'}
                `}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-eom-green"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact#consultation-form"
                className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white transition-all duration-300 shadow-sm hover:shadow-md hover:brightness-110 text-[10px] font-bold uppercase tracking-[0.2em] inline-flex items-center justify-center"
              >
                Book Your Consultation
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors
                    ${pathname === link.href ? 'bg-eom-light text-eom-green' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="space-y-3"
            >
              <Link
                href="/contact#consultation-form"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-[#1F3C88] text-white px-6 py-3.5 rounded-full font-bold uppercase tracking-widest shadow-sm hover:shadow-md hover:scale-[1.03] hover:brightness-110 transition-all duration-300 text-[9px] sm:text-[11px]"
              >
                Book Your Consultation
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
