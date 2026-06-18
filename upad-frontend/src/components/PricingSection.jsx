import React from 'react';

const plans = [
  {
    name: 'Básico',
    emoji: '🌱',
    price: 'Gratis',
    period: '',
    description: 'Perfecto para explorar U-PAD y ver si es lo que necesitas.',
    color: 'border-slate-200',
    btnColor: 'bg-slate-800 hover:bg-slate-700',
    features: [
      'App para 1 niño',
      'Hasta 10 pictogramas',
      'Sin sincronización en tiempo real',
      'Soporte por email',
    ],
    notIncluded: ['Sin compartir con docente', 'Sin actualizaciones automáticas'],
  },
  {
    name: 'Familia',
    emoji: '⭐',
    price: 'S/ 29',
    period: '/ mes',
    description: 'La solución completa para padres que quieren lo mejor para su hijo.',
    color: 'border-upad-blue ring-2 ring-upad-blue',
    btnColor: 'bg-gradient-to-r from-upad-blue to-upad-light hover:shadow-lg',
    popular: true,
    features: [
      'App para hasta 3 niños',
      'Pictogramas ilimitados',
      'Sincronización en tiempo real',
      'Compartir con docentes',
      'Notificaciones de cambio',
      'Soporte prioritario',
    ],
    notIncluded: [],
  },
  {
    name: 'Institución',
    emoji: '🏫',
    price: 'S/ 99',
    period: '/ mes',
    description: 'Para colegios y centros especializados que atienden varios alumnos.',
    color: 'border-upad-purple',
    btnColor: 'bg-gradient-to-r from-upad-purple to-violet-500 hover:shadow-lg',
    features: [
      'Niños ilimitados',
      'Pictogramas ilimitados',
      'Panel de administrador docente',
      'Reportes y estadísticas',
      'Integración con sistemas escolares',
      'Soporte dedicado 24/7',
      'Onboarding personalizado',
    ],
    notIncluded: [],
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-upad-yellow/20 px-4 py-1 text-sm font-bold text-amber-700 border border-amber-200 mb-4">
            💰 Precios
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Planes para cada{' '}
            <span className="text-amber-500">
              necesidad
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Cartuchera física disponible por separado desde <strong>S/ 79</strong>.
            Los planes son para la app de gestión de pictogramas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border-2 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-upad-blue px-4 py-1 text-xs font-extrabold text-white shadow">
                    ⭐ Más Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{plan.emoji}</span>
                <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 text-sm">{plan.period}</span>
              </div>

              <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span> {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="flex-shrink-0">✗</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('preventa-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full rounded-full py-3.5 text-sm font-extrabold text-white shadow transition-all duration-300 hover:scale-105 ${plan.btnColor}`}
              >
                Empezar con {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Cartuchera add-on note */}
        <div className="mt-12 rounded-2xl bg-upad-bg border border-slate-200 p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-600">
            🎒 <strong>Cartuchera física</strong>: U-PAD Classic <strong>S/ 89</strong> · Sport <strong>S/ 109</strong> · Eco <strong>S/ 79</strong> — compra única, sin mensualidad.
          </p>
        </div>

      </div>
    </section>
  );
}
