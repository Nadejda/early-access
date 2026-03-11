import ActionButton from '../components/ui/ActionButton'
import PageIntro from '../components/ui/PageIntro'

function SmsCodePage({ phone, otp, onOtpChange, onOtpKeyDown, inputRefs, onNext, canContinue }) {
  return (
    <div className="flex min-h-[700px] flex-col justify-between">
      <div>
        <PageIntro
          eyebrow="Code from SMS"
          title="Enter your 4-digit code"
          description={
            <>
              We sent a code to <span className="font-medium text-white">{phone || 'your phone'}.</span>
            </>
          }
        />

        <div className="mt-8 grid grid-cols-4 gap-3">
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
              className="h-14 rounded-2xl border border-white/15 bg-white/8 text-center text-xl font-semibold text-white outline-none transition focus:border-[#4DBFFF] focus:bg-[#102C80]"
            />
          ))}
        </div>

        <button
          type="button"
          className="mt-4 text-sm font-medium text-[#76CBFF] transition hover:text-[#96D7FF]"
        >
          Resend code
        </button>
      </div>

      <ActionButton type="button" onClick={onNext} disabled={!canContinue} className="mt-8">
        Verify code
      </ActionButton>
    </div>
  )
}

export default SmsCodePage
