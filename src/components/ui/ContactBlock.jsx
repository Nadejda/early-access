function ContactBlock({ className = '' }) {
  return (
    <div className={`grid grid-cols-[1fr_auto] gap-3 text-[9px] text-white/80 ${className}`}>
      <div>
        <p className="mb-1 text-caption font-semibold text-white">Visit a branch</p>
        <ul className="space-y-1 leading-tight">
          <li>29, Awolowo Road, Ikoyi</li>
          <li>Kings Plaza, 8B Adeniran Ogunsanya, Surulere</li>
          <li>Pentagon Plaza, 23 Opebi Road, Ikeja</li>
        </ul>

        <p className="mb-1 mt-2 text-caption font-semibold text-white">Contact us</p>
        <ul className="space-y-1 leading-tight">
          <li>0700 5000 500</li>
          <li>hello@renmoney.com</li>
        </ul>
      </div>
      <div className="self-end text-right">
        <p className="text-[24px] font-bold leading-none">INDIC</p>
      </div>
    </div>
  )
}

export default ContactBlock
