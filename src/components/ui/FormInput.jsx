function FormInput({ label, className = '', ...props }) {
  return (
    <label className="block text-control-label uppercase tracking-label text-white/60">
      {label}
      <input
        {...props}
        className={`mt-2 h-14 w-full rounded-2xl border border-white/15 bg-white/8 px-4 text-body text-white outline-none placeholder:text-white/40 transition focus:border-ea-focus focus:bg-ea-focus-bg ${className}`}
      />
    </label>
  )
}

export default FormInput
