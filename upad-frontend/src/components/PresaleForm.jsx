import React, { useState } from 'react';

const TOTAL_STEPS = 3;

const stepConfig = [
  { step: 1, emoji: '👤', label: 'Tus datos',  color: 'bg-upad-blue'   },
  { step: 2, emoji: '📝', label: 'Encuesta',   color: 'bg-upad-purple' },
  { step: 3, emoji: '🎉', label: '¡Listo!',    color: 'bg-upad-green'  },
];

export default function PresaleForm() {
  const [step, setStep]         = useState(1);
  const [loading, setLoading]   = useState(false);
  const [leadId, setLeadId]     = useState(null);
  const [error, setError]       = useState('');

  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    rol: 'PADRE',
  });

  const [surveyData, setSurveyData] = useState({
    pregunta1Ansiedad:          '',
    pregunta2HerramientaActual: '',
    pregunta3InteresCompra:     '',
  });

  /* ── Step 1: POST preventa ── */
  const handleNext = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8080/api/v1/preventa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        setLeadId(data.id ?? null);
        setStep(2);
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error ?? 'Hubo un error. ¿El correo ya está registrado?');
      }
    } catch {
      setError('No se pudo conectar con el servidor. ¿El backend está corriendo?');
    } finally {
      setLoading(false);
    }
  };

  /* ── Step 2: POST encuesta ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8080/api/v1/encuesta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...surveyData, leadId }),
      });
      if (res.ok) {
        setStep(3);
      } else {
        setError('Hubo un error al enviar la encuesta. Intenta nuevamente.');
      }
    } catch {
      setError('No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'mt-2 block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-upad-blue sm:text-sm transition-shadow';
  const labelCls = 'block text-sm font-bold leading-6 text-slate-700';
  const btnCls =
    'w-full rounded-full py-4 text-center text-base font-medium text-black shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100';

  return (
    <div id="preventa-form" className="bg-upad-bg py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-upad-yellow/30 px-4 py-1 text-sm font-bold text-amber-700 border border-amber-200 mb-4">
            🚀 Preventa exclusiva
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            ¡Sé de los primeros en tener una{' '}
            <span className="text-upad-blue">
              U-PAD!
            </span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {stepConfig.map((s) => (
              <div
                key={s.step}
                className={`flex flex-col items-center gap-1 flex-1 ${step >= s.step ? 'opacity-100' : 'opacity-30'} transition-opacity duration-500`}
              >
                <span className={`w-10 h-10 rounded-full flex items-center justify-center text-xl text-white ${step >= s.step ? s.color : 'bg-slate-300'} transition-colors duration-500 shadow`}>
                  {s.emoji}
                </span>
                <span className="text-xs font-bold text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-upad-blue to-upad-light rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-slate-100">

          {/* Error banner */}
          {error && (
            <div className="mb-6 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-semibold">
              ⚠️ {error}
            </div>
          )}

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                👤 Paso 1: Cuéntanos quién eres
              </h3>

              <div>
                <label className={labelCls}>Nombre Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María González"
                  value={formData.nombreCompleto}
                  onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Correo Electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={formData.correoElectronico}
                  onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>¿Eres Padre/Tutor o Docente?</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    { value: 'PADRE',   label: '👨‍👧 Padre / Tutor' },
                    { value: 'DOCENTE', label: '👩‍🏫 Docente / Especialista' },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, rol: opt.value })}
                      className={`rounded-xl border-2 py-3 text-sm font-bold transition-all duration-200 ${
                        formData.rol === opt.value
                          ? 'border-upad-blue bg-blue-50 text-upad-blue shadow-sm'
                          : 'border-slate-200 text-slate-500 hover:border-slate-400'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`${btnCls} bg-gradient-to-r from-upad-blue to-upad-light mt-2`}
              >
                {loading ? '⏳ Procesando...' : 'Siguiente: Encuesta breve →'}
              </button>
            </form>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                📝 Paso 2: Cuéntanos más
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Tus respuestas nos ayudan a mejorar U-PAD para la comunidad TEA. ¡Solo toma 1 minuto!
              </p>

              <div>
                <label className={labelCls}>
                  1. ¿Qué cambio de rutina genera más ansiedad en el niño?
                </label>
                <textarea
                  required
                  maxLength={500}
                  rows={2}
                  placeholder="Ej. Cambio de docente, salida no anunciada…"
                  value={surveyData.pregunta1Ansiedad}
                  onChange={(e) => setSurveyData({ ...surveyData, pregunta1Ansiedad: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>
                  2. ¿Qué herramienta usa actualmente para apoyar la rutina?
                </label>
                <textarea
                  required
                  maxLength={500}
                  rows={2}
                  placeholder="Ej. Tablero de velcro, cuaderno de pictogramas…"
                  value={surveyData.pregunta2HerramientaActual}
                  onChange={(e) => setSurveyData({ ...surveyData, pregunta2HerramientaActual: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>
                  3. ¿Estaría dispuesto a probar la cartuchera U-PAD?
                </label>
                <textarea
                  required
                  maxLength={500}
                  rows={2}
                  placeholder="Ej. Sí, me parece muy interesante…"
                  value={surveyData.pregunta3InteresCompra}
                  onChange={(e) => setSurveyData({ ...surveyData, pregunta3InteresCompra: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-full py-4 text-sm font-bold text-slate-600 border-2 border-slate-200 hover:border-slate-400 transition-colors"
                >
                  ← Volver
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-[2] ${btnCls} bg-gradient-to-r from-upad-purple to-upad-blue`}
                >
                  {loading ? '⏳ Enviando...' : '🎉 Finalizar y Enviar'}
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 3: Success ── */}
          {step === 3 && (
            <div className="text-center py-8 animate-fade-in">
              <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-5xl mb-6 animate-bounce-gentle">
                🎉
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                ¡Gracias por registrarte!
              </h3>
              <p className="text-slate-600 mb-6">
                Tu información fue enviada correctamente. Eres parte de la comunidad
                U-PAD y recibirás novedades muy pronto. 💙
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-5 py-2 text-sm font-bold text-green-700">
                ✅ Registro completado
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
