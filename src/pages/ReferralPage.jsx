import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function ReferralPage({ referralCode, onReferralCodeChange, onNext }) {
  return (
    <div className="flex min-h-flow-form flex-col">
      <BrandHeader rightIsClose />

      <DarkPanel className="mt-4">
        <h2 className="text-panel-h2">Invite 2 businesses from your network</h2>
        <p className="mt-1 text-caption text-white/70">After they join, you&apos;ll both get early access and bonuses</p>
        <div className="mt-3 border-t border-ea-divider" />

        <div className="mt-3 grid grid-cols-2 gap-2">
          <StatCard label="Joined" value="0 of 2" />
          <StatCard label="Pending" value="0" />
        </div>

        <input
          value={referralCode}
          onChange={(event) => onReferralCodeChange(event.target.value)}
          className="mt-2 h-7 w-full rounded-[8px] bg-ea-input px-2 text-[10px] text-white outline-none"
        />

        <button
          type="button"
          onClick={onNext}
          className="mt-3 h-7 w-full rounded-full bg-white text-[10px] font-semibold text-ea-primary-ink"
        >
          Copy
        </button>
      </DarkPanel>

      <ContactBlock className="mt-auto pt-3" />
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-[8px] bg-ea-input p-2">
      <p className="text-[11px] font-semibold">{value}</p>
      <p className="text-[8px] text-white/70">{label}</p>
    </div>
  )
}

export default ReferralPage
