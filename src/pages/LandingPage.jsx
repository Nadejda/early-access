import ActionButton from '../components/ui/ActionButton'

function LandingPage({ onNext }) {
  return (
    <div className="flex min-h-flow-main flex-col items-start justify-between py-4">
      <div className="w-full">
        <span className="rounded-full border border-ea-accent-soft/30 bg-ea-accent-soft/15 px-3 py-1 text-control-label uppercase tracking-eyebrow text-ea-accent-soft">
          Early access
        </span>
        <div className="mt-5 h-hero w-full rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(27,106,255,0.1)_10%,rgba(27,106,255,0.4)_65%,rgba(14,149,255,0.1)_100%)] p-4">
          <div className="h-full w-full rounded-2xl border border-ea-check/20 bg-[radial-gradient(circle_at_75%_15%,rgba(121,210,255,0.4),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.2),transparent_40%)]" />
        </div>
        <h1 className="mt-5 text-display-hero">
          Build your business
          <br />
          <span className="text-ea-accent">faster.</span>
        </h1>
        <p className="mt-4 max-w-content-max text-body text-white/80">
          Join a curated waitlist for SME tools designed to help you launch, collect payments, and
          grow with confidence.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <p className="text-sm font-medium text-white/90">What you get first:</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ea-accent" />
              Instant onboarding flow
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ea-accent" />
              Priority support and feedback access
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ea-accent" />
              Invite-only launch credits
            </li>
          </ul>
        </div>
      </div>

      <ActionButton type="button" onClick={onNext} className="mt-8 text-center">
        Join early access
      </ActionButton>
    </div>
  )
}

export default LandingPage
