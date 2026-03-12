import PageIntro from '../components/ui/PageIntro'
import ActionButton from '../components/ui/ActionButton'

function PhoneInputPage({ phone, onPhoneChange, onNext, canContinue }) {
  return (
    <div className="flex min-h-flow-form flex-col justify-between">
      <div>
        <PageIntro
          eyebrow="Phone number"
          title="What number should we text?"
          description="We will send a one-time verification code to continue your sign-up."
        />

        <label className="mt-8 block text-control-label uppercase tracking-label text-white/60">
          Mobile number
        </label>
        <div className="mt-2 flex items-center rounded-2xl border border-white/15 bg-white/8 px-3">
          <span className="border-r border-white/15 py-4 pr-3 text-sm text-white/80">+1</span>
          <input
            value={phone}
            onChange={(event) => onPhoneChange(event.target.value)}
            placeholder="(555) 000-0000"
            inputMode="tel"
            className="w-full bg-transparent px-3 py-4 text-body text-white outline-none placeholder:text-white/45"
          />
        </div>
      </div>

      <ActionButton type="button" onClick={onNext} disabled={!canContinue} className="mt-8">
        Continue
      </ActionButton>
    </div>
  )
}

export default PhoneInputPage
