function ActionButton({ variant = 'primary', className = '', ...props }) {
  const baseClass = 'h-14 w-full rounded-2xl px-5 text-button transition'

  const variantClass =
    variant === 'secondary'
      ? 'border border-white/20 bg-transparent text-white/85 hover:bg-white/8'
      : 'bg-ea-primary text-ea-primary-ink enabled:hover:bg-ea-primary-hover disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/45'

  return <button className={`${baseClass} ${variantClass} ${className}`} {...props} />
}

export default ActionButton
