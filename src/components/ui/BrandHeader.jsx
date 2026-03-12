function BrandHeader({ rightLabel = '', rightIsClose = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="grid h-5 w-5 grid-cols-2 gap-[2px]">
          <span className="rounded-[2px] bg-white" />
          <span className="rounded-[2px] bg-white" />
          <span className="rounded-[2px] bg-white" />
          <span className="rounded-[2px] bg-white" />
        </div>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold">renmoney</p>
          <p className="text-[9px] text-white/80">business</p>
        </div>
      </div>
      <p className="text-caption font-medium text-white/85">{rightIsClose ? '✕' : rightLabel}</p>
    </div>
  )
}

export default BrandHeader
