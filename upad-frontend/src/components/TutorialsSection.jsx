import React from 'react';

const tutorials = [
  {
    id: 'app',
    emoji: '📱',
    title: 'Cómo usar la Aplicación',
    subtitle: 'Aprende a crear y gestionar pictogramas desde tu celular',
    color: 'from-upad-blue to-upad-light',
    bg: 'bg-blue-50 border-blue-100',
    steps: [
      'Descarga U-PAD desde Google Play Store',
      'Crea el perfil de tu niño',
      'Añade su rutina diaria con pictogramas',
      'Comparte acceso con el docente',
      'Actualiza en tiempo real cuando necesites',
    ],
  },
  {
    id: 'case',
    emoji: '🎒',
    title: 'Montaje de la Cartuchera',
    subtitle: 'Configura físicamente la cartuchera en menos de 2 minutos',
    color: 'from-upad-green to-emerald-400',
    bg: 'bg-green-50 border-green-100',
    steps: [
      'Abre el compartimento principal',
      'Coloca el celular del niño en el soporte interno',
      'Ajusta la tira de seguridad',
      'Cierra el panel táctil exterior',
      '¡Listo! La pantalla es visible y táctil',
    ],
  },
];

export default function TutorialsSection() {
  return (
    <section id="tutoriales" className="bg-upad-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-upad-blue/10 px-4 py-1 text-sm font-bold text-upad-blue border border-blue-200 mb-4">
            🎥 Tutoriales
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Empieza en{' '}
            <span className="text-upad-blue">
              minutos
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            U-PAD es sencillo de configurar. Aquí te mostramos cómo.
          </p>
        </div>

        {/* Tutorial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tutorials.map((tut) => (
            <div
              key={tut.id}
              className={`rounded-3xl border-2 p-8 ${tut.bg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Video placeholder */}
              <div className={`relative w-full h-48 rounded-2xl bg-gradient-to-br ${tut.color} mb-6 flex items-center justify-center shadow-inner overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,.1)_10px,rgba(255,255,255,.1)_20px)]" />
                <div className="flex flex-col items-center gap-3 z-10">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur flex items-center justify-center shadow-lg cursor-pointer hover:bg-white/50 transition-colors">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm font-semibold">Video próximamente</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{tut.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{tut.title}</h3>
                  <p className="text-sm text-slate-500 mb-5">{tut.subtitle}</p>
                  <ol className="space-y-2">
                    {tut.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tut.color} text-white text-xs font-bold flex items-center justify-center`}>
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
