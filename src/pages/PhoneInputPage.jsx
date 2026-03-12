import FigmaFrame from '../components/ui/FigmaFrame'

function PhoneInputPage({ onNext }) {
  return <FigmaFrame src="/figma_frames/phone.png" alt="Phone number screen" onNext={onNext} />
}

export default PhoneInputPage
