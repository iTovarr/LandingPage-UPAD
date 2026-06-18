import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/cartuchera1.png',
    alt:   'Cartuchera U-PAD con ventana táctil y pictogramas en pantalla',
  },
  {
    image: '/cartuchera2.png',
    alt:   'Niño usando la cartuchera U-PAD en el aula',
  },
  {
    image: '/cartuchera3.png',
    alt:   'Detalle de la cartuchera U-PAD con compartimentos',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById('preventa-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100">

      {/* ── Floating decorative blobs ── */}
      <span className="absolute top-10  left-8   w-16 h-16 rounded-full bg-upad-yellow  opacity-60 animate-float-slow   blur-sm" />
      <span className="absolute top-32  right-12  w-10 h-10 rounded-full bg-upad-pink    opacity-60 animate-float-medium blur-sm" />
      <span className="absolute bottom-24 left-20  w-12 h-12 rounded-full bg-upad-green  opacity-50 animate-float-fast   blur-sm" />
      <span className="absolute top-1/2  right-8   w-8  h-8  rounded-full bg-upad-orange opacity-50 animate-float-slow" />
      <span className="absolute bottom-16 right-32  w-14 h-14 rounded-full bg-upad-purple opacity-40 animate-float-medium blur-sm" />
      <span className="absolute top-20  left-1/3  w-6  h-6  rounded-full bg-upad-blue   opacity-30 animate-bounce-gentle" />

      {/* ── Layout: text left / carousel right ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ─── Text column ─── */}
          <div className="animate-fade-in">
            {/* Fun badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-upad-yellow/30 px-4 py-1.5 text-sm font-bold text-amber-700 mb-6 border border-amber-300">
              🎒 Innovación educativa para niños con TEA
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Transforma un celular en el{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-upad-blue to-upad-light">
                andamiaje cognitivo
              </span>{' '}
              de tu hijo
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              La primera cartuchera física e inteligente que integra el celular
              de forma segura para mostrar rutinas en pictogramas en tiempo real,
              conectando el aula y el hogar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-gradient-to-r from-upad-blue to-upad-light px-8 py-4 text-lg font-extrabold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-gentle"
              >
                🚀 Únete a la Preventa
              </button>
              <button
                onClick={scrollToForm}
                className="rounded-full border-2 border-upad-blue px-8 py-4 text-lg font-bold text-upad-blue hover:bg-upad-blue hover:text-white transition-all duration-300"
              >
                Saber más
              </button>
            </div>

            {/* Social proof mini-stats */}
            <div className="mt-10 flex gap-6 flex-wrap">
              {[
                { emoji: '👨‍👩‍👧', label: 'Familias interesadas', value: '200+' },
                { emoji: '🏫', label: 'Docentes registrados', value: '80+' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/70 backdrop-blur rounded-2xl px-5 py-3 shadow-sm border border-white">
                  <p className="text-2xl font-extrabold text-upad-blue">{stat.emoji} {stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Carousel column ─── */}
          <div className="relative flex justify-center">
            {/* Decorative ring behind card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-upad-yellow/30 to-upad-pink/20 blur-2xl" />
            </div>

            {/* Card */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {slides.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide.image}
                  alt={slide.alt}
                  className={`w-full h-96 object-cover transition-opacity duration-700 absolute inset-0 ${
                    idx === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Placeholder height to keep card sized */}
              <div className="h-96" />

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === current
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge on image */}
            <div className="absolute -top-3 -right-3 bg-upad-green text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg animate-bounce-gentle">
              ✅ Segura & Táctil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
