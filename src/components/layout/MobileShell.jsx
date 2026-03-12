function MobileShell({ children }) {
  return (
    <main className="grid min-h-screen place-items-center bg-ea-canvas p-4 text-white">
      <section className="relative w-full max-w-[920px]">{children}</section>
    </main>
  )
}

export default MobileShell
