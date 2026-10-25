import Image from "next/image";
type Destination = {
  name: string;
  country: string;
  image: string;
  href: string;
};

const destinations: Destination[] = [
  {
    name: "Milos",
    country: "Greece",
    image: "/images/milos-hero-new.jpg",
    href: "/places/milos",
  },
  {
    name: "Preikestolen",
    country: "Norway",
    image: "/images/norway-hero.jpg",
    href: "/places/norway",
  },
];

type DestinationCardProps = {
  destination: Destination;
};

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        {destination.name}
      </h3>

      <p className="mt-1 uppercase tracking-widest text-gray-500">
        {destination.country}
      </p>
    </article>
  );
}

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
    <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden px-8 lg:px-16">
    <Image
  src="/images/milos-hero.jpg"
  alt="Aerial view of the coastline of Milos, Greece"
  fill
  sizes="100vw"
  loading="eager"
  className="object-cover"
/>

<div className="absolute inset-0 bg-black/35" />

<div className="relative z-10 flex flex-col items-start text-white">
  <p className="mb-4 text-sm font-semibold uppercase tracking-widest">
    Milos, Greece
  </p>

  <h1 className="max-w-3xl text-5xl font-bold">
    A different perspective
  </h1>

  <p className="mt-6 text-xl">
    Travel stories from the ground and above
  </p>

  <a
    href="#places"
    className="mt-8 bg-teal-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800"
  >
    Explore my travels →
  </a>
</div>
    </section>
    <section id="places" className="px-8 py-24 lg:px-16">
  <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
    Places I have explored
  </p>

  <h2 className="mt-4 text-4xl font-bold">
    Two places. Many memories.
  </h2>
  <div className="mt-10 grid gap-8 md:grid-cols-2">
  {destinations.map((destination) => (
    <DestinationCard
      key={destination.name}
      destination={destination}
    />
  ))}
</div>
</section>
  </main>
</>
  );
}
