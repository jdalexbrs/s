import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Tienda', href: 'https://tienda.godestmc.website/', external: true },
    { name: 'Sobre Nosotros', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'ToS', path: '/tos' },
    { name: 'Políticas', path: '/privacy' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (item) => !item.external && location.pathname === item.path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://horizons-cdn.hostinger.com/c4ae1077-3f8f-4f6a-96bc-fdeda172aec5/7b7b0d3ff2ba3c4fb315c2e3ada99f91.png" alt="GodestMC Logo" className="h-10 w-10" />
            </motion.div>
            <span className="text-xl font-bold text-gradient">GodestMC</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 text-gray-300 hover:text-emerald-400 h-9 px-4 py-2"
                >
                  {item.name}
                </a>
              ) : (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`relative ${
                      isActive(item)
                        ? 'text-emerald-400'
                        : 'text-gray-300 hover:text-emerald-400'
                    } transition-colors`}
                  >
                    {item.name}
                    {isActive(item) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Button>
                </Link>
              )
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-emerald-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                    <div
                      className={`block px-4 py-2 rounded-lg ${
                        isActive(item)
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'text-gray-300 hover:bg-slate-800'
                      } transition-colors`}
                    >
                      {item.name}
                    </div>
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;