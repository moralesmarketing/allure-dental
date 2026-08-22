export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <header className="border-b border-zinc-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="text-xl font-semibold tracking-tight text-sky-700">
            Allure Dental
          </span>
          <a
            href="tel:+19095550100"
            className="rounded-full bg-sky-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-800"
          >
            Call to Book
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-700">
          Chino Hills, CA
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Modern dental care, close to home
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
          Allure Dental is a Chino Hills dental practice focused on gentle,
          modern care for the whole family. Site coming soon.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+19095550100"
            className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
          >
            Call (909) 555-0100
          </a>
          <a
            href="mailto:info@alluredentalchinohills.com"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Email Us
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Allure Dental — Chino Hills, CA
      </footer>
    </div>
  );
}
