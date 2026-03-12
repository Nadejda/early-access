import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function SuccessPage() {
  return (
    <div className="flex min-h-flow-main flex-col">
      <BrandHeader rightIsClose />

      <DarkPanel className="relative mt-4 pr-[130px]">
        <div className="absolute right-3 top-3 w-[116px] rounded-[8px] bg-ea-input p-2 text-[8px] text-white/80">
          <p className="font-semibold text-white">Adewale Okonkwo</p>
          <p className="mt-1">+234 888 999 000</p>
          <p>adewale@worksoon.com</p>
          <p>12345678901</p>
          <p>RC 0000000</p>
          <button className="mt-2 h-5 w-full rounded-full bg-white text-[8px] font-semibold text-ea-primary-ink">
            Log out
          </button>
        </div>

        <h2 className="text-panel-h2">Welcome to our first wave of customers!</h2>
        <p className="mt-3 text-caption font-semibold text-white">What happens next</p>
        <ul className="mt-1 space-y-1 text-[8px] text-white/75">
          <li>We stay in touch</li>
          <li>You go first</li>
          <li>Your benefits are reserved</li>
        </ul>

        <p className="mt-3 text-caption font-semibold text-white">Your benefits</p>
        <ul className="mt-1 space-y-1 text-[8px] text-white/75">
          <li>No interest on your first loan for 3 months</li>
          <li>Business loans without colling</li>
          <li>Free POS terminal</li>
        </ul>
      </DarkPanel>

      <ContactBlock className="mt-auto pt-3" />
    </div>
  )
}

export default SuccessPage
