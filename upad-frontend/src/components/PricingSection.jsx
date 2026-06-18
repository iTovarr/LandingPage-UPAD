import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────
// Plan data
// ─────────────────────────────────────────────────────────────────────
const plans = [
  {
    id:          'free',
    name:        'Free',
    tagline:     'Básico',
    emoji:       '🌱',
    price:       '$0',
    period:      '',
    priceNote:   'Para siempre',
    description: 'Ideal para conocer el ecosistema U-PAD y dar los primeros pasos.',
    popular:     false,
    accentBg:    'bg-slate-50',
    accentBorder:'border-slate-200',
    badgeBg:     'bg-slate-700 text-white',
    btnBg:       'bg-slate-800 hover:bg-slate-700',
    checkColor:  'text-slate-500',
    features: [
      'Acceso a la app básica de estructuración de rutinas.',
      'Planos digitales para 1 modelo de cartuchera estándar.',
      'Tutorial base de montaje físico.',
      'Alertas visuales simples para el usuario.',
    ],
    notIncluded: [
      'Modelos y adaptaciones adicionales',
      'Métricas de seguimiento',
      'Sincronización familiar',
      'Soporte prioritario',
    ],
  },
  {
    id:          'premium',
    name:        'Premium',
    tagline:     'Andamiaje Completo',
    emoji:       '⭐',
    price:       '$4.99',
    period:      '/ mes',
    priceNote:   'o $49.99 / año — ahorra 2 meses',
    description: 'La experiencia completa de andamiaje cognitivo para reducir la ansiedad en el aula real.',
    popular:     true,
    accentBg:    'bg-blue-50',
    accentBorder:'border-blue-400',
    badgeBg:     'bg-blue-600 text-black',
    btnBg:       'bg-blue-600 hover:bg-blue-700',
    checkColor:  'text-blue-600',
    features: [
      'Todas las funciones del plan Free.',
      'Acceso ilimitado a todos los modelos y adaptaciones de la cartuchera.',
      'Métricas avanzadas y seguimiento de reducción de ansiedad.',
      'Sincronización familiar (múltiples tutores/cuidadores en una cuenta).',
      'Soporte prioritario de nuestro equipo técnico y pedagógico.',
    ],
    notIncluded: [],
  },
];

// ─────────────────────────────────────────────────────────────────────
// Feature row helper
// ─────────────────────────────────────────────────────────────────────
function FeatureRow({ text, included, checkColor }) {
  return (
    <li className="flex items-start gap-3">
      {included ? (
        <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold ${checkColor}`}>
          ✓
        </span>
      ) : (
        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-400">
          ✗
        </span>
      )}
      <span className={`text-sm leading-relaxed ${included ? 'text-slate-700' : 'text-slate-400 line-through decoration-slate-300'}`}>
        {text}
      </span>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="precios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700 border border-amber-200 mb-4">
            💰 Planes y Precios
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Un plan para cada{' '}
            <span className="text-amber-500">necesidad</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Empieza gratis y escala cuando estés listo. La cartuchera física se adquiere
            por separado (desde <strong>$22.99</strong>).
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center rounded-full bg-slate-100 p-1 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`rounded-full px-5 py-2 text-sm font-medium text-black transition-all duration-200 ${
                billing === 'monthly' ? 'bg-white shadow-sm' : 'hover:bg-white/60'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`rounded-full px-5 py-2 text-sm font-medium text-black transition-all duration-200 ${
                billing === 'yearly' ? 'bg-white shadow-sm' : 'hover:bg-white/60'
              }`}
            >
              Anual
              <span className="ml-1.5 rounded-full bg-green-100 text-green-700 text-xs px-2 py-0.5 font-medium">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* ── Plan cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.accentBg} ${plan.accentBorder}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`rounded-full px-5 py-1.5 text-xs font-medium shadow ${plan.badgeBg}`}>
                    ⭐ Más Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{plan.emoji}</span>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {plan.tagline}
                  </p>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {plan.name}
                  </h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">
                    {plan.price === '$4.99' && billing === 'yearly' ? '$3.99' : plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-400 text-base font-medium">{plan.period}</span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {plan.price === '$4.99' && billing === 'yearly'
                    ? 'Facturado como $47.88/año'
                    : plan.priceNote}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-6 border-t border-slate-200 pt-4">
                {plan.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <FeatureRow
                    key={f}
                    text={f}
                    included={true}
                    checkColor={plan.checkColor}
                  />
                ))}
                {plan.notIncluded.map((f) => (
                  <FeatureRow
                    key={f}
                    text={f}
                    included={false}
                    checkColor={plan.checkColor}
                  />
                ))}
              </ul>

              {/* CTA button */}
              <button
                onClick={() =>
                  document.getElementById('preventa-form')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`w-full rounded-full py-4 text-base font-medium text-black shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ${plan.btnBg}`}
              >
                {plan.id === 'free' ? 'Empezar Gratis →' : 'Empezar con Premium →'}
              </button>

              {plan.id === 'premium' && (
                <p className="mt-3 text-center text-xs text-slate-400">
                  Sin compromiso. Cancela cuando quieras.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── Cartuchera add-on note ──────────────────────── */}
        <div className="mt-14 rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center">
          <p className="text-sm font-medium text-slate-600">
            🎒 <strong>Cartuchera Física U-PAD</strong>: Eco desde{' '}
            <strong>$22.99</strong> · Classic{' '}
            <strong>$26.99</strong> · Sport{' '}
            <strong>$32.99</strong> — compra única, sin mensualidad.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            La app funciona con cualquier smartphone Android. No se requiere hardware especial.
          </p>
        </div>

      </div>
    </section>
  );
}
