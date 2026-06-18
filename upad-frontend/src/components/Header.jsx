import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#historia',      label: 'Historia'      },
  { href: '#beneficios',    label: 'Beneficios'    },
  { href: '#modelos',       label: 'Modelos'       },
  { href: '#tutoriales',    label: 'Tutoriales'    },
  { href: '#precios',       label: 'Precios'       },
  { href: '#equipo',        label: 'Equipo'        },
];

export default function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 focus:outline-none"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-upad-blue to-upad-light shadow-sm text-white font-extrabold text-lg">
              U
            </span>
            <span className="font-extrabold text-xl tracking-tight">
              <span className="text-upad-blue">U</span>
              <span className="text-slate-700">-PAD</span>
            </span>
          </button>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:text-upad-blue hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#preventa-form')}
              className="ml-3 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-blue-700 hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              🚀 Preventa
            </button>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-slate-100 transition-colors gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:text-upad-blue hover:bg-blue-50 transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#preventa-form')}
              className="mt-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-black shadow text-center hover:bg-blue-700 transition-colors"
            >
              🚀 Únete a la Preventa
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
