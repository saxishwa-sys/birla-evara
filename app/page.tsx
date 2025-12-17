"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  return <LandingPage />;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f2ea] text-[#174f2a] antialiased overflow-x-hidden font-serif">
      <Header />

      <main className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <HeroBackdrop />
        <Overview />
        <Highlights />
        <PricingOnly />
        <FloorPlansOnly />
        <FloorIntro />
        <FeaturesSection />
        <Amenities />
        <Gallery />
        <LocationMapLeft />
        <Enquiry />
      </main>

      <Footer />

      <FloatingQueryTab />
      <FloatingIcons />
      <FloatingPopup />
      <PriceBadgeFloating />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Home", href: "#" },
    { label: "Overview", href: "#overview" },
    { label: "Floor Plan", href: "#floorplan" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f7a3f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 lg:h-24 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
            GA
          </div>
          <div className="leading-tight">
            <div className="text-base sm:text-lg font-semibold">
              Godrej Arden
            </div>
            <div className="text-[11px] sm:text-xs opacity-90">
              Sigma 3, Greater Noida
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm tracking-wide opacity-90 hover:opacity-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white/20"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="absolute top-full left-0 right-0 bg-[#1f7a3f] border-t border-white/20 md:hidden">
            <div className="p-4 grid gap-3">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="text-sm text-white opacity-90"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function HeroBackdrop() {
  return (
    <section className="relative h-[380px] md:h-[520px] lg:h-[640px] overflow-hidden border-b border-[#e4dccf]">

      {/* BLINK STYLE */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }
        .blink-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 9px;
          height: 9px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.9);
          animation: blink 1.2s infinite ease-in-out;
        }
      `}</style>

      <img
        src="/backdrop.jpg"
        alt="Godrej Arden Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-20 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-widest uppercase">
          Godrej Arden — 2, 3 & 4 BHK Homes
        </h1>

        <p className="mt-3 text-base text-white/90 tracking-wide">
          📍 Sigma 3, Greater Noida
        </p>

        <div className="mt-6 max-w-xl rounded-xl bg-black/55 p-6 backdrop-blur-md border border-white/20">
          <div className="text-sm uppercase tracking-widest opacity-90">
            2, 3 & 4 BHK Apartments
          </div>

          <div className="mt-3 flex items-end gap-3">
            <div className="text-4xl md:text-5xl font-bold">₹ 2.30 Cr*</div>
            <div className="text-xs uppercase tracking-widest opacity-90 mb-1">
              Starting From
            </div>
          </div>

          {/* OFFER BLINK */}
          <div className="relative mt-3 inline-block bg-[#2e5f45] px-4 py-1 text-xs font-semibold rounded">
            Hurry – Offer Ends Soon!
            <span className="blink-dot" />
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <HeroEOI title="2 BHK" value="₹ 5 Lacs" />
            <HeroEOI title="3 BHK" value="₹ 7.5 Lacs" />
            <HeroEOI title="4 BHK" value="₹ 10 Lacs" />

            {/* LANDMARK BLINK */}
            <div className="relative flex items-center justify-center text-[11px] font-semibold uppercase bg-white/10 rounded-md px-2 py-2">
              Landmark of <br /> Greater Noida
              <span className="blink-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- HERO EOI BOX ---- */
function HeroEOI({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-md border border-white/20 bg-black/30 px-2 py-2">
      <div className="text-[11px] font-semibold uppercase">{title} EOI</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  );
}


/* ---------------- Overview ---------------- */

function Overview() {
  return (
    <section id="overview" className="border-b border-[#e4dccf] bg-[#f6f2ea]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-[#1f7a3f] mb-6">
          Overview
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#efe9dc] p-8 rounded-lg leading-relaxed text-sm text-[#2b2b2b]">
            Welcome to <strong>Godrej Arden</strong>, a thoughtfully planned
            residential community designed for those who value comfort,
            elegance, and everyday well-being. Located in <strong>Sigma 3,
            Greater Noida</strong>, the project offers a harmonious blend of
            modern architecture and serene green surroundings.
            <br /><br />
            Spread across expansive landscaped acres, Godrej Arden promotes
            a lifestyle rooted in wellness and convenience.
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src="/overview-building.jpg"
              alt="Godrej Arden Towers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Highlights ---------------- */

function Highlights() {
  const data = [
    { title: "Prime Connectivity", desc: "Near expressways & transport hubs" },
    { title: "World-Class Amenities", desc: "Clubhouse, pool, gym & more" },
    { title: "Spacious Homes", desc: "Thoughtfully designed layouts" },
    { title: "Green Landscapes", desc: "Open gardens & parks" },
  ];

  return (
    <section className="border-b border-[#e4dccf] bg-[#f6f2ea]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-semibold text-[#1f7a3f]">
          Property Highlights
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {data.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border bg-white p-4 shadow-sm"
            >
              <p className="text-lg font-semibold text-[#1b5e3a]">
                {h.title}
              </p>
              <p className="text-xs text-[#5a5a5a] mt-1">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

function PricingOnly() {
  return (
    <section className="border-b border-[#e4dccf] bg-[#1f3d2b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#234a34] to-[#162a1f] p-8 shadow-xl">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Godrej Arden
          </h2>
          <p className="mt-1 text-sm opacity-90">
            📍 At Sigma 3, Greater Noida
          </p>

          {/* BHK */}
          <div className="mt-4 inline-block bg-white/15 px-4 py-2 text-sm font-semibold tracking-widest uppercase">
            2, 3 & 4 BHK Apartments
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            <div className="text-5xl font-bold">
              ₹ 2.30 Cr*
            </div>
            <div className="text-sm uppercase tracking-widest opacity-90">
              Starting At
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-4 inline-block bg-[#2e5f45] px-4 py-2 text-sm font-semibold rounded-md">
            Hurry – Offer Ends Soon!
          </div>

          {/* EOI Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <EOIBox title="2 BHK" value="₹ 5 Lacs" />
            <EOIBox title="3 BHK" value="₹ 7.5 Lacs" />
            <EOIBox title="4 BHK" value="₹ 10 Lacs" />
           
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EOI Box ---------------- */
function EOIBox({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/20 bg-black/20 px-4 py-4 text-center">
      <div className="text-sm font-semibold uppercase tracking-wide">
        {title} EOI
      </div>
      <div className="mt-2 text-lg font-bold">
        {value}
      </div>
    </div>
  );
}



/* ---------------- Floor Plans ---------------- */

function FloorPlansOnly() {
  const plans = [
    { id: "2bhk", title: "2 BHK", img: "/floorplan-2bhk.jpg" },
    { id: "3bhk", title: "3 BHK", img: "/floorplan-3bhk.jpg" },
    { id: "4bhk", title: "4 BHK", img: "/floorplan-4bhk.jpg" },
  ];

  return (
    <section className="border-b border-[#e4dccf] bg-[#f6f2ea]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-semibold text-[#1f7a3f]">
          Floor Plans
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {plans.map((p) => (
            <div key={p.id} className="rounded-xl border bg-white p-4">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-36 object-cover rounded-md"
              />
              <p className="mt-2 font-semibold">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 

/* ---------------- FloorIntro ---------------- */
/* ---------------- FloorIntro ---------------- */
function FloorIntro() {
  const [selected, setSelected] = useState<"2bhk" | "3bhk" | "4bhk">("2bhk");

  const images: Record<"2bhk" | "3bhk" | "4bhk", string> = {
    "2bhk": "/floorplan-2bhk.jpg",
    "3bhk": "/floorplan-3bhk.jpg",
    "4bhk": "/floorplan-4bhk.jpg",
  };

  return (
    <section id="floorplan" className="bg-[#fff8f2] border-t border-[#ece2d8] py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-semibold">Explore Floor Plans</h2>
        <div className="mt-6 flex justify-center gap-3">
          {["2bhk", "3bhk", "4bhk"].map((type) => (
            <button
              key={type}
              onClick={() => setSelected(type as any)}
              className={`px-4 py-2 rounded-full text-sm ${
                selected === type
                  ? "bg-[#6b5146] text-white"
                  : "border border-[#cdbfb2] text-[#4b4038]"
              }`}
            >
              {type.toUpperCase().replace("BHK", " BHK")}
            </button>
          ))}
        </div>

        <div className="mt-6 mx-auto max-w-3xl border rounded-2xl bg-white p-2">
          <img
            src={images[selected]}
            alt={`${selected} Floorplan`}
            className="w-full h-72 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FeaturesSection ---------------- */
function FeaturesSection() {
  const features = [
    "Prime location near expressways",
    "World-class clubhouse & amenities",
    "Kids play & activity zones",
    "Landscaped gardens & open spaces",
    "Modern design living spaces",
  ];

  return (
    <section className="py-8 bg-[#fffefc] border-t border-[#ece2d8]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-[#2b2b2b]">Key Features</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 border-b pb-2">
              <span className="text-xl text-[#1b5e3a]">✔</span>
              <span className="text-sm text-[#4b4038]">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Amenities ---------------- */
function Amenities() {
 const amenities = [
  { label: "Fruit Orchard", img: "/amenities/fruit-orchard.jpg" },
  { label: "Swimming Pool", img: "/amenities/swimming-pool.jpg" },
  { label: "Multipurpose Court", img: "/amenities/multipurpose-court.jpg" },
  { label: "Cricket Pitch", img: "/amenities/cricket-pitch.jpg" },
  { label: "Outdoor Meditation Area", img: "/amenities/outdoor-meditation.jpg" },
];


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % amenities.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="amenities" className="bg-[#fffaf5] py-10 border-b border-[#f0d7c2]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-[#2b2b2b] text-center">
          Amenities
        </h2>

        <div className="relative mt-6 h-[300px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-xl border bg-white shadow-md">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.label}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={amenity.img}
                alt={amenity.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {amenity.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {amenities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === current ? "bg-[#1b5e3a]" : "bg-[#cbd5e1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------------- Gallery ---------------- */
function Gallery() {
  const imgs = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg"
  ];

  return (
    <section id="gallery" className="overflow-hidden bg-[#fff7f0] py-8 border-b border-[#f0d7c2]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-[#2b2b2b]">Gallery</h2>

        <div className="relative mt-6 overflow-x-hidden">
          <div className="flex animate-scroll gap-4 whitespace-nowrap">
            {[...imgs, ...imgs].map((src, index) => (
              <div key={index} className="inline-block w-60 flex-shrink-0">
                <img
                  src={src}
                  alt={`gallery-${index + 1}`}
                  className="w-full h-44 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 28s linear infinite;
        }
      `}</style>
    </section>
  );
}



/* ---------------- LocationMapLeft ---------------- */
/* ---------------- LocationMapLeft ---------------- */
/* ---------------- LocationMapLeft ---------------- */
function LocationMapLeft() {
  const locations = [
    { label: "Yamuna Expressway", time: "5 Mins", icon: "🛣️" },
    { label: "IGI International Airport", time: "50 Mins", icon: "✈️" },
    { label: "Cambridge School, Greater Noida", time: "12 Mins", icon: "🏫" },
    { label: "Fortis Hospital", time: "5 Mins", icon: "🏥" },
    { label: "The Grand Venice Mall", time: "10 Mins", icon: "🏬" },
    { label: "Stellar Business Park", time: "16 Mins", icon: "🏢" },
  ];

  return (
    <section id="location" className="border-b border-[#f0d7c2] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Main Heading */}
        <h2 className="text-3xl font-semibold text-[#2b2b2b] mb-6">
          Location
        </h2>

        {/* Top Description */}
        <p className="text-sm md:text-base text-[#4b4038] leading-relaxed max-w-5xl">
          Godrej Arden enjoys a prime address in <strong>Sigma III, Greater Noida</strong>,
          one of the city’s most promising and well-planned neighbourhoods.
          Thoughtfully located away from the bustle yet close to every urban
          comfort, it brings together the serenity of nature with excellent
          connectivity.
          <br /><br />
          With seamless access to the Noida Expressway, Yamuna Expressway and
          FNG Corridor, residents enjoy smooth connectivity to Noida, Delhi
          and Gurugram. The upcoming Jewar International Airport and proposed
          metro line further enhance the area’s future potential.
        </p>

        {/* Sub Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-[#1b5e3a]">
          Perfectly Placed for a Well-Connected Life
        </h3>

        {/* Icon Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {locations.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="text-4xl">{item.icon}</div>
              <p className="text-xs font-semibold text-[#1b5e3a] uppercase">
                {item.label}
              </p>
              <p className="text-xs text-[#6b5b50]">– {item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Enquiry ---------------- */
function Enquiry() {
  return (
    <section id="enquiry-form" className="py-8 bg-[#fffaf5] border-t border-[#ece2d8]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-[#3f3430]">Get Full Project Details</h2>
        <p className="mt-2 text-sm text-[#6b5b50]">
          Share your details and our team will contact you with pricing, floor plans and offers.
        </p>
        <FormFull />
      </div>
    </section>
  );
}

/* ---------------- FormFull ---------------- */
function FormFull() {
  const [submitting, setSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) return alert("Please accept the contact consent.");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Enquiry submitted — our team will reach out!");
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 bg-white p-6 rounded-xl border">
      <div>
        <label className="block text-xs text-[#6b5b50]">Full Name*</label>
        <input
          type="text"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-xs text-[#6b5b50]">Mobile Number*</label>
        <input
          type="tel"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="Enter your mobile number"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <span className="text-xs text-[#5a5a5a]">
          I agree to be contacted for project information.
        </span>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-[#6b5146] text-white px-4 py-2"
      >
        {submitting ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

/* ---------------- Floating UI & Footer Below... (next message) */
/* ---------------- FloatingQueryTab ---------------- */
function FloatingQueryTab() {
  return (
    <a
      href="#enquiry-form"
      className="hidden md:flex fixed right-6 top-6 z-50 items-center bg-[#6b5146] text-white px-4 py-2 rounded-full shadow-lg"
    >
      Query Now
    </a>
  );
}

/* ---------------- FloatingIcons ---------------- */
function FloatingIcons() {
  function scrollToForm(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById("enquiry-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
      <button
        onClick={scrollToForm}
        className="w-12 h-12 rounded-l-xl bg-[#6b5146] text-white flex items-center justify-center shadow"
      >
        📞
      </button>
      <button
        onClick={scrollToForm}
        className="w-12 h-12 rounded-l-xl bg-[#25D366] text-white flex items-center justify-center shadow"
      >
        💬
      </button>
    </div>
  );
}
/* ---------------- PriceBadgeFloating ---------------- */
function PriceBadgeFloating() {
  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-50">
      <div className="rounded-lg bg-white border border-[#e9e0d6] px-4 py-2 shadow-md text-sm font-semibold text-[#1b5e3a]">
        Starting From <span className="ml-2">₹ 2.30 Cr*</span>
      </div>
    </div>
  );
}


/* ---------------- FloatingPopup ---------------- */
function FloatingPopup() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowSuccess(true);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col items-end">
      {minimized ? (
        <div className="flex items-center gap-2 bg-[#ff9b42] px-4 py-2 shadow-lg rounded-full">
          <button onClick={() => setMinimized(false)} className="text-sm font-semibold">
            Quick Enquiry
          </button>
          <button onClick={() => setOpen(false)} className="text-xs underline">
            Close
          </button>
        </div>
      ) : (
        <div className="w-[320px] bg-[#ff9b42] p-4 rounded-xl shadow-2xl">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-black">Quick Enquiry</h3>
            <div className="flex gap-2">
              <button onClick={() => setMinimized(true)} className="text-xs underline">
                Minimize
              </button>
              <button onClick={() => setOpen(false)} className="text-xs underline">
                Close
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-semibold text-black">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-black">Mobile</label>
              <input
                name="mobile"
                required
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="Enter mobile"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md text-sm font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-semibold text-lg">Submitted</h3>
            <p className="mt-2 text-sm">Thanks! We'll contact you soon.</p>
            <button onClick={() => setShowSuccess(false)} className="mt-4 text-sm underline">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Price Helpers ---------------- */
function PricePoint({ label = "Starting From", price = "₹ 2.30 Cr*" }: { label?: string; price?: string }) {
  return (
    <div className="inline-flex items-baseline gap-2 rounded-lg border bg-white px-2 py-1 text-sm shadow-sm">
      <div className="text-[11px] text-[#8a6f5e]">{label}</div>
      <div className="text-sm font-semibold text-[#1b5e3a]">{price}</div>
    </div>
  );
}

function PriceRow({ title, price }: { title: string; price: string }) {
  return (
    <div className="flex justify-between py-2 border-b">
      <div className="text-sm font-medium text-[#4b4038]">{title}</div>
      <div className="text-sm font-semibold text-[#1b5e3a]">{price}</div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[#e9e0d6] bg-[#f3eadf] py-8 text-sm text-[#6b5b50]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div>© {new Date().getFullYear()} Godrej Arden</div>
          <div className="text-xs mt-1">RERA No.: UPRERAPRJ110163/08/2025</div>
        </div>

        <p className="text-xs text-center md:text-left">
          Disclaimer: The information provided on this site is for general information only and does not constitute an offer or contract.
        </p>

        <a href="#enquiry-form" className="underline text-[#4b4038]">
          Contact Sales
        </a>
      </div>
    </footer>
  );
}
