function DarkPanel({ children, className = '' }) {
  return <section className={`rounded-[8px] bg-[#04133f] p-2.5 ${className}`}>{children}</section>
}

export default DarkPanel
