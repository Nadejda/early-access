import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function PhoneInputPage({ phone, onPhoneChange, onNext, canContinue }) {
  return (
    <div className="flex min-h-flow-form flex-col">
      <BrandHeader rightLabel="Log in" />

      <DarkPanel className="mt-4">
        <h2 className="text-panel-h2">Early access</h2>
        <div className="mt-3 border-t border-ea-divider" />

        <label className="mt-3 block text-caption text-white/80">Phone number</label>
        <div className="mt-1 flex items-center rounded-[8px] bg-ea-input px-2">
          <span className="py-2 text-caption text-white/80">+234</span>
          <input
            value={phone}
            onChange={(event) => onPhoneChange(event.target.value)}
            placeholder=""
            inputMode="tel"
            className="w-full bg-transparent px-2 py-2 text-[12px] text-white outline-none placeholder:text-white/45"
          />
        </div>

        <p className="mt-3 text-caption font-semibold text-white">Benefits you&apos;ll get</p>
        <ul className="mt-2 space-y-2 text-[9px] text-white/80">
          <li className="flex items-center justify-between">
            <span>No interest on your first loan for 3 months</span>
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </li>
          <li className="flex items-center justify-between">
            <span>Business loans without colling</span>
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </li>
          <li className="flex items-center justify-between">
            <span>Free POS terminal</span>
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </li>
          <li className="flex items-center justify-between">
            <span>Funding line from 2% per month</span>
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </li>
          <li className="flex items-center justify-between">
            <span>0% fee business transfer — 50 monthly</span>
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </li>
        </ul>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="mt-3 h-7 w-full rounded-full bg-white text-[10px] font-semibold text-ea-primary-ink disabled:opacity-45"
        >
          Reserve place
        </button>
        <p className="mt-2 text-[8px] text-white/60">
          By clicking you agree to our Terms and Conditions and Privacy Policy.
        </p>
      </DarkPanel>

      <ContactBlock className="mt-auto pt-3" />
    </div>
  )
}

export default PhoneInputPage
