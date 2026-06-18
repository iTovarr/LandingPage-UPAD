import React from 'react';

const collaborators = [
  {
    name: 'Tecsup',
    description: 'Instituto tecnológico que tutoriza y respalda el desarrollo técnico del proyecto.',
    emoji: '🏛️',
    color: 'bg-blue-50 border-blue-200',
    text: 'text-blue-800',
  },
  {
    name: 'FabLab',
    description: 'Laboratorio de fabricación digital que apoya el prototipado físico de la cartuchera.',
    emoji: '🔧',
    color: 'bg-orange-50 border-orange-200',
    text: 'text-orange-800',
  },
];

export default function CollaboratorsSection() {
  return (
    <section id="colaboradores" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="rounded-3xl bg-gradient-to-br from-upad-blue/5 to-upad-purple/5 border border-slate-100 p-10 text-center shadow-sm">

          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
            En compañía y tutoría de
          </p>
          <h2 className="text-2xl font-extrabold text-slate-800 mb-8">
            Nuestros Colaboradores 🤝
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-xl mx-auto">
            {collaborators.map((c) => (
              <div
                key={c.name}
                className={`rounded-2xl border-2 p-6 ${c.color} hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
              >
                <span className="text-5xl block mb-3">{c.emoji}</span>
                <h3 className={`text-xl font-extrabold mb-2 ${c.text}`}>{c.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-400">
            ¿Quieres ser colaborador u obtener más información?{' '}
            <a href="mailto:hola@upad.app" className="text-upad-blue font-semibold hover:underline">
              Contáctanos
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
