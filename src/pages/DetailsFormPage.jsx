import BrandHeader from '../components/ui/BrandHeader'
import ContactBlock from '../components/ui/ContactBlock'
import DarkPanel from '../components/ui/DarkPanel'

function DetailsFormPage({ values, onChange, onNext, canContinue }) {
  const updateField = (key, value) => onChange({ ...values, [key]: value })

  return (
    <div className="flex min-h-[420px] flex-col">
      <BrandHeader rightIsClose className="px-4" />

      <DarkPanel className="mx-auto mt-2 w-[178px]">
        <h2 className="text-[12px] font-semibold leading-none">A few more details</h2>
        <p className="mt-1 text-[4.5px] text-white/70">For pre-approved and personalised offers</p>
        <div className="mt-2 border-t border-white/20" />

        <div className="mt-2 space-y-2">
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
          <label className="mt-1 flex items-start gap-1.5 text-[4px] leading-[1.25] text-white/65">
            <input type="checkbox" className="mt-[1px] h-1.5 w-1.5 rounded border-white/40 bg-transparent" />
            <span>NCB will help you get one — just one issue to get access point.</span>
          </label>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className="mt-2 h-5 w-full rounded-full bg-white text-[5.5px] font-semibold text-ea-primary-ink disabled:opacity-45"
        >
          Save
        </button>
      </DarkPanel>

      <ContactBlock className="mx-auto mt-auto w-[178px] pb-3 pt-3" />
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-[4.5px] text-white/75">{label}</span>
      <input
        {...props}
        className="mt-1 h-4 w-full rounded-[3px] bg-[#4a5678] px-1.5 text-[5.5px] text-white outline-none"
      />
    </label>
  )
}

export default DetailsFormPage
