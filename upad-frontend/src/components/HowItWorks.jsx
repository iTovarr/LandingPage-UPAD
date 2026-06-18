import React from 'react';

const steps = [
  {
    id: 1,
    emoji: '📱',
    name: 'Instala la app',
    description:
      'Descarga U-PAD en tu celular (Tutor) y en el celular viejo que usará el niño.',
    color: 'from-upad-blue to-upad-light',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    emoji: '🎒',
    name: 'Inserta en la cartuchera',
    description:
      'Coloca el celular del niño en la ventana táctil y segura de la cartuchera física U-PAD.',
    color: 'from-upad-green to-emerald-400',
    badge: 'bg-green-100 text-green-700',
  },
  {
    id: 3,
    emoji: '⚡',
    name: 'Sincroniza en tiempo real',
    description:
      'Actualiza rutinas o notifica cambios imprevistos desde tu app, que se reflejarán al instante.',
    color: 'from-upad-purple to-violet-400',
    badge: 'bg-purple-100 text-purple-700',
  },
];

export default function HowItWorks() {
  return (
    <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
        <svg viewBox="0 0 1200 24" className="w-full fill-upad-bg" preserveAspectRatio="none">
          <path d="M0,24 C300,0 900,0 1200,24 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-upad-yellow/30 px-4 py-1 text-sm font-bold text-amber-700 border border-amber-200 mb-4">
            🌟 Ecosistema Integrado
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Cómo funciona{' '}
            <span className="text-upad-blue">
              U-PAD?
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step number badge */}
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-bold ${step.badge}`}>
                  Paso {step.id}
                </span>

                {/* Emoji icon in gradient circle */}
                <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg text-4xl animate-bounce-gentle`}>
                  {step.emoji}
                </div>

                <dt className="text-xl font-extrabold leading-7 text-slate-900">
                  {step.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-slate-500">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
