import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function SmsCodePage({ phone, otp, onOtpChange, onOtpKeyDown, inputRefs, onNext, canContinue }) {
  return (
    <div className="flex min-h-[420px] flex-col">
      <BrandHeader rightLabel="Log in" className="px-4" />

      <DarkPanel className="mx-auto mt-4 w-[178px]">
        <h2 className="text-[13px] font-semibold leading-none text-white">Code from SMS</h2>
        <p className="mt-1 text-[5.5px] text-white/70">We sent it to {phone || '+234...000'}</p>
        <div className="mt-2 border-t border-white/20" />

        <div className="mt-2 grid grid-cols-6 gap-1.5">
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
              className="h-4 rounded-[3px] bg-[#4a5678] text-center text-[6.5px] font-semibold text-white outline-none"
            />
          ))}
        </div>
        <p className="mt-2 text-[4.5px] text-white/60">Get a new code in 32 sec</p>
        <button type="button" className="mt-1 text-[4.5px] underline text-white/80">
          Edit phone number
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="mt-2 h-5 w-full rounded-full bg-white text-[5.5px] font-semibold text-ea-primary-ink disabled:opacity-45"
        >
          Next
        </button>
      </DarkPanel>

      <ContactBlock className="mx-auto mt-auto w-[178px] pb-3 pt-3" />
    </div>
  )
}

export default SmsCodePage
