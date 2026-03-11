function GlowDecor() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-64 w-64 rounded-full bg-[#1B6AFF]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-72 w-72 rounded-full bg-[#0E95FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(255,255,255,0.15),transparent_35%)]" />
    </>
  )
}

function MobileShell({ showHeader, progress, totalSteps, onBack, children }) {
  return (
    <main className="min-h-screen bg-[#061A67] px-0 py-0 text-white sm:grid sm:place-items-center sm:px-4 sm:py-6">
      <div className="relative mx-auto h-screen w-full max-w-[390px] overflow-hidden bg-[#081E65] shadow-[0_28px_80px_rgba(1,7,32,0.65)] sm:h-[812px] sm:rounded-[28px] sm:border sm:border-white/12">
        <GlowDecor />

        {showHeader && (
          <header className="relative z-10 flex items-center justify-between px-6 pb-3 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
              aria-label="Go back"
            >
              ←
            </button>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/75">EARLY ACCESS</p>
            <div className="w-10" />
          </header>
        )}

        {showHeader && (
          <div className="relative z-10 px-6 pb-1">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[#00A3FF] transition-all duration-300"
                style={{ width: `${(progress / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        <section className="relative z-10 px-6 pb-8 pt-5">{children}</section>
      </div>
    </main>
  )
}

export default MobileShell
