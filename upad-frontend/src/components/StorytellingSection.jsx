import React from 'react';

export default function StorytellingSection() {
  return (
    <section id="historia" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">

          {/* Label */}
          <span className="inline-block rounded-full bg-upad-orange/20 px-4 py-1 text-sm font-bold text-orange-700 border border-orange-200 mb-6">
            💛 Nuestra Historia
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Nació de una{' '}
                <span className="text-upad-orange">
                  necesidad real
                </span>
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Todo comenzó cuando un miembro de nuestro equipo observó cómo un niño con TEA
                  enfrentaba cada mañana la misma batalla: la incertidumbre de lo que vendría después
                  en su jornada escolar.
                </p>
                <p>
                  Los tableros de velcro, aunque útiles, no podían actualizarse en tiempo real
                  cuando el horario cambiaba. Cada imprevisto generaba una crisis que el niño,
                  su familia y su maestra debían superar juntos, una y otra vez.
                </p>
                <p className="font-semibold text-slate-800">
                  Entonces nos preguntamos: ¿y si la tecnología que ya llevamos en el bolsillo
                  pudiera ser el puente entre el hogar y el aula?
                </p>
                <p>
                  Así nació <strong className="text-upad-blue">U-PAD</strong>: una cartuchera física
                  inteligente que convierte un smartphone en un apoyo visual dinámico, discreto
                  y siempre actualizado.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 border-l-4 border-upad-orange pl-5 italic text-slate-500">
                "La anticipación no es un lujo para los niños con TEA — es una necesidad fundamental
                para su autonomía y bienestar."
              </blockquote>
            </div>

            {/* Visual side */}
            <div className="relative">
              {/* Big color blob */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-upad-yellow/40 to-upad-orange/20 blur-3xl" />
              </div>

              {/* Stat cards */}
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { emoji: '🧒', value: '1 de 36', label: 'niños tiene diagnóstico TEA', color: 'bg-blue-50 border-blue-100' },
                  { emoji: '😰', value: '70%',      label: 'reporta ansiedad por imprevistos', color: 'bg-orange-50 border-orange-100' },
                  { emoji: '🗂️',  value: '3×',      label: 'más efectivos los apoyos dinámicos', color: 'bg-green-50 border-green-100' },
                  { emoji: '🏫', value: '85%',      label: 'de docentes no tiene herramientas digitales', color: 'bg-pink-50 border-pink-100' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border p-5 text-center shadow-sm hover:-translate-y-1 transition-transform duration-200 ${stat.color}`}
                  >
                    <p className="text-3xl mb-1">{stat.emoji}</p>
                    <p className="text-2xl font-extrabold text-slate-800">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
