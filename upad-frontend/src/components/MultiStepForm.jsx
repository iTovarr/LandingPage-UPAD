import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { registrarLead, registrarEncuesta } from '../api/upadApi'

const ansiedadOptions = [
  { value: 'Cambio de profesor/a sustituto/a', emoji: '👩🏫' },
  { value: 'Cancelación inesperada de actividad', emoji: '❌' },
  { value: 'Modificación del horario de clases', emoji: '🕐' },
  { value: 'Salida anticipada o tardía', emoji: '🚪' },
  { value: 'Cambio de salón o espacio', emoji: '🏫' },
]

const herramientaOptions = [
  { value: 'Tablero de velcro con pictogramas', emoji: '📋' },
  { value: 'App en tablet o celular', emoji: '📱' },
  { value: 'Agenda visual impresa', emoji: '📄' },
  { value: 'Comunicación verbal únicamente', emoji: '🗣️' },
  { value: 'Ninguna herramienta específica', emoji: '🚫' },
]

const interesOptions = [
  { value: 'Sí, definitivamente', emoji: '✅', description: 'Quiero ser de los primeros' },
  { value: 'Probablemente sí', emoji: '👍', description: 'Me interesa saber más' },
  { value: 'No estoy seguro/a', emoji: '🤔', description: 'Necesito más información' },
  { value: 'Probablemente no', emoji: '👎', description: 'No es para mí en este momento' },
]

export default function MultiStepForm() {
  const [sectionRef, isInView] = useInView()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState('')
  const [leadId, setLeadId] = useState(null)

  // Step A data
  const [leadData, setLeadData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    rol: '',
  })

  // Step B data
  const [encuestaData, setEncuestaData] = useState({
    pregunta1Ansiedad: '',
    pregunta2HerramientaActual: '',
    pregunta3InteresCompra: '',
  })

  const handleLeadChange = (field, value) => {
    setLeadData(prev => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleEncuestaChange = (field, value) => {
    setEncuestaData(prev => ({ ...prev, [field]: value }))
    setError('')
  }

  const validateStepA = () => {
    if (!leadData.nombreCompleto.trim()) return 'El nombre completo es obligatorio'
    if (leadData.nombreCompleto.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres'
    if (!leadData.correoElectronico.trim()) return 'El correo electrónico es obligatorio'
    const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRegex.test(leadData.correoElectronico)) return 'El formato del correo es inválido'
    if (!leadData.rol) return 'Selecciona si eres Padre/Madre o Docente'
    return null
  }

  const validateStepB = () => {
    if (!encuestaData.pregunta1Ansiedad) return 'Selecciona una respuesta para la pregunta 1'
    if (!encuestaData.pregunta2HerramientaActual) return 'Selecciona una respuesta para la pregunta 2'
    if (!encuestaData.pregunta3InteresCompra) return 'Selecciona una respuesta para la pregunta 3'
    return null
  }

  const handleNextStep = async () => {
    const validationError = validateStepA()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const result = await registrarLead(leadData)
      setLeadId(result.id)
      setCurrentStep(2)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitEncuesta = async () => {
    const validationError = validateStepB()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      await registrarEncuesta({
        leadId,
        ...encuestaData,
      })
      setIsComplete(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isComplete) {
    return (
      <section id="preventa" className="section-padding bg-gradient-to-br from-upad-700 via-indigo-700 to-violet-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="animate-bounce-in">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/30">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 animate-fade-in-up animation-delay-200">
            ¡Registro completado!
          </h2>
          <p className="text-xl text-blue-100/80 mb-6 animate-fade-in-up animation-delay-300">
            Gracias por ser parte del movimiento U-PAD.
            Te contactaremos cuando la cartuchera esté lista para envío.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-up animation-delay-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-semibold">Revisa tu correo para la confirmación</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="preventa" className="section-padding bg-gradient-to-br from-upad-700 via-indigo-700 to-violet-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative" ref={sectionRef}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 font-bold text-sm rounded-full border border-white/20 mb-4">
            🎒 Pre-venta + Encuesta
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Reserva tu cartuchera <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">U-PAD</span>
          </h2>
          <p className="text-lg text-blue-100/70">
            Completa el formulario y sé de los primeros en recibirla
          </p>
        </div>

        {/* Form Card */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Progress bar */}
          <div className="h-1.5 bg-slate-100">
            <div
              className="h-full bg-gradient-to-r from-upad-500 to-indigo-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: currentStep === 1 ? '50%' : '100%' }}
            />
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-4 px-8 pt-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-upad-50 text-upad-700'
                : 'bg-emerald-50 text-emerald-700'
            }`}>
              {currentStep > 1 ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="w-5 h-5 bg-upad-500 text-white rounded-full flex items-center justify-center text-xs">A</span>
              )}
              Tus datos
            </div>
            <div className="w-8 h-0.5 bg-slate-200 rounded-full" />
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              currentStep === 2
                ? 'bg-upad-50 text-upad-700'
                : 'bg-slate-50 text-slate-400'
            }`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                currentStep === 2 ? 'bg-upad-500 text-white' : 'bg-slate-200 text-slate-500'
              }`}>B</span>
              Encuesta
            </div>
          </div>

          <div className="p-8 md:p-10">
            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700 font-semibold text-sm">{error}</p>
              </div>
            )}

            {/* Step A: Registration */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={leadData.nombreCompleto}
                    onChange={(e) => handleLeadChange('nombreCompleto', e.target.value)}
                    placeholder="Ej: María García López"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={leadData.correoElectronico}
                    onChange={(e) => handleLeadChange('correoElectronico', e.target.value)}
                    placeholder="tu@correo.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    ¿Cuál es tu rol?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {['PADRE', 'DOCENTE'].map((rol) => (
                      <button
                        key={rol}
                        type="button"
                        onClick={() => handleLeadChange('rol', rol)}
                        className={`option-card justify-center ${
                          leadData.rol === rol ? 'selected' : ''
                        }`}
                      >
                        <span className="text-2xl">{rol === 'PADRE' ? '👨👩👧' : '👩🏫'}</span>
                        <span className="font-bold text-slate-700">
                          {rol === 'PADRE' ? 'Padre / Madre' : 'Docente'}
                        </span>
                        {leadData.rol === rol && (
                          <svg className="w-5 h-5 text-upad-500 absolute top-3 right-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  disabled={isSubmitting}
                  className="w-full btn-primary !rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Registrando...
                      </>
                    ) : (
                      <>
                        Siguiente: Encuesta rápida
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            )}

            {/* Step B: Survey */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in-up">
                {/* Question 1 */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Pregunta 1 de 3
                  </label>
                  <p className="text-lg font-extrabold text-slate-800 mb-4">
                    ¿Qué cambio de rutina escolar genera más ansiedad en el niño/a?
                  </p>
                  <div className="space-y-3">
                    {ansiedadOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleEncuestaChange('pregunta1Ansiedad', option.value)}
                        className={`option-card w-full ${
                          encuestaData.pregunta1Ansiedad === option.value ? 'selected' : ''
                        }`}
                      >
                        <span className="text-xl">{option.emoji}</span>
                        <span className="font-semibold text-slate-700 text-sm">{option.value}</span>
                        {encuestaData.pregunta1Ansiedad === option.value && (
                          <svg className="w-5 h-5 text-upad-500 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Pregunta 2 de 3
                  </label>
                  <p className="text-lg font-extrabold text-slate-800 mb-4">
                    ¿Qué herramienta usa actualmente para anticipar cambios de rutina?
                  </p>
                  <div className="space-y-3">
                    {herramientaOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleEncuestaChange('pregunta2HerramientaActual', option.value)}
                        className={`option-card w-full ${
                          encuestaData.pregunta2HerramientaActual === option.value ? 'selected' : ''
                        }`}
                      >
                        <span className="text-xl">{option.emoji}</span>
                        <span className="font-semibold text-slate-700 text-sm">{option.value}</span>
                        {encuestaData.pregunta2HerramientaActual === option.value && (
                          <svg className="w-5 h-5 text-upad-500 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Pregunta 3 de 3
                  </label>
                  <p className="text-lg font-extrabold text-slate-800 mb-4">
                    ¿Estaría dispuesto/a a probar la cartuchera U-PAD?
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {interesOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleEncuestaChange('pregunta3InteresCompra', option.value)}
                        className={`option-card flex-col items-start ${
                          encuestaData.pregunta3InteresCompra === option.value ? 'selected' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <span className="text-xl">{option.emoji}</span>
                          <span className="font-bold text-slate-700 text-sm">{option.value}</span>
                          {encuestaData.pregunta3InteresCompra === option.value && (
                            <svg className="w-5 h-5 text-upad-500 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 mt-1">{option.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  onClick={handleSubmitEncuesta}
                  disabled={isSubmitting}
                  className="w-full btn-primary !rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Completar registro
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
