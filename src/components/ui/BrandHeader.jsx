function BrandHeader({ rightLabel = '', rightIsClose = false, className = '' }) {
  return (
    <div className={`flex items-start justify-between ${className}`}>
      <div className="flex items-center gap-1.5">
        <div className="grid h-3 w-3 grid-cols-2 gap-[1px]">
          <span className="rounded-[1px] bg-white" />
          <span className="rounded-[1px] bg-white" />
          <span className="rounded-[1px] bg-white" />
          <span className="rounded-[1px] bg-white" />
        </div>
        <div className="leading-none">
          <p className="text-[5px] font-semibold tracking-[0.02em]">renmoney</p>
          <p className="mt-[1px] text-[4px] text-white/80">business</p>
        </div>
      </div>
      <p className="text-[5px] font-medium leading-none text-white/85">{rightIsClose ? '✕' : rightLabel}</p>
    </div>
  )
}

export default BrandHeader
