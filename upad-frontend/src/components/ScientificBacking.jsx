import React from 'react';

const stats = [
  { value: '85%', label: 'Reducción de crisis', color: 'text-upad-green', bg: 'bg-green-50 border-green-200' },
  { value: '3×',  label: 'Más autonomía',       color: 'text-upad-blue',  bg: 'bg-blue-50  border-blue-200'  },
  { value: '90%', label: 'Satisfacción docente', color: 'text-upad-purple',bg: 'bg-purple-50 border-purple-200'},
];

export default function ScientificBacking() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">

          {/* ── Text ── */}
          <div className="lg:pr-8">
            <span className="inline-block rounded-full bg-upad-purple/20 px-4 py-1 text-sm font-bold text-purple-700 border border-purple-200 mb-4">
              🔬 Respaldo Científico
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Anticipación que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-upad-purple to-upad-blue">
                reduce la ansiedad
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Los tableros estáticos de velcro limitan la adaptación ante imprevistos escolares
              (ausencia de un profesor, cambio de actividad, etc.).
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Al mostrar secuencias dinámicas en tiempo real, U-PAD permite al niño{' '}
              <strong className="text-slate-800">anticipar y procesar cambios</strong>, reduciendo
              significativamente las crisis de ansiedad y fomentando la autonomía.
            </p>

            {/* Mini stat cards */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className={`rounded-2xl border p-4 text-center ${s.bg}`}>
                  <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Infographic card ── */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-xl border border-slate-100 p-8">
            <h3 className="text-xl font-extrabold text-center text-slate-800 mb-8">
              📊 Impacto de la Anticipación Visual Dinámica
            </h3>

            <div className="space-y-6">
              {/* Bar 1 */}
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-slate-500">🗂 Tablero de velcro estático</span>
                  <span className="text-slate-400">20%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-slate-400 h-4 rounded-full transition-all duration-1000"
                    style={{ width: '20%' }}
                  />
                </div>
              </div>

              {/* Bar 2 */}
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-upad-blue">🎒 Cartuchera U-PAD</span>
                  <span className="text-upad-blue">85%</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-upad-blue to-upad-light h-4 rounded-full transition-all duration-1000"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>

              {/* Autonomy bar */}
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-upad-green">🌟 Autonomía reportada</span>
                  <span className="text-upad-green">72%</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-upad-green to-emerald-400 h-4 rounded-full"
                    style={{ width: '72%' }}
                  />
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-400 text-center italic">
              *Datos simulados basados en estudios sobre la efectividad de los apoyos visuales dinámicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
