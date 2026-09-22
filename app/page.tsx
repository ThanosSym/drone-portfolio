export default function Home() {
  return (
    <>
  <header className="flex items-center justify-between px-8 py-6">
    {/* Navigation goes here */}
    <a href="/" className="font-bold uppercase tracking-widest">Thanos</a>
    <nav className="flex gap-6">
      <a href="#places">Places</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main>
    <section className="flex min-h-[70vh] flex-col justify-center px-8 lg:px-16">

    <p className="mb-4 text-sm font-semibold uppercase tracking-widest">Milos, Greece</p>
    <h1 className="max-w-3xl text-5xl font-bold">A different prespective</h1>
    <p className="mt-6 text-xl">Travel stories from the ground and above</p>
    <a href="#places" className="mt-8 self-start bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800 transition-colors">
  Explore my travels →
</a>
    </section>
  </main>
</>
  );
}
