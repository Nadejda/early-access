import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function SmsCodePage({ phone, otp, onOtpChange, onOtpKeyDown, inputRefs, onNext, canContinue }) {
  return (
    <div className="flex min-h-flow-form flex-col">
      <BrandHeader rightLabel="Log in" />

      <DarkPanel className="mt-5">
        <h2 className="text-panel-h2">Code from SMS</h2>
        <p className="mt-1 text-caption text-white/70">We sent it to {phone || '+234...000'}</p>
        <div className="mt-3 border-t border-ea-divider" />

        <div className="mt-3 grid grid-cols-6 gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              value={digit}
              onChange={(event) => onOtpChange(index, event.target.value)}
              onKeyDown={(event) => onOtpKeyDown(event, index)}
              inputMode="numeric"
              maxLength={1}
              className="h-6 rounded-[6px] bg-ea-input text-center text-[11px] font-semibold text-white outline-none"
            />
          ))}
        </div>
        <p className="mt-2 text-[8px] text-white/60">Get a new code in 32 sec</p>
        <button type="button" className="mt-1 text-[8px] underline text-white/80">
          Edit phone number
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="mt-3 h-7 w-full rounded-full bg-white text-[10px] font-semibold text-ea-primary-ink disabled:opacity-45"
        >
          Next
        </button>
      </DarkPanel>

      <ContactBlock className="mt-auto pt-3" />
    </div>
  )
}

export default SmsCodePage
