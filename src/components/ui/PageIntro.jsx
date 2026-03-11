function PageIntro({ eyebrow, title, description }) {
  return (
    <>
      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#6AB8FF]">{eyebrow}</p>
      <h2 className="mt-3 text-[30px] font-semibold leading-[1.15]">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
    </>
  )
}

export default PageIntro
