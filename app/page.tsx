const hours = [
  { day: "Tuesday", time: "9:00 am – 6:30 pm" },
  { day: "Wednesday", time: "Closed" },
  { day: "Thursday", time: "9:00 am – 6:30 pm" },
  { day: "Friday", time: "9:00 am – 6:30 pm" },
  { day: "Saturday", time: "9:00 am – 2:00 pm" },
  { day: "Sunday", time: "Closed" },
  { day: "Monday", time: "Closed" },
];

const services = [
  {
    name: "General Dentistry",
    description:
      "Routine checkups, cleanings, and preventive care to keep your smile healthy.",
  },
  {
    name: "Restorative Care",
    description:
      "Treatment for tooth decay, including fillings and restorations using modern techniques.",
  },
  {
    name: "Gum Disease Treatment",
    description:
      "Diagnosis and treatment for gum disease at every stage, from mild to advanced.",
  },
  {
    name: "Cosmetic Dentistry",
    description:
      "Teeth whitening and smile-focused treatments to help you feel confident.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-xl font-semibold tracking-tight text-sky-700">
            Allure Dental
          </span>
          <a
            href="tel:+19093937707"
            className="rounded-full bg-sky-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-800"
          >
            (909) 393-7707
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-zinc-100 px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-700">
            Chino Hills, CA
          </p>
          <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            High-quality, affordable dental care
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Allure Dental applies advanced techniques for general and
            cosmetic dentistry, led by Dr. Nikki Vo — friendly, gentle, and
            thorough care for the whole family.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19093937707"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
            >
              Call to Book
            </a>
            <a
              href="#location"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Get Directions
            </a>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Meet Dr. Nikki Vo
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-600">
            Dr. Vo earned her Doctor of Dental Surgery degree from the Boston
            University Goldman School of Dental Medicine. Patients regularly
            highlight her friendly, gentle, and thorough approach — taking
            the time to clearly explain treatment options every step of the
            way.
          </p>
        </section>

        {/* Services */}
        <section className="border-y border-zinc-100 bg-zinc-50 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-semibold tracking-tight">
              Services
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-xl border border-zinc-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-sky-700">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours & Location */}
        <section
          id="location"
          className="mx-auto grid max-w-4xl gap-10 px-6 py-16 sm:grid-cols-2"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Hours</h2>
            <dl className="mt-6 space-y-2 text-sm">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between border-b border-zinc-100 py-2">
                  <dt className="text-zinc-500">{day}</dt>
                  <dd className={time === "Closed" ? "text-zinc-400" : "font-medium text-zinc-900"}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-zinc-400">
              Hours may vary — please call ahead to confirm before visiting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Location
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-600">
              14740 Pipeline Ave, Ste C
              <br />
              Chino Hills, CA 91709
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=14740+Pipeline+Ave+Ste+C+Chino+Hills+CA+91709"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-700 hover:underline"
            >
              Get Directions →
            </a>
            <p className="mt-6 leading-relaxed text-zinc-600">
              <a href="tel:+19093937707" className="font-medium text-sky-700 hover:underline">
                (909) 393-7707
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Allure Dental — Chino Hills, CA
      </footer>
    </div>
  );
}
