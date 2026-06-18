import React from 'react';

const items = [
  {
    emoji: '⚡',
    title: 'Tiempo Real',
    desc: 'Los pictogramas se actualizan al instante desde el celular del tutor, sin demoras.',
    color: 'from-upad-blue to-upad-light',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    emoji: '🎒',
    title: 'Totalmente Discreta',
    desc: 'Luce como una cartuchera escolar normal. Sin estigmas, sin diferencias visibles.',
    color: 'from-upad-green to-emerald-400',
    bg: 'bg-green-50 border-green-100',
  },
  {
    emoji: '📱',
    title: 'Reutiliza un celular viejo',
    desc: 'No necesitas comprar hardware nuevo. Cualquier smartphone Android funciona como pantalla.',
    color: 'from-upad-purple to-violet-400',
    bg: 'bg-purple-50 border-purple-100',
  },
  {
    emoji: '🔄',
    title: 'Sincronización Hogar-Aula',
    desc: 'Padres y docentes están siempre en la misma página. Un cambio, todos informados.',
    color: 'from-upad-orange to-amber-400',
    bg: 'bg-orange-50 border-orange-100',
  },
  {
    emoji: '🛡️',
    title: 'Diseño Antigolpes',
    desc: 'Material acolchado de alta densidad que protege el celular del desgaste escolar diario.',
    color: 'from-upad-pink to-rose-400',
    bg: 'bg-pink-50 border-pink-100',
  },
  {
    emoji: '🧠',
    title: 'Basado en Ciencia',
    desc: 'Diseñado siguiendo principios de apoyo visual y comunicación aumentativa (PECS, TEACCH).',
    color: 'from-upad-yellow to-amber-300',
    bg: 'bg-yellow-50 border-yellow-100',
  },
];

const comparisons = [
  { feature: 'Actualización en tiempo real',   upad: true,  velcro: false },
  { feature: 'Uso de hardware existente',      upad: true,  velcro: false },
  { feature: 'Conexión hogar-aula',            upad: true,  velcro: false },
  { feature: 'Diseño no estigmatizante',       upad: true,  velcro: false },
  { feature: 'Sin costo de impresión',         upad: true,  velcro: false },
];

export default function DifferentiatorsSection() {
  return (
    <section id="beneficios" className="bg-upad-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-upad-green/20 px-4 py-1 text-sm font-bold text-green-700 border border-green-200 mb-4">
            🏆 Diferenciadores
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Por qué{' '}
            <span className="text-upad-green">
              U-PAD es diferente?
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            No somos una app más. Somos el primer ecosistema físico-digital de apoyo para niños con TEA.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {items.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${item.bg}`}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl shadow mb-5`}>
                {item.emoji}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mx-auto max-w-2xl">
          <h3 className="text-xl font-extrabold text-center text-slate-800 mb-6">U-PAD vs. Tablero de Velcro</h3>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-slate-700">Característica</th>
                  <th className="text-center px-4 py-3 font-bold text-upad-blue">U-PAD 🎒</th>
                  <th className="text-center px-4 py-3 font-bold text-slate-400">Velcro 🗂️</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-5 py-3.5 text-slate-600">{row.feature}</td>
                    <td className="text-center px-4 py-3.5">
                      {row.upad ? <span className="text-green-500 text-lg">✅</span> : <span className="text-red-400 text-lg">❌</span>}
                    </td>
                    <td className="text-center px-4 py-3.5">
                      {row.velcro ? <span className="text-green-500 text-lg">✅</span> : <span className="text-red-400 text-lg">❌</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
