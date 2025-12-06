"use client";

import React, { useEffect, useState } from "react";

/**
 * Fixed full app/page.tsx — parsing errors resolved and mobile-fit tweak added.
 * Paste into app/page.tsx (replace existing).
 * Requires Tailwind CSS.
 */

export default function Page() {
  // Update or inject viewport meta so small screens get a slightly reduced initial-scale.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? "0.95" : "1";
    let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    const content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}`;
    if (meta) {
      meta.content = content;
    } else {
      meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = content;
      document.head.appendChild(meta);
    }
    // Optional: update on resize (debounced minimal)
    let t: any;
    function onResize() {
      clearTimeout(t);
      t = setTimeout(() => {
        const nowMobile = window.innerWidth < 768;
        const newScale = nowMobile ? "0.95" : "1";
        if (meta) meta.content = `width=device-width, initial-scale=${newScale}, maximum-scale=${newScale}`;
      }, 150);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <LandingPage />;
}

function LandingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#fff4e6] text-[#2b2b2b] antialiased overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <HeroBackdrop />
        <Overview />
        <Highlights />

        <FloorPlansOnly />
        <PricingOnly />

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
    { label: "Highlights", href: "#highlights" },
    { label: "Price", href: "#pricing" },
    { label: "Amenities", href: "#amenities" },
    { label: "Floor Plan", href: "#floorplan" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact Us", href: "#enquiry-form" },
  ];

  // labels that should show the same "active/pill" style
  const activeLabels = ["Home", "Overview", "Highlights", "Floor Plan", "Price", "Amenities", "Gallery", "Location"];

  return (
    <header className="sticky top-0 z-40 bg-[#f7efe6] border-b border-[#e9e0d6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#8b4f3a] flex items-center justify-center text-white font-bold">B</div>
          <div className="leading-tight">
            <div className="text-base sm:text-lg font-semibold">Birla Evara</div>
            <div className="text-[11px] sm:text-xs text-[#6b5b50]">Sarjapur</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-3">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`px-3 py-1.5 rounded-full text-sm ${activeLabels.includes(n.label) ? "bg-[#6b5146] text-white" : "text-[#4b4038] hover:bg-[#ecdccd]"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button visible only on small */}
        <div className="md:hidden">
          <button onClick={() => setOpen((s) => !s)} className="p-2 rounded-md bg-[#e9dfd6]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#5b4a42]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="md:hidden border-t border-[#e9e0d6] bg-[#fffaf5]">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-2">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`px-4 py-2 rounded-md text-sm ${activeLabels.includes(n.label) ? "bg-[#6b5146] text-white" : "text-[#4b4038] bg-white"} shadow-sm`}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO with backdrop (uses /backdrop.jpg) ---------------- */
function HeroBackdrop() {
  return (
    <section className="relative h-[380px] md:h-[520px] lg:h-[640px] overflow-hidden border-b border-[#e9e0d6]">
      <img src="/backdrop.jpg" alt="hero backdrop" className="absolute inset-0 w-full h-full object-cover brightness-75" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-white">
        <div className="max-w-2xl">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80">Pre-launch | Luxury Residences</p>

          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Birla Evara — Premium 3 &amp; 4 BHK Homes in HSR Layout
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-lg">
            Live in the heart of HSR Layout with premium living, warm tones and an elegant design language crafted for families.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
            <a href="#enquiry-form" className="w-full sm:w-auto text-center rounded-lg bg-[#1b5e3a] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#167249]">
              Get Pre-Launch Price
            </a>
            <a href="#overview" className="w-full sm:w-auto text-center text-sm font-medium text-white/90 underline hover:text-white">View Project Overview</a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-[11px] text-white/90">
            <div>
              <div className="uppercase tracking-wide">Starting From</div>
              <div className="font-semibold text-white">₹ 1.25 Cr*</div>
            </div>
            <div>
              <div className="uppercase tracking-wide">Location</div>
              <div className="font-semibold text-white">HSR Layout, Sector 2</div>
            </div>
          </div>
        </div>
      </div>

      {/* (REMOVED) small building card previously at bottom-right */}
    </section>
  );
}

/* ---------------- Overview ---------------- */
function Overview() {
  const items = [
    { label: "Land Parcel", value: "5+ Acres", sub: "Master planned" },
    { label: "Towers", value: "4 Towers", sub: "G + 25 Floors" },
    { label: "Unit Types", value: "3 & 4 BHK", sub: "Spacious layouts" },
    { label: "Open Spaces", value: "70%", sub: "Green landscaping" },
  ];

  return (
    <section id="overview" className="border-b border-[#f0d7c2] bg-[#fff7eb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Project Overview</h2>
            <p className="text-xs sm:text-sm text-[#5a5a5a] mt-2">A gated community with premium 3 &amp; 4 BHK residences designed for peaceful yet connected living.</p>
          </div>

          <div className="hidden sm:block">
            <PricePoint label="Starting From" price="₹ 1.25 Cr*" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-xl border border-[#f0d7c2] bg-[#fff2df] p-4">
              <p className="text-[11px] uppercase tracking-wide text-[#8a6f5e]">{item.label}</p>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-[#1b5e3a]">{item.value}</p>
              <p className="mt-1 text-xs text-[#5a5a5a]">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Highlights ---------------- */
function Highlights() {
  const data = [
    { title: "Prime Location", desc: "Walking distance to schools & retail" },
    { title: "Low Density", desc: "Only 4 towers across the masterplan" },
    { title: "Luxury Clubhouse", desc: "Gym, pool, indoor games & party hall" },
    { title: "Sustainable Design", desc: "70% open landscaped areas" },
  ];

  return (
    <section id="highlights" className="border-b border-[#f0d7c2] bg-[#fff6ee]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Property Highlights</h2>
          <div className="hidden sm:block">
            <PricePoint label="Indicative" price="₹ 1.25 Cr*" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((h) => (
            <div key={h.title} className="rounded-xl border border-[#f0d7c2] bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-[#1b5e3a]">{h.title}</p>
              <p className="mt-2 text-xs text-[#5a5a5a]">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Floorplans (ONLY) ---------------- */
function FloorPlansOnly() {
  const plans = [
    { id: "3bhk", title: "3 BHK", img: "/floorplan-3bhk.jpg", carpet: "1200 sq.ft (indicative)", from: "₹ 1.25 Cr*" },
    { id: "4bhk", title: "4 BHK", img: "/floorplan-4bhk.jpg", carpet: "1600 sq.ft (indicative)", from: "₹ 1.95 Cr*" },
  ];

  return (
    <section id="floorplans" className="border-b border-[#f0d7c2] bg-[#fffaf5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Floor Plans</h2>
          <div className="hidden sm:block">
            <PricePoint label="From" price="₹ 1.25 Cr*" />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#5a5a5a] mb-6">Choose a layout to view floor plans and learn more about sizes & indicative pricing.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {plans.map((p) => (
            <div key={p.id} className="rounded-xl border border-[#f0d7c2] bg-white p-3">
              <div className="h-40 sm:h-48 w-full overflow-hidden rounded-md bg-[#f3eae2]">
                <img src={p.img} alt={`${p.title} Floorplan`} className="w-full h-full object-cover" />
              </div>

              <div className="mt-3">
                <p className="font-semibold">{p.title}</p>
                <p className="text-xs text-[#5a5a5a]">Carpet: {p.carpet}</p>
                <div className="mt-3">
                  <PricePoint label="From" price={p.from} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#8a6f5e] mt-3">Note: Floorplan images are illustrative.</p>
      </div>
    </section>
  );
}

/* ---------------- Pricing Only ---------------- */
function PricingOnly() {
  return (
    <section id="pricing" className="border-b border-[#f0d7c2] bg-[#fff4e6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Pricing</h2>
          <div className="hidden sm:block">
            <PricePoint label="From" price="₹ 1.25 Cr*" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div>
            <div className="rounded-2xl border border-[#f0d7c2] bg-white p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#1b5e3a]">Indicative Prices</h3>

              <div className="mt-3 space-y-2">
                <PriceRow title="3 BHK" price="₹ 1.25 Cr*" subtitle="Starting from" />
                <PriceRow title="4 BHK" price="₹ 1.95 Cr*" subtitle="Starting from" />
                <PriceRow title="Penthouse" price="On Request" subtitle="Custom pricing" />
              </div>

              <div className="mt-4">
                <a href="#enquiry-form" className="block w-full rounded-md bg-[#1b5e3a] px-3 py-2 text-center text-sm font-semibold text-white">Get Exact Price</a>
                <a href="#contact" className="mt-3 block w-full text-center text-sm underline text-[#5a5a5a]">Contact Sales</a>
              </div>

              <div className="mt-3 text-xs text-[#8a6f5e]">*Indicative price, subject to change. Taxes & registration extra.</div>
            </div>

            <div className="mt-4 rounded-lg border border-[#f0d7c2] bg-white p-3 text-sm">
              <p className="font-medium">Quick Contact</p>
              <p className="text-xs text-[#5a5a5a] mt-1">Use the enquiry form or the Query Now button for quick assistance.</p>
            </div>
          </div>

          <div className="md:sticky md:top-20">
            <div className="rounded-2xl border border-[#f0d7c2] bg-[#fff4e6] p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#1b5e3a]">Featured Offer</h3>
              <p className="mt-2 text-sm text-[#5a5a5a]">Pre-launch special pricing and limited availability. Contact sales for exact inventory and final costing.</p>

              <div className="mt-4">
                <PricePoint label="Lowest Seen" price="₹ 1.25 Cr*" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FloorIntro (TOGGLE + IMAGE SWITCH) ---------------- */
function FloorIntro() {
  const [selected, setSelected] = useState<"3bhk" | "4bhk">("3bhk");

  const planImageMap: Record<"3bhk" | "4bhk", string> = {
    "3bhk": "/floorplan-3bhk.jpg",
    "4bhk": "/floorplan-4bhk.jpg",
  };

  const altMap: Record<"3bhk" | "4bhk", string> = {
    "3bhk": "3 BHK Floorplan",
    "4bhk": "4 BHK Floorplan",
  };

  return (
    <section id="floorplan" className="pt-8 pb-12 bg-[#fff8f2] border-t border-[#ece2d8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-sm text-[#6b5b50]">Floor Plan</div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-[#3f3430]">Your Vision, Our Floor Plans</h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setSelected("3bhk")}
            className={`px-4 py-2 rounded-full text-sm transition ${selected === "3bhk" ? "bg-[#6b5146] text-white shadow" : "bg-transparent border border-[#cdbfb2] text-[#4b4038]"}`}
          >
            3 BHK
          </button>

          <button
            onClick={() => setSelected("4bhk")}
            className={`px-4 py-2 rounded-full text-sm transition ${selected === "4bhk" ? "bg-[#6b5146] text-white shadow" : "bg-transparent border border-[#cdbfb2] text-[#4b4038]"}`}
          >
            4 BHK
          </button>
        </div>

        <div className="mt-6 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#efe6dc] bg-white p-2">
          <img src={planImageMap[selected]} alt={altMap[selected]} className="w-full h-72 sm:h-80 object-cover rounded-md" />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pricing" className="text-sm text-[#6b5146] underline">View Prices</a>
          <a href="#enquiry-form" className="rounded-full bg-[#1b5e3a] text-white px-4 py-2 text-sm">Enquire Now</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FeaturesSection ---------------- */
function FeaturesSection() {
  const features = [
    "Land Area : 28 Acres",
    "No of Units: 1594 Apartments",
    "Sky Garden On Top Floor",
    "High-Speed Elevators",
    "Efficiently Planned 3 and 4 Bed Vaastu Compatible Homes",
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#fffefc] border-t border-b border-[#ece2d8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden border border-[#e7ddd3]">
            <img src="/pool.jpg" alt="pool" className="w-full h-56 sm:h-80 object-cover" />
          </div>
        </div>

        <div>
          <div className="text-sm text-[#7b6256]">Master Plan</div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-serif text-[#3f3430]">Master Plan - Your Vision, Our Plans</h3>

          <ul className="mt-4 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b pb-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9cfc5] text-[#6b5146]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-sm sm:text-base text-[#4b4038]">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <a href="#highlights" className="inline-flex items-center gap-2 bg-[#6b5146] text-white px-4 py-2 rounded-full shadow text-sm">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Amenities ---------------- */
function Amenities() {
  const amen = ["Grand Clubhouse", "Swimming Pool", "Kids’ Pool", "Fully Equipped Gym", "Indoor Games Room", "Multipurpose Party Hall", "Yoga & Meditation Deck", "Jogging Track"];

  return (
    <section id="amenities" className="border-b border-[#f0d7c2] bg-[#fffaf5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Amenities</h2>
          <div className="hidden sm:block"><PricePoint label="From" price="₹ 1.25 Cr*" /></div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amen.map((a) => (
            <div key={a} className="rounded-xl border border-[#f0d7c2] bg-white p-3 text-sm">
              <p className="font-semibold text-[#1b5e3a]">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const imgs = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"];
  return (
    <section id="gallery" className="border-b border-[#f0d7c2] bg-[#fff7f0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Gallery</h2>
          <div className="hidden sm:block"><PricePoint label="Indicative" price="₹ 1.25 Cr*" /></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {imgs.map((s) => (
            <div key={s} className="overflow-hidden rounded-xl border border-[#f0d7c2] bg-white">
              <img src={s} alt="Gallery item" className="h-28 sm:h-40 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Location: MAP LEFT, TEXT RIGHT ---------------- */
function LocationMapLeft() {
  return (
    <section id="location" className="border-b border-[#f0d7c2] bg-[#fffaf0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Location</h2>
          <div className="hidden sm:block"><PricePoint label="Starting" price="₹ 1.25 Cr*" /></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-xl overflow-hidden border shadow-sm">
              <img src="/hsr_map.jpg" alt="HSR Map" className="w-full h-56 sm:h-80 object-cover" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm text-[#5a5a5a] mb-3">
              HSR Layout, Sector 2 — centrally located with quick access to schools, hospitals, retail and IT hubs.
            </p>
            <ul className="grid gap-2 text-sm">
              <li><strong>Nearest Metro:</strong> Silk Board / Upcoming HSR Metro (est)</li>
              <li><strong>Schools:</strong> XYZ International, ABC High School</li>
              <li><strong>Hospitals:</strong> Good Health Hospital (5 km)</li>
              <li><strong>Retail:</strong> Nearby mall & high-street shopping</li>
            </ul>

            <div className="mt-4 flex gap-3">
              <a href="#floorplan" className="inline-flex items-center gap-2 rounded-full border border-[#e9e0d6] px-3 py-2 bg-white shadow-sm text-sm">
                View Floor Plans
              </a>
              <a href="#enquiry-form" className="ml-0 sm:ml-3 inline-flex items-center gap-2 rounded-full bg-[#1b5e3a] text-white px-3 py-2 text-sm">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Enquiry ---------------- */
function Enquiry() {
  return (
    <section id="enquiry-form" className="py-8 sm:py-10 bg-[#fffaf5] border-t border-[#ece2d8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#3f3430]">Get Full Details & Pre-Launch Offer</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6b5b50]">Share your contact details and our team will reach out shortly.</p>

            <div className="mt-4 bg-white rounded-xl p-4 sm:p-6 border border-[#e9e0d6] shadow-sm">
              <FormFull />
            </div>
          </div>

          <aside>
            <div className="rounded-xl border border-[#f0d7c2] bg-white p-4 sm:p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-[#1b5e3a]">Quick Contact</h4>
              <p className="mt-2 text-sm text-[#5a5a5a]">
                Use the enquiry form or the Query Now button for immediate assistance.
              </p>

              <div className="mt-4 border-t border-[#efe6dc] pt-4">
                <h5 className="text-sm font-semibold text-[#4b4038]">Office Hours</h5>
                <p className="text-xs text-[#6b5b50] mt-1">Mon — Sat: 9:30 AM — 6:30 PM</p>
                <p className="text-xs text-[#6b5b50] mt-1">Sunday: By appointment</p>
              </div>

              <div className="mt-4 border-t border-[#efe6dc] pt-4">
                <h5 className="text-sm font-semibold text-[#4b4038]">Pricing Note</h5>
                <p className="text-xs text-[#6b5b50] mt-1">Indicative prices are subject to availability, taxes & registration charges.</p>
              </div>

              <div className="mt-4 border-t border-[#efe6dc] pt-4">
                <h5 className="text-sm font-semibold text-[#4b4038]">Disclaimer</h5>
                <p className="text-xs text-[#6b5b50] mt-1">
                  By submitting this form you consent to be contacted by the sales team via phone, SMS or WhatsApp for
                  information about this project. Information provided is indicative and not a legal offer. Final prices, plans
                  and availability will be confirmed by the developer/sales team.
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-[#f0d7c2] bg-[#fff7eb] p-3 text-sm">
              <p className="font-medium text-[#4b4038]">Need faster response?</p>
              <p className="text-xs text-[#6b5b50] mt-1">Use the Query Now button for immediate assistance.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FormFull (LEFT FORM) - mobile friendly ---------------- */
function FormFull() {
  const [submitting, setSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) {
      alert("Please accept the disclaimer to proceed.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Enquiry sent! We'll contact you shortly.");
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs text-[#6b5b50]">Full name <span className="text-red-600">*</span></label>
        <input name="name" required className="mt-1 w-full rounded-md border border-[#e9e0d6] px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="block text-xs text-[#6b5b50]">Email <span className="text-[#6b5b50] text-xs">(optional)</span></label>
        <input name="email" type="email" className="mt-1 w-full rounded-md border border-[#e9e0d6] px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="block text-xs text-[#6b5b50]">Mobile <span className="text-red-600">*</span></label>
        <input name="phone" type="tel" inputMode="tel" required className="mt-1 w-full rounded-md border border-[#e9e0d6] px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="block text-xs text-[#6b5b50]">Project</label>
        <input name="project" defaultValue="Birla Evara" className="mt-1 w-full rounded-md border border-[#e9e0d6] px-3 py-2 text-sm" />
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-1">
          <label className="inline-flex items-start text-sm text-[#5a5a5a]">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mr-2 mt-1" />
            <span>I agree to be contacted and accept the disclaimer.</span>
          </label>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <button type="submit" disabled={submitting} className="w-full md:w-auto rounded-full bg-[#6b5146] text-white px-4 py-2 text-sm">
            {submitting ? "Sending..." : "Submit Enquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[#e9e0d6] bg-[#f3eadf] py-6 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-[#6b5b50]">
          <div>
            <div>© {new Date().getFullYear()} Birla Evara</div>
            <div className="text-xs text-[#6b5b50] mt-1">RERA No.: ABCD/PRM/123456/2025</div>
          </div>

          <div className="text-xs text-[#6b5b50]">
            Disclaimer: The information provided on this site is for general information only and does not constitute an offer or contract.
          </div>

          <div className="text-sm">
            <a href="#contact" className="underline text-[#4b4038]">Contact Sales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PricePoint small badge ---------------- */
function PricePoint({ label = "Starting From", price = "₹ 1.25 Cr*" }: { label?: string; price?: string }) {
  return (
    <div className="inline-flex items-baseline gap-2 rounded-lg border border-[#f0d7c2] bg-white px-2 py-1 text-sm shadow-sm">
      <div className="text-[11px] text-[#8a6f5e]">{label}</div>
      <div className="text-sm font-semibold text-[#1b5e3a]">{price}</div>
    </div>
  );
}

/* ---------------- Price Badge Floating bottom-right (hidden on small) ---------------- */
function PriceBadgeFloating() {
  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-50">
      <div className="rounded-lg bg-white border border-[#e9e0d6] px-4 py-2 shadow-md text-sm">
        Starting From <span className="ml-2 font-semibold text-[#1b5e3a]">₹ 1.25 Cr*</span>
      </div>
    </div>
  );
}

/* ---------------- Floating Query Now Tab (moved to top-right) ---------------- */
function FloatingQueryTab() {
  return (
    <a
      href="#enquiry-form"
      className="hidden md:flex fixed right-6 top-6 z-50 items-center rounded-full bg-[#6b5146] text-white px-4 py-2 shadow-lg"
      aria-label="Query Now"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2h-1l-3 3v-3H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Query Now
    </a>
  );
}

/* ---------------- Floating Call + WhatsApp -> scroll to enquiry form (hidden on small) ---------------- */
function FloatingIcons() {
  function goToEnquiry(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const first = el.querySelector<HTMLInputElement>("input, textarea, select");
        if (first) first.focus();
      }, 350);
    }
  }

  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
      <button onClick={goToEnquiry} type="button" aria-label="Open enquiry form" className="w-12 h-12 rounded-l-xl bg-[#6b5146] text-white flex items-center justify-center shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2"/></svg>
      </button>

      <button onClick={goToEnquiry} type="button" aria-label="Open enquiry form" className="w-12 h-12 rounded-l-xl bg-[#25D366] text-white flex items-center justify-center shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A10.08 10.08 0 1 0 6.34 20.64"/></svg>
      </button>
    </div>
  );
}

/* ---------------- Floating quick popup (hidden on small) ---------------- */
function FloatingPopup() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowSuccess(true);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col items-end" aria-live="polite">
      {minimized ? (
        <div className="flex items-center gap-2 rounded-full border-4 border-[#7b4b2a] bg-[#ff9b42] px-4 py-2 shadow-lg">
          <button onClick={() => setMinimized(false)} className="text-sm font-semibold text-red-700">Quick Enquiry</button>
          <button onClick={() => setOpen(false)} className="text-xs text-black underline">Close</button>
        </div>
      ) : (
        <div className="w-[320px] rounded-xl border-4 border-[#7b4b2a] bg-[#ff9b42] p-4 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-base font-bold text-red-700">Quick Enquiry</h3>
            <div className="flex items-center gap-2">
              <button onClick={() => setMinimized(true)} className="text-xs text-black underline">Minimize</button>
              <button onClick={() => setOpen(false)} className="text-xs text-black underline">Close</button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label className="text-black font-semibold text-xs">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter your name" />
            </div>
            <div>
              <label className="text-black font-semibold text-xs">Mobile</label>
              <input name="mobile" required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter mobile" />
            </div>
            <div>
              <label className="text-black font-semibold text-xs">Project</label>
              <input name="project" defaultValue="Birla Evara" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="mt-1 w-full rounded-md bg-red-700 py-2 text-sm font-semibold text-white">Submit</button>
            </div>
          </form>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-[#1b5e3a]">Form submitted</h3>
            <p className="mt-2 text-sm text-[#5a5a5a]">Thanks — our team will contact you shortly.</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => setShowSuccess(false)} className="px-4 py-2 rounded-md border">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Price row helper ---------------- */
function PriceRow({ title, price, subtitle }: { title: string; price: string; subtitle?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#f0d7c2] pb-2 text-sm">
      <div>
        <div className="text-sm font-medium">{title}</div>
        {subtitle && <div className="text-xs text-[#5a5a5a]">{subtitle}</div>}
      </div>
      <div className="text-sm font-semibold text-[#1b5e3a]">{price}</div>
    </div>
  );
}
