import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'

function LandingPage({ onNext }) {
  return (
    <div className="flex min-h-flow-main flex-col">
      <BrandHeader rightLabel="Log in" />

      <div className="relative mt-3 overflow-hidden rounded-panel bg-[radial-gradient(circle_at_60%_60%,#243B88_0%,#172D73_40%,#0D246A_70%,#0A1E5E_100%)] p-4">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[28px] border-white/10" />
        <div className="absolute -left-6 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border-[22px] border-white/8" />
        <div className="absolute right-4 top-6 h-36 w-28 rounded-[56px] bg-gradient-to-b from-white to-slate-200/90" />
        <div className="absolute right-7 top-[66px] h-14 w-9 rounded-full bg-[#0C2B7F]/75" />
        <div className="relative z-10 max-w-[210px]">
          <h1 className="text-panel-title">Business banking with a human touch</h1>
          <p className="mt-1 text-caption text-white/70">Early access starts in 23/09/24</p>
          <button
            type="button"
            onClick={onNext}
            className="mt-3 rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-ea-primary-ink"
          >
            Join early &amp; get bonuses
          </button>
        </div>
      </div>

      <div className="mt-2 overflow-hidden rounded-panel bg-ea-panel p-3">
        <p className="text-panel-h3">Early access benefits only</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[
            '90-day interest-free period',
            'Business loans — no colling',
            'Free POS terminal',
            '0% transfer fee — 50 monthly',
            'Free business tools suite',
            'Rewards for early access members',
          ].map((item) => (
            <div key={item} className="rounded-[8px] bg-white/10 p-2">
              <span className="mb-2 inline-grid h-5 w-5 place-items-center rounded-[4px] bg-ea-panel-2 text-[10px]">
                ◻
              </span>
              <p className="text-[9px] leading-tight text-white/85">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactBlock className="mt-auto pt-3" />
    </div>
  )
}

export default LandingPage
