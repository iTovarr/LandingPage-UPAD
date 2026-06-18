export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-upad-700 via-indigo-700 to-violet-800">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Floating blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-violet-400/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl animate-float-slow" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-[15%] w-16 h-16 border-2 border-white/10 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-32 left-[10%] w-12 h-12 border-2 border-white/10 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-[8%] w-8 h-8 bg-amber-400/20 rounded-lg rotate-45 animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-semibold">Pre-venta abierta — Cupos limitados</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
              Transforma un celular en el{' '}
              <span className="relative">
                <span className="relative z-10 text-amber-300">
                  andamiaje cognitivo
                </span>
              </span>{' '}
              de tu hijo
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
              La cartuchera que integra el celular de forma segura para mostrar
              <strong className="text-white font-bold"> pictogramas en tiempo real</strong>.
              Anticipa cambios de rutina, reduce crisis de ansiedad y fomenta la
              autonomía de niños con TEA en el aula.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <a href="#preventa" className="btn-primary text-center">
                <span className="flex items-center justify-center gap-2">
                  Reserva tu cartuchera
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a href="#como-funciona" className="btn-secondary text-center">
                Descubre cómo funciona
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-semibold">Envío a nivel nacional</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-semibold">Respaldo científico</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-semibold">Diseño inclusivo</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:flex justify-center animate-fade-in-up animation-delay-300">
            <div className="relative">
              {/* Main card - Cartuchera mockup */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-6 animate-float">
                {/* Phone screen simulation */}
                <div className="w-full h-48 bg-gradient-to-br from-upad-400/30 to-indigo-400/30 rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-3 mb-4">
                  <div className="text-4xl">📱</div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">🎨</div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">📚</div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">🎵</div>
                  </div>
                  <p className="text-white/70 text-xs font-semibold">Pictogramas en tiempo real</p>
                </div>
                {/* Pencil case items */}
                <div className="flex gap-3 justify-center">
                  <div className="w-10 h-24 bg-amber-400/30 rounded-lg border border-white/10" />
                  <div className="w-10 h-24 bg-emerald-400/30 rounded-lg border border-white/10" />
                  <div className="w-10 h-24 bg-rose-400/30 rounded-lg border border-white/10" />
                  <div className="w-10 h-24 bg-blue-400/30 rounded-lg border border-white/10" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-emerald-400 text-emerald-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-bounce-in animation-delay-600">
                ✓ Antigolpes
              </div>
              <div className="absolute -bottom-4 -left-4 bg-amber-400 text-amber-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-bounce-in animation-delay-500">
                ✓ Antirreflejo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L48 45C96 40 192 30 288 33C384 36 480 52 576 58C672 64 768 60 864 52C960 44 1056 32 1152 30C1248 28 1344 36 1392 40L1440 44V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
