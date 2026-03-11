function ActionButton({ variant = 'primary', className = '', ...props }) {
  const baseClass =
    'h-14 w-full rounded-2xl px-5 text-[15px] font-semibold transition'

  const variantClass =
    variant === 'secondary'
      ? 'border border-white/20 bg-transparent text-white/85 hover:bg-white/8'
      : 'bg-[#0AA5FF] text-[#001B5A] enabled:hover:bg-[#30B1FF] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/45'

  return <button className={`${baseClass} ${variantClass} ${className}`} {...props} />
}

export default ActionButton
