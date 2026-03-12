import ActionButton from '../components/ui/ActionButton'
import FormInput from '../components/ui/FormInput'
import PageIntro from '../components/ui/PageIntro'

function DetailsFormPage({ values, onChange, onNext, canContinue }) {
  const updateField = (key, value) => onChange({ ...values, [key]: value })

  return (
    <div className="flex min-h-flow-form flex-col justify-between">
      <div>
        <PageIntro
          eyebrow="A few more details"
          title="Tell us about you"
          description="This helps us personalize your onboarding and prioritize invited businesses."
        />

        <div className="mt-7 space-y-4">
          <FormInput
            label="Full name"
            placeholder="Jane Cooper"
            value={values.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
          />
          <FormInput
            label="Business name"
            placeholder="North Star Stores"
            value={values.businessName}
            onChange={(event) => updateField('businessName', event.target.value)}
          />
          <FormInput
            label="Email address"
            type="email"
            placeholder="jane@northstar.com"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </div>
      </div>

      <ActionButton type="button" onClick={onNext} disabled={!canContinue} className="mt-8">
        Continue
      </ActionButton>
    </div>
  )
}

export default DetailsFormPage
