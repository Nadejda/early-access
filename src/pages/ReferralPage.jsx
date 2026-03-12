import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function ReferralPage({ referralCode, onReferralCodeChange, onNext }) {
  return (
    <div className="flex min-h-[420px] flex-col">
      <BrandHeader rightIsClose className="px-4" />

      <DarkPanel className="mx-auto mt-2 w-[178px]">
        <h2 className="text-[12px] font-semibold leading-none">Invite 2 businesses from your network</h2>
        <p className="mt-1 text-[4.5px] text-white/70">After they join, you&apos;ll both get early access and bonuses</p>
        <div className="mt-2 border-t border-white/20" />

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <StatCard label="Joined" value="0 of 2" />
          <StatCard label="Pending" value="0" />
        </div>

        <input
          value={referralCode}
          onChange={(event) => onReferralCodeChange(event.target.value)}
          placeholder="renmoney/ref/26726427.com"
          className="mt-1.5 h-4 w-full rounded-[3px] bg-[#4a5678] px-1.5 text-[5.5px] text-white outline-none placeholder:text-white/75"
        />

        <button
          type="button"
          onClick={onNext}
          className="mt-2 h-5 w-full rounded-full bg-white text-[5.5px] font-semibold text-ea-primary-ink"
        >
          Copy
        </button>
      </DarkPanel>

      <ContactBlock className="mx-auto mt-auto w-[178px] pb-3 pt-3" />
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-[4px] bg-[#4a5678] p-1.5">
      <p className="text-[6px] font-semibold">{value}</p>
      <p className="text-[4.5px] text-white/70">{label}</p>
    </div>
  )
}

export default ReferralPage
