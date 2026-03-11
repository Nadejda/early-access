function FormInput({ label, className = '', ...props }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
      {label}
      <input
        {...props}
        className={`mt-2 h-14 w-full rounded-2xl border border-white/15 bg-white/8 px-4 text-[15px] text-white outline-none placeholder:text-white/40 transition focus:border-[#4DBFFF] focus:bg-[#102C80] ${className}`}
      />
    </label>
  )
}

export default FormInput
