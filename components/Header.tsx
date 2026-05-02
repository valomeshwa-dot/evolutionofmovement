'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import Image from 'next/image';

import { motion, AnimatePresence } from 'motion/react';
import { useBookingModal } from './BookingProvider';
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabaseClient";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useBookingModal();
  const { user } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showUserMenu && !target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showUserMenu]);


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
            {user ? (
              <div className="relative user-menu-container">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    {user.email?.split("@")[0]}
                  </span>
                  <span className="text-gray-400 text-xs ml-1">
                    ▼
                  </span>
                </button>



                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 py-2 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-gray-50 mb-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account</p>
                        <p className="text-xs font-medium text-gray-600 truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          window.location.href = "/profile";
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-700 transition-colors flex items-center gap-2"
                      >
                        Profile Dashboard
                      </button>
                      <button
                        onClick={async () => {
                          setShowUserMenu(false);
                          await supabase.auth.signOut();
                          window.location.reload();
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-500 text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => openModal()}
                className="text-[11px] font-bold uppercase tracking-wider text-eom-blue hover:text-eom-green transition-colors"
              >
                Login
              </button>
            )}


            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact#booking-form"
                className="ml-2 px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md hover:scale-105 text-sm font-bold uppercase tracking-wider inline-block"
              >
                Book Session
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
              {user ? (
                <div className="flex flex-col gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-500">Logged in as</span>
                  <Link 
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-eom-blue truncate hover:text-eom-green transition-colors"
                  >
                    {user.email}
                  </Link>
                  <div className="flex gap-4 mt-1">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.location.href = "/profile";
                      }}
                      className="text-eom-blue text-xs font-bold uppercase tracking-wider"
                    >
                      Profile
                    </button>
                    <button
                      onClick={async () => {
                        await supabase.auth.signOut();
                        window.location.reload();
                      }}
                      className="text-red-500 text-xs font-bold uppercase tracking-wider"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="w-full text-center py-3 rounded-lg text-eom-blue font-bold uppercase tracking-wider border border-eom-blue/20"
                >
                  Login
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="block w-full text-center bg-eom-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eom-green transition-colors"
              >
                Book Session
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
