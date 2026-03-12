function GlowDecor() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-110px] top-[-120px] h-56 w-56 rounded-full bg-ea-glow-top/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-90px] h-56 w-56 rounded-full bg-ea-glow-bottom/10 blur-3xl" />
    </>
  )
}

function MobileShell({ showHeader, progress, totalSteps, onBack, children }) {
  return (
    <main className="min-h-screen bg-[#091f78] px-0 py-0 text-white sm:grid sm:place-items-center sm:px-4 sm:py-6">
      <div className="relative mx-auto w-full max-w-[421px] overflow-hidden bg-[#11298a] shadow-shell sm:rounded-[6px] sm:border sm:border-white/10">
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
            <p className="text-control-label tracking-eyebrow text-white/75">EARLY ACCESS</p>
            <div className="w-10" />
          </header>
        )}

        {showHeader && (
          <div className="relative z-10 px-6 pb-1">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-ea-progress transition-all duration-300"
                style={{ width: `${(progress / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        <section className="relative z-10 px-3 pb-4 pt-3">{children}</section>
      </div>
    </main>
  )
}

export default MobileShell
