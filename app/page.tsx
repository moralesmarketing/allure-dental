import Image from "next/image";

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
      "Routine checkups and cleanings to keep your smile healthy year-round.",
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
    name: "Cosmetic Dentistry & Whitening",
    description:
      "Teeth whitening and smile-focused treatments to help you feel confident.",
  },
];

const differentiators = [
  {
    title: "Gentle, patient-first care",
    detail: "Dr. Vo takes the time to explain every treatment clearly.",
  },
  {
    title: "Advanced techniques",
    detail: "Modern methods applied to restorative and cosmetic treatments.",
  },
  {
    title: "Affordable pricing",
    detail: "High-quality dental care at accessible prices.",
  },
  {
    title: "Convenient location",
    detail: "Easy to reach on Pipeline Ave in the heart of Chino Hills.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-serif text-xl font-medium tracking-tight text-slate-900">
            Allure Dental
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#reviews" className="hover:text-slate-900">Reviews</a>
            <a href="#location" className="hover:text-slate-900">Location</a>
          </nav>
          <a
            href="tel:+19093937707"
            className="rounded-full bg-sky-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
          >
            (909) 393-7707
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[640px] items-end overflow-hidden text-white sm:items-center">
          <Image
            src="/images/dentist-patient.jpg"
            alt="Dentist consulting with a smiling patient"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b33]/95 via-[#0b1b33]/70 to-[#0b1b33]/10" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
            <div className="max-w-lg">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Gentle Care. Advanced Techniques. Affordable Prices.
              </p>
              <h1 className="font-serif text-4xl font-medium leading-tight sm:text-6xl">
                Exceptional Dental Care in Chino Hills
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-200">
                Allure Dental applies advanced techniques for general and
                cosmetic dentistry — led by Dr. Nikki Vo, known for gentle,
                thorough, and affordable care for the whole family.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+19093937707"
                  className="rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-[#0b1b33] transition-colors hover:bg-sky-400"
                >
                  Call to Book
                </a>
                <a
                  href="#location"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome / About */}
        <section id="about" className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
              Welcome
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Meet Dr. Nikki Vo
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Located in the heart of Chino Hills, Allure Dental is a general
              and cosmetic dentistry practice led by Dr. Nikki Vo. Dr. Vo
              earned her Doctor of Dental Surgery degree from the Boston
              University Goldman School of Dental Medicine, and patients
              consistently describe her as friendly, gentle, and thorough —
              taking the time to clearly explain every treatment.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">
              DDS — Boston University Goldman School of Dental Medicine
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-office.jpg"
              alt="Modern dental office"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-slate-100 bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
                Services
              </p>
              <h2 className="font-serif text-3xl font-medium tracking-tight">
                Committed to High-Quality, Affordable Care
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Allure Dental applies advanced dental techniques to improve
                our patients&apos; smiles, with expertise across the
                following services.
              </p>
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/dental-chair.jpg"
                  alt="Modern dental treatment room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-5">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-serif text-lg font-medium text-sky-800">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-[#0b1b33] px-6 py-24 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
              Reviews
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Why Patients Choose Allure Dental
            </h2>

            <a
              href="https://www.google.com/search?q=Allure+Dental+Chino+Hills+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-sky-100 transition-colors hover:bg-white/10"
            >
              ★★★★☆ &nbsp;4.3 on Google — see reviews
            </a>

            <p className="mt-8 font-serif text-xl italic leading-relaxed text-sky-100">
              &ldquo;Patients frequently point to the friendly staff, short
              wait times, and Dr. Vo&apos;s thorough explanations of
              treatment.&rdquo;
            </p>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Reviews are mixed across directories, as with most practices —
              we recommend reading a few for yourself and calling ahead to
              confirm current details like insurance and availability.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
                Why Allure Dental
              </p>
              <h2 className="font-serif text-3xl font-medium tracking-tight">
                What Sets Us Apart
              </h2>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                  <div>
                    <h3 className="font-medium text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours & Location */}
        <section
          id="location"
          className="border-t border-slate-100 bg-slate-50 px-6 py-24"
        >
          <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-[1fr_1fr] sm:gap-20">
            <div>
              <h2 className="font-serif text-2xl font-medium tracking-tight">
                Hours
              </h2>
              <dl className="mt-6 space-y-2 text-sm">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between border-b border-slate-200 py-2"
                  >
                    <dt className="text-slate-500">{day}</dt>
                    <dd
                      className={
                        time === "Closed"
                          ? "text-slate-400"
                          : "font-medium text-slate-900"
                      }
                    >
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-slate-400">
                Hours may vary — please call ahead to confirm before
                visiting.
              </p>
            </div>

            <div className="sm:pl-8">
              <h2 className="font-serif text-2xl font-medium tracking-tight">
                Location
              </h2>
              <p className="mt-6 leading-relaxed text-slate-600">
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
              <p className="mt-6 leading-relaxed text-slate-600">
                <a
                  href="tel:+19093937707"
                  className="font-medium text-sky-700 hover:underline"
                >
                  (909) 393-7707
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#0b1b33] px-6 py-20 text-center text-white">
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            Ready to Love Your Smile?
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-300">
            From general checkups to cosmetic whitening, Allure Dental is
            here to help you feel confident about your smile.
          </p>
          <a
            href="tel:+19093937707"
            className="mt-8 inline-block rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-[#0b1b33] transition-colors hover:bg-sky-400"
          >
            Call (909) 393-7707
          </a>
          <p className="mt-4 text-xs text-slate-400">
            New and returning patients are welcome.
          </p>
        </section>
      </main>

      <footer className="bg-[#081527] px-6 py-10 text-center text-sm text-slate-400">
        <p className="font-serif text-base text-slate-200">Allure Dental</p>
        <p className="mt-2">14740 Pipeline Ave, Ste C, Chino Hills, CA 91709</p>
        <p className="mt-1">
          <a href="tel:+19093937707" className="hover:text-white">
            (909) 393-7707
          </a>
        </p>
        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Allure Dental. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
