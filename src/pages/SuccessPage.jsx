import ActionButton from '../components/ui/ActionButton'

function SuccessPage() {
  return (
    <div className="flex min-h-flow-main flex-col items-center justify-center py-6 text-center">
      <div className="grid h-24 w-24 place-items-center rounded-full border border-ea-check/40 bg-ea-primary/20">
        <span className="text-5xl text-ea-check">✓</span>
      </div>
      <h2 className="mt-8 text-display-success">You&apos;re in!</h2>
      <p className="mt-4 max-w-content-max-sm text-body text-white/80">
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
