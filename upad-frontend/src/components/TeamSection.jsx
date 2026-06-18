import React from 'react';

const members = [
  {
    name:  'Angelo Vargas',
    role:  'Fundador & Lead Dev',
    emoji: '👨‍💻',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name:  'Angelo Ricasca',
    role:  'Arquitecto Spring Boot',
    emoji: '⚙️',
    color: 'bg-green-100 text-green-700',
  },
  {
    name:  'Maria Mansilla',
    role:  'Diseño UI/UX & React',
    emoji: '🎨',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    name:  'Anyelina Yolit',
    role:  'Investigación TEA',
    emoji: '🔬',
    color: 'bg-purple-100 text-purple-700',
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="bg-upad-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-upad-blue/10 px-4 py-1 text-sm font-bold text-upad-blue border border-blue-200 mb-4">
            👥 Nuestro Equipo
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            QUANTIC:{' '}
            <span className="text-upad-blue">
              Desarrolladores de U-PAD
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Un equipo apasionado por la tecnología inclusiva, comprometido con mejorar
            la calidad de vida de las familias TEA.
          </p>
        </div>

        {/* Team photo */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-40 rounded-full bg-gradient-to-br from-upad-blue/20 to-upad-purple/20 blur-3xl" />
            </div>
            <img
              src="/team.png"
              alt="Equipo QUANTIC — Desarrolladores de U-PAD"
              className="relative w-full max-w-lg rounded-3xl shadow-2xl border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Member cards */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Avatar circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm ${member.color}`}
              >
                {member.emoji}
              </div>

              {/* Name */}
              <h3 className="font-extrabold text-slate-900 text-sm leading-tight">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
