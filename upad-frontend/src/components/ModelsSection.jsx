import React, { useState } from 'react';

const models = [
  {
    id: 'classic',
    name: 'U-PAD Classic',
    emoji: '🔵',
    color: 'border-upad-blue bg-blue-50',
    badge: 'bg-upad-blue text-white',
    badgeText: 'Más Popular',
    price: 'S/ 89',
    image: '/cartuchera1.png',
    features: [
      'Compatibilidad con celulares de 5" a 6.7"',
      'Material acolchado estándar',
      'Ventana táctil antirreflejo',
      '2 compartimentos para útiles',
      'Colores: Azul, Gris, Negro',
    ],
  },
  {
    id: 'sport',
    name: 'U-PAD Sport',
    emoji: '🟡',
    color: 'border-upad-yellow bg-yellow-50',
    badge: 'bg-upad-yellow text-slate-800',
    badgeText: 'Edición Especial',
    price: 'S/ 109',
    image: '/cartuchera2.png',
    features: [
      'Resistencia al agua (IPX4)',
      'Material EVA reforzado',
      'Correa ajustable extra',
      '3 compartimentos para útiles',
      'Colores: Amarillo, Naranja, Rojo',
    ],
  },
  {
    id: 'eco',
    name: 'U-PAD Eco',
    emoji: '🟢',
    color: 'border-upad-green bg-green-50',
    badge: 'bg-upad-green text-white',
    badgeText: 'Sostenible',
    price: 'S/ 79',
    image: '/cartuchera3.png',
    features: [
      'Fabricado con materiales reciclados',
      'Certificación eco-friendly',
      'Ventana táctil antirreflejo',
      '2 compartimentos para útiles',
      'Colores: Verde, Turquesa',
    ],
  },
];

export default function ModelsSection() {
  const [active, setActive] = useState('classic');
  const selected = models.find((m) => m.id === active);

  return (
    <section id="modelos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-upad-purple/20 px-4 py-1 text-sm font-bold text-purple-700 border border-purple-200 mb-4">
            🎨 Nuestros Modelos
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Elige tu{' '}
            <span className="text-upad-purple">
              U-PAD ideal
            </span>
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {models.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold border-2 transition-all duration-200 ${
                active === m.id
                  ? m.color + ' shadow-sm scale-105'
                  : 'border-slate-200 text-slate-500 hover:border-slate-400'
              }`}
            >
              {m.emoji} {m.name}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto animate-fade-in">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-upad-yellow/30 to-upad-pink/20 blur-3xl" />
            </div>
            <img
              src={selected.image}
              alt={selected.name}
              className="relative w-full max-w-xs h-72 object-contain drop-shadow-xl"
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-extrabold text-slate-900">{selected.name}</h3>
              <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${selected.badge}`}>
                {selected.badgeText}
              </span>
            </div>
            <p className="text-4xl font-extrabold text-upad-blue mb-6">
              {selected.price}
              <span className="text-base font-normal text-slate-400 ml-1">/ unidad</span>
            </p>
            <ul className="space-y-3">
              {selected.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById('preventa-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 w-full rounded-full bg-gradient-to-r from-upad-blue to-upad-light py-3.5 text-sm font-extrabold text-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Reservar {selected.name} →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
