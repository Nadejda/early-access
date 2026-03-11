import { useMemo, useRef, useState } from 'react'

const FLOW_STEPS = ['phone', 'sms', 'details', 'referral', 'success']

const SOURCE_OPTIONS = [
  'Instagram',
  'X / Twitter',
  'YouTube',
  'Friend or colleague',
  'Search engine',
  'Other',
]

function App() {
  const [step, setStep] = useState('landing')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [details, setDetails] = useState({
    fullName: '',
    businessName: '',
    email: '',
  })
  const [referralCode, setReferralCode] = useState('')
  const [source, setSource] = useState(SOURCE_OPTIONS[0])

  const otpRefs = useRef([])

  const progress = useMemo(() => {
    const idx = FLOW_STEPS.indexOf(step)
    return idx === -1 ? 0 : idx + 1
  }, [step])

  const goToNext = () => {
    if (step === 'landing') {
      setStep('phone')
      return
    }

    if (step === 'phone') {
      if (phone.replace(/\D/g, '').length < 8) return
      setStep('sms')
      return
    }

    if (step === 'sms') {
      if (otp.some((digit) => !digit)) return
      setStep('details')
      return
    }

    if (step === 'details') {
      if (!details.fullName.trim() || !details.businessName.trim() || !details.email.trim()) return
      setStep('referral')
      return
    }

    if (step === 'referral') {
      setStep('success')
    }
  }

  const goBack = () => {
    if (step === 'phone') {
      setStep('landing')
      return
    }

    if (step === 'sms') {
      setStep('phone')
      return
    }

    if (step === 'details') {
      setStep('sms')
      return
    }

    if (step === 'referral') {
      setStep('details')
      return
    }
  }

  const handleOtpChange = (index, value) => {
    const cleaned = value.replace(/\D/g, '').slice(-1)
    const nextOtp = [...otp]
    nextOtp[index] = cleaned
    setOtp(nextOtp)

    if (cleaned && index < 3) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const canContinueFromPhone = phone.replace(/\D/g, '').length >= 8
  const canContinueFromSms = otp.every(Boolean)
  const canContinueFromDetails =
    details.fullName.trim() && details.businessName.trim() && details.email.trim()

  return (
    <main className="min-h-screen bg-[#061A67] px-0 py-0 text-white sm:grid sm:place-items-center sm:px-4 sm:py-6">
      <div className="relative mx-auto h-screen w-full max-w-[390px] overflow-hidden bg-[#081E65] shadow-[0_28px_80px_rgba(1,7,32,0.65)] sm:h-[812px] sm:rounded-[28px] sm:border sm:border-white/12">
        <GlowDecor />

        {step !== 'landing' && (
          <header className="relative z-10 flex items-center justify-between px-6 pb-3 pt-6">
            <button
              type="button"
              onClick={goBack}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
              aria-label="Go back"
            >
              ←
            </button>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/75">EARLY ACCESS</p>
            <div className="w-10" />
          </header>
        )}

        {step !== 'landing' && (
          <div className="relative z-10 px-6 pb-1">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[#00A3FF] transition-all duration-300"
                style={{ width: `${(progress / FLOW_STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        <section className="relative z-10 px-6 pb-8 pt-5">
          {step === 'landing' && <LandingScreen onNext={goToNext} />}

          {step === 'phone' && (
            <PhoneScreen
              phone={phone}
              setPhone={setPhone}
              onNext={goToNext}
              canContinue={canContinueFromPhone}
            />
          )}

          {step === 'sms' && (
            <SmsScreen
              phone={phone}
              otp={otp}
              onChange={handleOtpChange}
              onKeyDown={handleOtpKeyDown}
              inputRefs={otpRefs}
              onNext={goToNext}
              canContinue={canContinueFromSms}
            />
          )}

          {step === 'details' && (
            <DetailsScreen
              values={details}
              onChange={setDetails}
              onNext={goToNext}
              canContinue={canContinueFromDetails}
            />
          )}

          {step === 'referral' && (
            <ReferralScreen
              referralCode={referralCode}
              setReferralCode={setReferralCode}
              source={source}
              setSource={setSource}
              onNext={goToNext}
            />
          )}

          {step === 'success' && <SuccessScreen />}
        </section>
      </div>
    </main>
  )
}

function GlowDecor() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-64 w-64 rounded-full bg-[#1B6AFF]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-72 w-72 rounded-full bg-[#0E95FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(255,255,255,0.15),transparent_35%)]" />
    </>
  )
}

function LandingScreen({ onNext }) {
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

      <button
        type="button"
        onClick={onNext}
        className="mt-8 h-14 w-full rounded-2xl bg-[#0AA5FF] px-5 text-center text-[15px] font-semibold text-[#001B5A] transition hover:bg-[#30B1FF]"
      >
        Join early access
      </button>
    </div>
  )
}

function PhoneScreen({ phone, setPhone, onNext, canContinue }) {
  return (
    <div className="flex min-h-[700px] flex-col justify-between">
      <div>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#6AB8FF]">Phone number</p>
        <h2 className="mt-3 text-[30px] font-semibold leading-[1.15]">What number should we text?</h2>
        <p className="mt-3 text-sm leading-6 text-white/75">
          We will send a one-time verification code to continue your sign-up.
        </p>

        <label className="mt-8 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
          Mobile number
        </label>
        <div className="mt-2 flex items-center rounded-2xl border border-white/15 bg-white/8 px-3">
          <span className="border-r border-white/15 py-4 pr-3 text-sm text-white/80">+1</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(555) 000-0000"
            inputMode="tel"
            className="w-full bg-transparent px-3 py-4 text-[15px] text-white outline-none placeholder:text-white/45"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        className="mt-8 h-14 w-full rounded-2xl bg-[#0AA5FF] px-5 text-[15px] font-semibold text-[#001B5A] transition enabled:hover:bg-[#30B1FF] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/45"
      >
        Continue
      </button>
    </div>
  )
}

function SmsScreen({ phone, otp, onChange, onKeyDown, inputRefs, onNext, canContinue }) {
  return (
    <div className="flex min-h-[700px] flex-col justify-between">
      <div>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#6AB8FF]">Code from SMS</p>
        <h2 className="mt-3 text-[30px] font-semibold leading-[1.15]">Enter your 4-digit code</h2>
        <p className="mt-3 text-sm leading-6 text-white/75">
          We sent a code to <span className="font-medium text-white">{phone || 'your phone'}.</span>
        </p>

        <div className="mt-8 grid grid-cols-4 gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              value={digit}
              onChange={(event) => onChange(index, event.target.value)}
              onKeyDown={(event) => onKeyDown(event, index)}
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

      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        className="mt-8 h-14 w-full rounded-2xl bg-[#0AA5FF] px-5 text-[15px] font-semibold text-[#001B5A] transition enabled:hover:bg-[#30B1FF] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/45"
      >
        Verify code
      </button>
    </div>
  )
}

function DetailsScreen({ values, onChange, onNext, canContinue }) {
  const updateField = (key, value) => {
    onChange({ ...values, [key]: value })
  }

  return (
    <div className="flex min-h-[700px] flex-col justify-between">
      <div>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#6AB8FF]">A few more details</p>
        <h2 className="mt-3 text-[30px] font-semibold leading-[1.15]">Tell us about you</h2>
        <p className="mt-3 text-sm leading-6 text-white/75">
          This helps us personalize your onboarding and prioritize invited businesses.
        </p>

        <div className="mt-7 space-y-4">
          <Input
            label="Full name"
            placeholder="Jane Cooper"
            value={values.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
          />
          <Input
            label="Business name"
            placeholder="North Star Stores"
            value={values.businessName}
            onChange={(event) => updateField('businessName', event.target.value)}
          />
          <Input
            label="Email address"
            type="email"
            placeholder="jane@northstar.com"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        className="mt-8 h-14 w-full rounded-2xl bg-[#0AA5FF] px-5 text-[15px] font-semibold text-[#001B5A] transition enabled:hover:bg-[#30B1FF] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/45"
      >
        Continue
      </button>
    </div>
  )
}

function ReferralScreen({ referralCode, setReferralCode, source, setSource, onNext }) {
  return (
    <div className="flex min-h-[700px] flex-col justify-between">
      <div>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#6AB8FF]">Referral</p>
        <h2 className="mt-3 text-[30px] font-semibold leading-[1.15]">Have a referral?</h2>
        <p className="mt-3 text-sm leading-6 text-white/75">
          Referral details are optional, but they can unlock priority access and launch rewards.
        </p>

        <div className="mt-7 space-y-4">
          <Input
            label="Referral code (optional)"
            placeholder="EARLY-ACCESS-2026"
            value={referralCode}
            onChange={(event) => setReferralCode(event.target.value)}
          />
          <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
            How did you hear about us?
            <select
              value={source}
              onChange={(event) => setSource(event.target.value)}
              className="mt-2 h-14 w-full rounded-2xl border border-white/15 bg-white/8 px-4 text-[15px] text-white outline-none transition focus:border-[#4DBFFF] focus:bg-[#102C80]"
            >
              {SOURCE_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-[#0F2A7A]">
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={onNext}
          className="h-14 w-full rounded-2xl border border-white/20 bg-transparent px-5 text-[15px] font-semibold text-white/85 transition hover:bg-white/8"
        >
          Skip
        </button>
        <button
          type="button"
          onClick={onNext}
          className="h-14 w-full rounded-2xl bg-[#0AA5FF] px-5 text-[15px] font-semibold text-[#001B5A] transition hover:bg-[#30B1FF]"
        >
          Finish sign up
        </button>
      </div>
    </div>
  )
}

function SuccessScreen() {
  return (
    <div className="flex min-h-[744px] flex-col items-center justify-center py-6 text-center">
      <div className="grid h-24 w-24 place-items-center rounded-full border border-[#7CD5FF]/40 bg-[#0AA5FF]/20">
        <span className="text-5xl text-[#7CD5FF]">✓</span>
      </div>
      <h2 className="mt-8 text-[34px] font-semibold leading-tight">You&apos;re in!</h2>
      <p className="mt-4 max-w-[290px] text-[15px] leading-6 text-white/80">
        Thanks for joining our early access list. We&apos;ll text you first when your invite is
        ready.
      </p>
      <button
        type="button"
        className="mt-10 h-14 w-full rounded-2xl bg-[#0AA5FF] px-5 text-[15px] font-semibold text-[#001B5A] transition hover:bg-[#30B1FF]"
      >
        Go to dashboard
      </button>
    </div>
  )
}

function Input({ label, ...props }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
      {label}
      <input
        {...props}
        className="mt-2 h-14 w-full rounded-2xl border border-white/15 bg-white/8 px-4 text-[15px] text-white outline-none placeholder:text-white/40 transition focus:border-[#4DBFFF] focus:bg-[#102C80]"
      />
    </label>
  )
}

export default App
