function GlowDecor() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-64 w-64 rounded-full bg-ea-glow-top/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-72 w-72 rounded-full bg-ea-glow-bottom/15 blur-3xl" />
    </>
  )
}

function MobileShell({ showHeader, progress, totalSteps, onBack, children }) {
  return (
    <main className="min-h-screen bg-ea-canvas px-0 py-0 text-white sm:grid sm:place-items-center sm:px-4 sm:py-6">
      <div className="relative mx-auto h-screen w-full max-w-shell overflow-hidden bg-ea-shell-2 shadow-shell sm:h-screen-mobile sm:rounded-[8px] sm:border sm:border-white/10">
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

        <section className="relative z-10 px-4 pb-6 pt-4">{children}</section>
      </div>
    </main>
  )
}

export default MobileShell
