import { useState } from 'react'
import MobileShell from './components/layout/MobileShell'
import DetailsFormPage from './pages/DetailsFormPage'
import LandingPage from './pages/LandingPage'
import PhoneInputPage from './pages/PhoneInputPage'
import ReferralPage from './pages/ReferralPage'
import SmsCodePage from './pages/SmsCodePage'
import SuccessPage from './pages/SuccessPage'

const FLOW_STEPS = ['landing', 'phone', 'sms', 'details', 'referral', 'success']

function App() {
  const [step, setStep] = useState(FLOW_STEPS[0])

  const goToNext = () => {
    const currentIndex = FLOW_STEPS.indexOf(step)
    const nextStep = FLOW_STEPS[currentIndex + 1]
    if (nextStep) setStep(nextStep)
  }

  const renderPage = () => {
    if (step === 'landing') return <LandingPage onNext={goToNext} />
    if (step === 'phone') return <PhoneInputPage onNext={goToNext} />
    if (step === 'sms') return <SmsCodePage onNext={goToNext} />
    if (step === 'details') return <DetailsFormPage onNext={goToNext} />
    if (step === 'referral') return <ReferralPage onNext={goToNext} />
    return <SuccessPage />
  }

  return <MobileShell>{renderPage()}</MobileShell>
}

export default App
