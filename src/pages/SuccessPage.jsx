import ActionButton from '../components/ui/ActionButton'

function SuccessPage() {
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
      <ActionButton type="button" className="mt-10">
        Go to dashboard
      </ActionButton>
    </div>
  )
}

export default SuccessPage
