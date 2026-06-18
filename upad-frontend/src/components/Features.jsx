import React from 'react';

const features = [
  {
    emoji: '🛡️',
    name: 'Compartimento Antigolpes',
    description:
      'Diseño acolchado de alta densidad para proteger el celular de caídas y golpes en el entorno escolar.',
    accent: 'border-upad-blue bg-blue-50',
    emoji_bg: 'bg-blue-100',
  },
  {
    emoji: '✨',
    name: 'Ventana Táctil Antirreflejo',
    description:
      'Permite interactuar con la pantalla sin sacarla, evitando distracciones visuales o molestias por la luz.',
    accent: 'border-upad-green bg-green-50',
    emoji_bg: 'bg-green-100',
  },
  {
    emoji: '🤝',
    name: 'Diseño No Estigmatizante',
    description:
      'Luce como una cartuchera escolar moderna normal, promoviendo la integración sin señalar diferencias.',
    accent: 'border-upad-pink bg-pink-50',
    emoji_bg: 'bg-pink-100',
  },
  {
    emoji: '📐',
    name: 'Espacio Funcional',
    description:
      'Compartimentos adicionales para lápices, colores y útiles, cumpliendo su función principal.',
    accent: 'border-upad-orange bg-orange-50',
    emoji_bg: 'bg-orange-100',
  },
];

export default function Features() {
  return (
    <div className="bg-upad-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <span className="inline-block rounded-full bg-upad-pink/20 px-4 py-1 text-sm font-bold text-pink-700 border border-pink-200 mb-4">
            🎒 La Cartuchera Física
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Construida para el{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-upad-pink to-upad-orange">
              aula real
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Diseñada pensando en la durabilidad, la seguridad y la inclusión.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`flex gap-5 rounded-3xl p-7 border-2 ${feature.accent} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                <span className={`flex-shrink-0 h-14 w-14 rounded-2xl ${feature.emoji_bg} flex items-center justify-center text-3xl shadow-sm`}>
                  {feature.emoji}
                </span>
                <div>
                  <dt className="text-lg font-extrabold text-slate-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
