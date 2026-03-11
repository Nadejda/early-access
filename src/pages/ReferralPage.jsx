import ActionButton from '../components/ui/ActionButton'
import FormInput from '../components/ui/FormInput'
import PageIntro from '../components/ui/PageIntro'

function ReferralPage({
  options,
  referralCode,
  onReferralCodeChange,
  source,
  onSourceChange,
  onNext,
}) {
  return (
    <div className="flex min-h-[700px] flex-col justify-between">
      <div>
        <PageIntro
          eyebrow="Referral"
          title="Have a referral?"
          description="Referral details are optional, but they can unlock priority access and launch rewards."
        />

        <div className="mt-7 space-y-4">
          <FormInput
            label="Referral code (optional)"
            placeholder="EARLY-ACCESS-2026"
            value={referralCode}
            onChange={(event) => onReferralCodeChange(event.target.value)}
          />
          <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
            How did you hear about us?
            <select
              value={source}
              onChange={(event) => onSourceChange(event.target.value)}
              className="mt-2 h-14 w-full rounded-2xl border border-white/15 bg-white/8 px-4 text-[15px] text-white outline-none transition focus:border-[#4DBFFF] focus:bg-[#102C80]"
            >
              {options.map((option) => (
                <option key={option} value={option} className="bg-[#0F2A7A]">
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <ActionButton type="button" variant="secondary" onClick={onNext}>
          Skip
        </ActionButton>
        <ActionButton type="button" onClick={onNext}>
          Finish sign up
        </ActionButton>
      </div>
    </div>
  )
}

export default ReferralPage
