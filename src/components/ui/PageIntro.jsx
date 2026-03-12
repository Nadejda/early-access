function PageIntro({ eyebrow, title, description }) {
  return (
    <>
      <p className="mt-5 text-xs uppercase tracking-eyebrow text-ea-accent-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-display-page">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
    </>
  )
}

export default PageIntro
