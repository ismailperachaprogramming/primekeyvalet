import Navbar from "@/components/Navbar";
import Image from "next/image";
import type { CSSProperties } from "react";
import { FaClock, FaCar, FaStar, FaTools } from "react-icons/fa";

const GOLD = "#C8AA64";

/** Numeric sizes you can tweak */
const SIZE = {
  topOffset: 96,                 // px of space under fixed navbar (e.g. h-24)
  hero: {
    logo: 320,                   // logo px on mobile
    logoDesktop: 400,            // logo px on md+
    titleMin: 28,                // clamp(min px, vw, max px)
    titleVW: 6,                  // %
    titleMax: 64,                // px
    subtitleMin: 16,
    subtitleVW: 2.5,
    subtitleMax: 22,
    btnFont: 16,                 // button font-size px
    btnPxX: 24,                  // horizontal padding px
    btnPxY: 10,                  // vertical padding px
    availFont: 13,               // availability font-size px
  },
  sectionPadY: 64,               // px padding top/bottom per section
  h2Min: 22, h2VW: 2.8, h2Max: 32,
  services: {
    pillW: 820,      // pill width on desktop (all pills match)
    innerW: 700,     // inner content row width
    cardH: 120,      // pill height
    gap: 20,         // gap between pills
    gapInside: 20,   // icon ↔ text spacing
    border: 2,       // pill border width
    pad: 20,         // pill inner padding
    icon: 40,        // icon box size (px)
    title: 26,       // title font size (px)
    desc: 16,        // description font size (px)
  },
  contact: {
    inputH: 48,
    notesH: 112,
    gap: 16,
    btnFont: 16,
    btnPxX: 24,
    btnPxY: 12,
    radius: 12,
  },
  
};
function IconCalendar({ size = 24, color = "#C8AA64" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  );
}
function IconBuilding({ size = 24, color = "#C8AA64" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h6M8 21v-3M16 21v-3" />
    </svg>
  );
}
function IconHome({ size = 24, color = "#C8AA64" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}
function IconHandshake({ size = 24, color = "#C8AA64" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M8.5 13.5 6 11l5-3 3 2.5 2-1.5 2.5 2.5-3 2" />
      <path d="M12 10v6M14.5 11.5v5M9.5 12v5" />
      <path d="M2 12l4-4M22 12l-4-4" />
    </svg>
  );
}
const items = [
  {
    icon: <IconCalendar size={SIZE.services.icon} />,
    title: "Event Parking",
    desc: "Professional valet for private and public events.",
  },
  {
    icon: <IconBuilding size={SIZE.services.icon} />,
    title: "Corporate Services",
    desc: "Seamless valet solutions for your business.",
  },
  {
    icon: <IconHome size={SIZE.services.icon} />,
    title: "Residential",
    desc: "Convenient valet for your home or community.",
  },
  {
    icon: <IconHandshake size={SIZE.services.icon} />,
    title: "Partnerships",
    desc: "Custom valet solutions for partners.",
  },
];

export default function Page() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <Navbar />

      {/* push content below fixed navbar */}
      <div style={{ paddingTop: SIZE.topOffset }}>

        {/* HERO / HOME */}
        <section id="home" className="scroll-mt-24 text-center" style={{ padding: `${SIZE.sectionPadY}px 0` }}>
          <div className="mx-auto max-w-5xl px-6">
            {/* Logo with easy numeric control */}
            

            <div className="mx-auto mb-6" style={{
              width: `clamp(${SIZE.hero.logo}px, 14vw, ${SIZE.hero.logoDesktop}px)`,
              height: "auto",
            }}>
              <Image
                src="/primekey-logo.png"
                alt="PrimeKey Valet Logo"
                width={SIZE.hero.logoDesktop}
                height={SIZE.hero.logoDesktop}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>

            {/* Title */}
            <h1
              style={{
                color: GOLD,
                fontWeight: 800,
                fontSize: `clamp(${SIZE.hero.titleMin}px, ${SIZE.hero.titleVW}vw, ${SIZE.hero.titleMax}px)`,
                lineHeight: 1.1,
              }}
            >
              PrimeKey Valet
            </h1>

            {/* Subtitle */}
            <p
              style={{
                marginTop: 16,
                color: "#d4d4d4",
                fontSize: `clamp(${SIZE.hero.subtitleMin}px, ${SIZE.hero.subtitleVW}vw, ${SIZE.hero.subtitleMax}px)`,
              }}
            >
              Premium Valet Service You Can Trust
            </p>

            {/* Button */}
            <div style={{ marginTop: 24 }}>
              <a
                href="#contact"
                style={{
                  backgroundColor: GOLD,
                  color: "#111",
                  fontWeight: 600,
                  fontSize: SIZE.hero.btnFont,
                  padding: `${SIZE.hero.btnPxY}px ${SIZE.hero.btnPxX}px`,
                  borderRadius: 10,
                  display: "inline-block",
                }}
              >
                Book Now
              </a>
            </div>

            {/* Availability */}
            <p style={{ marginTop: 12, color: "#9ca3af", fontSize: SIZE.hero.availFont }}>
              Available 24/7 in [Area]
            </p>
          </div>
        </section>

{/* OUR SERVICES */}
<section
  id="services"
  className="scroll-mt-24"
  style={{ padding: `${SIZE.sectionPadY}px 0`, borderTop: "1px solid rgba(200,170,100,0.25)" }}
>
  <div className="mx-auto max-w-6xl px-6">
    <h2
      className="text-center font-semibold"
      style={{
        fontSize: `clamp(${SIZE.h2Min}px, ${SIZE.h2VW}vw, ${SIZE.h2Max}px)`,
        color: GOLD, // ✅ Gold heading
      }}
    >
      Our Services
    </h2>

    <div className="mt-10 grid grid-cols-1" style={{ gap: SIZE.services.gap }}>
      {items.map((s, i) => (
        <div
          key={i}
          style={{
            width: `clamp(320px, 92vw, ${SIZE.services.pillW}px)`,
            height: SIZE.services.cardH,
            borderRadius: 9999,
            border: `${SIZE.services.border}px solid ${GOLD}`,
            padding: SIZE.services.pad,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: SIZE.services.gapInside,
              width: `clamp(280px, 86vw, ${SIZE.services.innerW}px)`,
              margin: "0 auto",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: SIZE.services.icon,
                height: SIZE.services.icon,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "0 0 auto",
              }}
            >
              {s.icon}
            </div>

            {/* Text */}
            <div style={{ textAlign: "left", flex: 1 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: SIZE.services.title,
                  lineHeight: 1.2,
                  color: GOLD, // ✅ Gold service titles
                }}
              >
                {s.title}
              </div>
              <div style={{ fontSize: SIZE.services.desc }}>
                {s.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="why"
  className="scroll-mt-24"
  style={{
    padding: `${SIZE.sectionPadY}px 0`,
    borderTop: "1px solid rgba(200,170,100,0.25)"
  }}
>
  <div className="mx-auto max-w-6xl px-6">
    <h2
      className="text-center font-semibold"
      style={{
        fontSize: `clamp(${SIZE.h2Min}px, ${SIZE.h2VW}vw, ${SIZE.h2Max}px)`,
        color: GOLD
      }}
    >
      Why Choose Us
    </h2>

    <div
      className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {[
        { icon: <FaClock size={32} color={GOLD} />, title: "Reliable 24/7 Service", desc: "Always available when you need us." },
        { icon: <FaCar size={32} color={GOLD} />, title: "Professional Drivers", desc: "Courteous, trained, and fully insured." },
        { icon: <FaStar size={32} color={GOLD} />, title: "Luxury Experience", desc: "Premium touch for every event." },
        { icon: <FaTools size={32} color={GOLD} />, title: "Custom Solutions", desc: "Tailored valet packages for your needs." }
      ].map((item, i) => (
        <div
          key={i}
          style={{
            borderRadius: 16,
            border: `1px solid ${GOLD}`,
            padding: "20px",
            textAlign: "center",
            background: "rgba(255,255,255,0.02)"
          }}
        >
          <div>{item.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginTop: 10, color: GOLD }}>
            {item.title}
          </div>
          <div style={{ fontSize: 14, marginTop: 6 }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* SERVICE AREA */}
<section
  id="area"
  className="scroll-mt-24"
  style={{
    padding: `${SIZE.sectionPadY}px 0`,
    borderTop: "1px solid rgba(200,170,100,0.25)",
  }}
>
  <div className="mx-auto max-w-6xl px-6">
    <h2
      className="text-center font-semibold"
      style={{
        fontSize: `clamp(${SIZE.h2Min}px, ${SIZE.h2VW}vw, ${SIZE.h2Max}px)`,
        color: GOLD, // match PrimeKey Valet color
      }}
    >
      Serving the Greater Orange County, CA Area
    </h2>

    <div
      className="mt-10 mx-auto"
      style={{
        width: 480,
        maxWidth: "100%",
        height: 240,
        borderRadius: 16,
        border: `1px solid ${GOLD}40`,
        overflow: "hidden",
      }}
    >
      <iframe
        title="Orange County Service Area"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53050.00991818023!2d-117.87035325589126!3d33.71747026121826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbacbd680c4b%3A0x9a22e23647b3e97b!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1691619867824!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


{/* CONTACT */}
<section
  id="contact"
  className="scroll-mt-24"
  style={{
    padding: `${SIZE.sectionPadY}px 0`,
    borderTop: "1px solid rgba(200,170,100,0.25)"
  }}
>
  <div className="mx-auto max-w-6xl px-6">
    <h2
      className="text-center font-semibold"
      style={{
        fontSize: `clamp(${SIZE.h2Min}px, ${SIZE.h2VW}vw, ${SIZE.h2Max}px)`,
        color: GOLD
      }}
    >
      Contact / Booking
    </h2>

    <form
      action="https://formspree.io/f/xvgqdabp"
      method="POST"
      className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2"
      style={{ gap: SIZE.contact.gap, maxWidth: 720 }}
    >
      {/* Full Name */}
      <div className="md:col-span-1">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Full Name*</label>
        <input
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Phone */}
      <div className="md:col-span-1">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Phone*</label>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          required
          placeholder="(555) 555-5555"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Email */}
      <div className="md:col-span-2">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Email*</label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Event Date */}
      <div className="md:col-span-1">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Event Date*</label>
        <input
          name="event_date"
          type="date"
          required
          className="w-full bg-transparent text-white px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Event Type */}
      <div className="md:col-span-1">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Event Type</label>
        <input
          name="event_type"
          type="text"
          placeholder="Wedding, Corporate, Private Party..."
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Venue / Address */}
      <div className="md:col-span-2">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Venue / Address</label>
        <input
          name="venue"
          type="text"
          placeholder="1234 Coast Hwy, Newport Beach, CA"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Estimated Guests */}
      <div className="md:col-span-1">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Estimated Guests</label>
        <input
          name="guests"
          type="number"
          min={1}
          placeholder="150"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
        />
      </div>

      {/* Service Hours */}
      <div className="md:col-span-1 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1" style={{ color: GOLD }}>Start Time</label>
          <input
            name="start_time"
            type="time"
            className="w-full bg-transparent text-white px-3 py-2 rounded-md outline-none"
            style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
          />
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: GOLD }}>End Time</label>
          <input
            name="end_time"
            type="time"
            className="w-full bg-transparent text-white px-3 py-2 rounded-md outline-none"
            style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.inputH }}
          />
        </div>
      </div>

      {/* Notes */}
      <div className="md:col-span-2">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Notes / Special Instructions</label>
        <textarea
          name="notes"
          placeholder="Tell us about arrivals, valet stand location, special requests…"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 py-2 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.contact.notesH, resize: "vertical" as const }}
        />
      </div>

      {/* Honeypot for spam bots */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Submit */}
      <div className="md:col-span-2" style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            backgroundColor: GOLD,
            color: "#111",
            fontWeight: 600,
            fontSize: SIZE.contact.btnFont,
            padding: `${SIZE.contact.btnPxY}px ${SIZE.contact.btnPxX}px`,
            borderRadius: SIZE.contact.radius,
          }}
        >
          Submit
        </button>
      </div>
    </form>

    {/* Contact Info Below Form */}
    <div className="mt-8 text-center space-y-2">
      <p>
        Phone Number:{" "}
        <a href="tel:+17145551234" style={{ color: GOLD }}>
          (949) 295-6904
        </a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:info@primekeyvalet.com" style={{ color: GOLD }}>
          primekey@gmail.com
        </a>
      </p>
      <p>
        Instagram:{" "}
        <a
          href="https://instagram.com/primekeyvalet"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: GOLD }}
        >
          @primekeyvalet
        </a>
      </p>
    </div>
  </div>
</section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid rgba(200,170,100,0.25)" }}>
          <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-neutral-400">
            © {new Date().getFullYear()} PrimeKey Valet. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
