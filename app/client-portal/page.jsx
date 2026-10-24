export const metadata = { title: "Client Portal | ITET Bangladesh" };

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-8">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <a href="/client-portal" className="text-sm font-semibold text-white">ITET Bangladesh Client &amp; Partner Portal</a>
            <p className="mt-1 text-xs text-white/45">Client Dashboard</p>
          </div>
          <a href="/" className="rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white">Back to Main Site</a>
        </header>

        <div className="flex flex-1 items-center justify-center py-14">
          <div className="w-full max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Client Portal v1.0.0</p>
            <a href="/" className="mt-3 inline-block text-xs font-medium text-primary hover:underline">Main Site</a>
            <h1 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">Under Development please stay tune</h1>
          </div>
        </div>

        <footer className="border-t border-white/10 pt-5 text-center text-xs text-white/40">
          Designed &amp; Developed by <a href="https://360dsoul.com/" target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-white hover:underline">360D SOUL Ltd.</a>
        </footer>
      </div>
    </main>
  );
}
