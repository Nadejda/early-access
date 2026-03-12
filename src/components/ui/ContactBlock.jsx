function ContactBlock({ className = '' }) {
  return (
    <div className={`grid grid-cols-[1fr_auto] items-start gap-2 text-[5px] text-white/80 ${className}`}>
      <div>
        <p className="mb-1 text-[5.5px] font-semibold text-white">Visit a branch</p>
        <ul className="space-y-1 leading-[1.2]">
          <li className="flex items-center gap-1">
            <span className="text-[5.5px]">◉</span>
            <span>23, Awolowo Road Ikoyi</span>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[5.5px]">◉</span>
            <span>Kings Plaza, 8B Adeniran Ogunsanya Street, Surulere</span>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[5.5px]">◉</span>
            <span>Pentagon Plaza, 23 Opebi Road, Ikeja</span>
          </li>
        </ul>

        <p className="mb-1 mt-2 text-[5.5px] font-semibold text-white">Contact us</p>
        <ul className="space-y-1 leading-[1.2]">
          <li className="flex items-center gap-1">
            <span className="text-[5.5px]">◉</span>
            <span>0700 5000 500</span>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[5.5px]">◉</span>
            <span>hello@renmoney.com</span>
          </li>
        </ul>
      </div>
      <div className="self-center text-right">
        <p className="text-[14px] font-bold leading-none tracking-tight">INDIC</p>
      </div>
    </div>
  )
}

export default ContactBlock
