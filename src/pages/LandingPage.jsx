import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import landingHero from '../assets/landing_hero.png'
import landingTicket from '../assets/landing_ticket.png'

function LandingPage({ onNext }) {
  return (
    <div className="relative flex min-h-[480px] flex-col">
      <BrandHeader rightLabel="Log in" className="px-1" />

      <div className="relative mt-1 overflow-hidden rounded-[7px] border border-white/10 bg-[#051751]">
        <img src={landingHero} alt="" className="h-[139px] w-full object-cover" />

        <div className="grid grid-cols-2 gap-[2px] p-[3px]">
          <BenefitCard
            title="Business loans — no colling"
            text="Borrow when your business actually needs it."
            icon="↗"
          />
          <BenefitCard title="Free POS terminal" text="A free POS terminal in your first 3 months." icon="⬛" />
          <BenefitCard
            title="0% transfer fee — 50 monthly"
            text="Transfers, payroll and bills for less."
            icon="⇄"
          />
          <BenefitCard title="Free business tools suite" text="Invoices, links and collections." icon="👜" />
        </div>

        <div className="h-[26px] rounded-[5px] bg-[#2f3b5a]/80 p-[5px] text-[3.2px] text-white/55">No expiry</div>
      </div>

      <div className="relative mt-1.5 h-[59px] overflow-hidden rounded-[7px] border border-white/10 bg-[#061752]">
        <img src={landingTicket} alt="" className="absolute -right-1 bottom-0 h-[50px] w-[90px] object-contain opacity-90" />
      </div>

      <div className="mx-1 mt-1">
        <ContactBlock className="mt-2" />
      </div>

      <button type="button" onClick={onNext} aria-label="Next" className="absolute inset-0 z-10">
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}

function BenefitCard({ title, text, icon }) {
  return (
    <div className="rounded-[4px] border border-white/10 bg-[#2f3b5a]/80 p-1.5">
      <span className="inline-grid h-2.5 w-2.5 place-items-center rounded-[2px] bg-[#14254d] text-[4px] text-white/80">
        {icon}
      </span>
      <p className="mt-1 text-[4px] font-semibold leading-[1.2] text-white/90">{title}</p>
      <p className="mt-0.5 text-[3.4px] leading-[1.25] text-white/60">{text}</p>
    </div>
  )
}

export default LandingPage
