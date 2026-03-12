import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function PhoneInputPage({ phone, onPhoneChange, onNext, canContinue }) {
  return (
    <div className="flex min-h-[420px] flex-col">
      <BrandHeader rightLabel="Log in" className="px-4" />

      <DarkPanel className="mx-auto mt-2 w-[178px]">
        <h2 className="text-[13px] font-semibold leading-none text-white">Early access</h2>
        <div className="mt-2 border-t border-white/20" />

        <label className="mt-2 block text-[5.5px] font-semibold text-white/80">Phone number</label>
        <div className="mt-1 flex items-center rounded-[4px] bg-[#4a5678] px-1.5">
          <span className="py-1.5 text-[5.5px] text-white/80">+234</span>
          <input
            value={phone}
            onChange={(event) => onPhoneChange(event.target.value)}
            placeholder=""
            inputMode="tel"
            className="w-full bg-transparent px-1 py-1.5 text-[5.5px] text-white outline-none placeholder:text-white/45"
          />
        </div>

        <p className="mt-2 text-[5.5px] font-semibold text-white">Benefits you&apos;ll get</p>
        <ul className="mt-1.5 space-y-1.5 text-[5px] leading-[1.35] text-white/80">
          <li className="flex items-center justify-between">
            <span>No interest on your first loan for 3 months</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
          <li className="flex items-center justify-between">
            <span>Business loans without colling</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
          <li className="flex items-center justify-between">
            <span>Free POS terminal</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
          <li className="flex items-center justify-between">
            <span>Funding line from 2% per month. Stay fixed even as market rates move</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
          <li className="flex items-center justify-between">
            <span>0% fee business transfer — 50 monthly</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
          <li className="flex items-center justify-between">
            <span>Free booking, payroll, expense tracking and payment links</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
          <li className="flex items-center justify-between">
            <span>Rewards for being an early access member</span>
            <span className="h-2 w-2 rounded-[3px] bg-white/25" />
          </li>
        </ul>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="mt-2 h-5 w-full rounded-full bg-white text-[5.5px] font-semibold text-ea-primary-ink disabled:opacity-45"
        >
          Reserve place
        </button>
        <p className="mt-1.5 text-[4px] leading-[1.25] text-white/60">
          By clicking you agree to our Terms and Conditions and Privacy Policy.
        </p>
      </DarkPanel>

      <ContactBlock className="mx-auto mt-auto w-[178px] pb-3 pt-3" />
    </div>
  )
}

export default PhoneInputPage
