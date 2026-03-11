import ActionButton from '../components/ui/ActionButton'

function LandingPage({ onNext }) {
  return (
    <div className="flex min-h-[744px] flex-col items-start justify-between py-4">
      <div className="w-full">
        <span className="rounded-full border border-[#66D3FF]/30 bg-[#66D3FF]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#66D3FF]">
          Early access
        </span>
        <div className="mt-5 h-[168px] w-full rounded-3xl border border-white/12 bg-[linear-gradient(145deg,#1D4ED81A_10%,#1D4ED866_65%,#0EA5E91A_100%)] p-4">
          <div className="h-full w-full rounded-2xl border border-[#79D2FF]/20 bg-[radial-gradient(circle_at_75%_15%,rgba(121,210,255,0.4),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.2),transparent_40%)]" />
        </div>
        <h1 className="mt-5 text-[36px] font-semibold leading-[1.1]">
          Build your business
          <br />
          <span className="text-[#61CAFF]">faster.</span>
        </h1>
        <p className="mt-4 max-w-[295px] text-[15px] leading-6 text-white/80">
          Join a curated waitlist for SME tools designed to help you launch, collect payments, and
          grow with confidence.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <p className="text-sm font-medium text-white/90">What you get first:</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#61CAFF]" />
              Instant onboarding flow
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#61CAFF]" />
              Priority support and feedback access
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#61CAFF]" />
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
