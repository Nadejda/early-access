function DarkPanel({ children, className = '' }) {
  return <section className={`rounded-panel bg-ea-panel p-4 ${className}`}>{children}</section>
}

export default DarkPanel
