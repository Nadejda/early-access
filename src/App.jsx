import { useMemo, useRef, useState } from 'react'
import MobileShell from './components/layout/MobileShell'
import DetailsFormPage from './pages/DetailsFormPage'
import LandingPage from './pages/LandingPage'
import PhoneInputPage from './pages/PhoneInputPage'
import ReferralPage from './pages/ReferralPage'
import SmsCodePage from './pages/SmsCodePage'
import SuccessPage from './pages/SuccessPage'

const FLOW_STEPS = ['phone', 'sms', 'details', 'referral', 'success']

function App() {
  const [step, setStep] = useState('landing')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [details, setDetails] = useState({ fullName: '', businessName: '', email: '' })
  const [referralCode, setReferralCode] = useState('')
  const otpRefs = useRef([])

  const progress = useMemo(() => {
    const idx = FLOW_STEPS.indexOf(step)
    return idx === -1 ? 0 : idx + 1
  }, [step])

  const goToNext = () => {
    if (step === 'landing') return setStep('phone')
    if (step === 'phone') return phone.replace(/\D/g, '').length >= 8 ? setStep('sms') : null
    if (step === 'sms') return otp.every(Boolean) ? setStep('details') : null
    if (step === 'details') {
      const isValid = details.fullName.trim() && details.businessName.trim() && details.email.trim()
      return isValid ? setStep('referral') : null
    }
    if (step === 'referral') setStep('success')
  }

  const goBack = () => {
    if (step === 'phone') return setStep('landing')
    if (step === 'sms') return setStep('phone')
    if (step === 'details') return setStep('sms')
    if (step === 'referral') return setStep('details')
  }

  const handleOtpChange = (index, value) => {
    const cleaned = value.replace(/\D/g, '').slice(-1)
    const nextOtp = [...otp]
    nextOtp[index] = cleaned
    setOtp(nextOtp)
    if (cleaned && index < otp.length - 1) otpRefs.current[index + 1]?.focus()
  }

  const handleOtpKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus()
  }

  const canContinueFromPhone = phone.replace(/\D/g, '').length >= 8
  const canContinueFromSms = otp.every(Boolean)
  const canContinueFromDetails = details.fullName.trim() && details.businessName.trim() && details.email.trim()

  const renderPage = () => {
    if (step === 'landing') return <LandingPage onNext={goToNext} />
    if (step === 'phone') {
      return (
        <PhoneInputPage
          phone={phone}
          onPhoneChange={setPhone}
          onNext={goToNext}
          canContinue={canContinueFromPhone}
        />
      )
    }
    if (step === 'sms') {
      return (
        <SmsCodePage
          phone={phone}
          otp={otp}
          onOtpChange={handleOtpChange}
          onOtpKeyDown={handleOtpKeyDown}
          inputRefs={otpRefs}
          onNext={goToNext}
          canContinue={canContinueFromSms}
        />
      )
    }
    if (step === 'details') {
      return (
        <DetailsFormPage
          values={details}
          onChange={setDetails}
          onNext={goToNext}
          canContinue={canContinueFromDetails}
        />
      )
    }
    if (step === 'referral') {
      return (
        <ReferralPage
          referralCode={referralCode}
          onReferralCodeChange={setReferralCode}
          onNext={goToNext}
        />
      )
    }
    return <SuccessPage />
  }

  return (
    <MobileShell
      showHeader={false}
      progress={progress}
      totalSteps={FLOW_STEPS.length}
      onBack={goBack}
    >
      {renderPage()}
    </MobileShell>
  )
}

export default App
