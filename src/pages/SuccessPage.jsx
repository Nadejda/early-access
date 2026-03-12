import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function SuccessPage() {
  return (
    <div className="flex min-h-[420px] flex-col">
      <BrandHeader rightIsClose className="px-4" />

      <DarkPanel className="relative mx-auto mt-2 w-[178px] pr-[56px]">
        <p className="text-[11px]">🎉</p>
        <div className="absolute right-2 top-2 w-[52px] rounded-[4px] bg-[#4a5678] p-1 text-[3.5px] leading-[1.2] text-white/80">
          <p className="font-semibold text-white">Adewale Okonkwo</p>
          <p className="mt-0.5">+234 888 999 000</p>
          <p>adewale@worksoon.com</p>
          <p>12345678901</p>
          <p>RC0000000</p>
          <button className="mt-1 h-4 w-full rounded-full bg-white text-[3.5px] font-semibold text-ea-primary-ink">
            Log out
          </button>
        </div>

        <h2 className="mt-1 text-[12px] font-semibold leading-[1.15]">Welcome to our first wave of customers!</h2>
        <p className="mt-2 text-[5.5px] font-semibold text-white">What happens next</p>
        <ul className="mt-1 space-y-1.5 text-[4.5px] leading-[1.3] text-white/75">
          <li>◉ We stay in touch</li>
          <li>◉ You go first</li>
          <li>◉ Your benefits are reserved</li>
        </ul>

        <p className="mt-2 text-[5.5px] font-semibold text-white">Your benefits</p>
        <ul className="mt-1 space-y-1.5 text-[4.5px] leading-[1.3] text-white/75">
          <li>— No interest on your first loan for 3 months</li>
          <li>— Business loans without colling</li>
          <li>— Free POS terminal</li>
        </ul>
      </DarkPanel>

      <ContactBlock className="mx-auto mt-auto w-[178px] pb-3 pt-3" />
    </div>
  )
}

export default SuccessPage
