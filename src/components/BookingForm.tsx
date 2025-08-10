// src/components/BookingForm.tsx
"use client";

import { useForm, ValidationError } from "@formspree/react";

const GOLD = "#C8AA64";

const SIZE = {
  gap: 16,
  inputH: 48,
  notesH: 120,
  btnFont: 16,
  btnPxY: 12,
  btnPxX: 24,
  radius: 12,
};

export default function BookingForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); // ← put your Formspree form ID here

  if (state.succeeded) {
    return (
      <p className="text-center" style={{ color: GOLD, marginTop: 20 }}>
        ✅ Thanks! We’ll be in touch shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2"
      style={{ gap: SIZE.gap, maxWidth: 720 }}
    >
      {/* Full Name */}
      <div>
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Full Name*</label>
        <input
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Phone*</label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="(555) 555-5555"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      {/* Email */}
      <div className="md:col-span-2">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Email*</label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Event Date*</label>
        <input
          name="event_date"
          type="date"
          required
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
        <ValidationError prefix="Event Date" field="event_date" errors={state.errors} />
      </div>

      {/* Event Type */}
      <div>
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Event Type</label>
        <input
          name="event_type"
          type="text"
          placeholder="Wedding, Corporate, Private Party..."
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
      </div>

      {/* Venue / Address */}
      <div className="md:col-span-2">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Venue / Address</label>
        <input
          name="venue"
          type="text"
          placeholder="1234 Coast Hwy, Newport Beach, CA"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
      </div>

      {/* Estimated Guests */}
      <div>
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Estimated Guests</label>
        <input
          name="guests"
          type="number"
          min={1}
          placeholder="150"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
        />
      </div>

      {/* Service Hours */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1" style={{ color: GOLD }}>Start Time</label>
          <input
            name="start_time"
            type="time"
            className="w-full bg-transparent text-white px-3 rounded-md outline-none"
            style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
          />
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: GOLD }}>End Time</label>
          <input
            name="end_time"
            type="time"
            className="w-full bg-transparent text-white px-3 rounded-md outline-none"
            style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.inputH }}
          />
        </div>
      </div>

      {/* Notes */}
      <div className="md:col-span-2">
        <label className="block text-sm mb-1" style={{ color: GOLD }}>Notes / Special Instructions</label>
        <textarea
          name="notes"
          placeholder="Tell us about arrivals, valet stand location, special requests…"
          className="w-full bg-transparent text-white placeholder-neutral-400 px-3 rounded-md outline-none"
          style={{ border: `2px solid ${GOLD}`, minHeight: SIZE.notesH, resize: "vertical" as const }}
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Submit */}
      <div className="md:col-span-2" style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          disabled={state.submitting}
          style={{
            backgroundColor: GOLD,
            color: "#111",
            fontWeight: 600,
            fontSize: SIZE.btnFont,
            padding: `${SIZE.btnPxY}px ${SIZE.btnPxX}px`,
            borderRadius: SIZE.radius,
            opacity: state.submitting ? 0.7 : 1,
            cursor: state.submitting ? "not-allowed" : "pointer",
          }}
        >
          {state.submitting ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
