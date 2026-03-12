import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function DetailsFormPage({ values, onChange, onNext, canContinue }) {
  const updateField = (key, value) => onChange({ ...values, [key]: value })

  return (
    <div className="flex min-h-flow-form flex-col">
      <BrandHeader rightIsClose />

      <DarkPanel className="mt-4">
        <h2 className="text-panel-h2">A few more details</h2>
        <p className="mt-1 text-caption text-white/70">For pre-approved and personalised offers</p>
        <div className="mt-3 border-t border-ea-divider" />

        <div className="mt-3 space-y-2">
          <Field
            label="Full name as on your BVN"
            value={values.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
          />
          <Field
            label="E-mail"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
          <Field
            label="BVN"
            value={values.businessName}
            onChange={(event) => updateField('businessName', event.target.value)}
          />
          <Field label="RC number if public" />
          <label className="mt-1 flex items-start gap-2 text-[8px] text-white/65">
            <input type="checkbox" className="mt-[2px] h-2.5 w-2.5 rounded border-white/40 bg-transparent" />
            <span>NCB will help you get a loan at discounted rates.</span>
          </label>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="mt-3 h-7 w-full rounded-full bg-white text-[10px] font-semibold text-ea-primary-ink disabled:opacity-45"
        >
          Save
        </button>
      </DarkPanel>

      <ContactBlock className="mt-auto pt-3" />
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-[8px] text-white/75">{label}</span>
      <input
        {...props}
        className="mt-1 h-7 w-full rounded-[8px] bg-ea-input px-2 text-[10px] text-white outline-none"
      />
    </label>
  )
}

export default DetailsFormPage
