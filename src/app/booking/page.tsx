'use client';
import Navbar from '@/components/Navbar';
import { useForm, ValidationError } from '@formspree/react';

const GOLD = '#C8AA64';
const SIZE = {
  contact: {
    gap: 16,
    inputH: 48,
    notesH: 120,
    btnFont: 18,
    btnPxY: 10,
    btnPxX: 28,
    radius: 12,
  },
};

export default function BookingForm() {
  const [state, handleSubmit] = useForm('xvgqdabp');

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black text-white px-4 py-10">
        <Navbar />
        <p className="text-center mt-10" style={{ color: GOLD }}>
          ✅ Thanks! We’ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2"
        style={{ gap: SIZE.contact.gap, maxWidth: 720 }}
      >
        {/* Full Name */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            Full Name*
          </label>
          <input
            type="text"
            name="name"
            required
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            Phone*
          </label>
          <input
            type="tel"
            name="phone"
            required
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            Email*
          </label>
          <input
            type="email"
            name="email"
            required
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Event Date */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            Event Date
          </label>
          <input
            type="date"
            name="date"
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
          <ValidationError prefix="Date" field="date" errors={state.errors} />
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
        </div>

        {/* Start Time */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            Start Time
          </label>
          <input
            type="time"
            name="startTime"
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
        </div>

        {/* End Time */}
        <div>
          <label className="block mb-1" style={{ color: GOLD }}>
            End Time
          </label>
          <input
            type="time"
            name="endTime"
            style={{
              height: SIZE.contact.inputH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '0 12px',
              width: '100%',
            }}
          />
        </div>

        {/* Event Details */}
        <div className="md:col-span-2">
          <label className="block mb-1" style={{ color: GOLD }}>
            Event Details
          </label>
          <textarea
            name="details"
            style={{
              height: SIZE.contact.notesH,
              borderRadius: SIZE.contact.radius,
              border: `2px solid ${GOLD}`,
              background: 'transparent',
              color: '#fff',
              padding: '8px 12px',
              width: '100%',
            }}
          />
          <ValidationError prefix="Details" field="details" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <div
          className="md:col-span-2"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button
            type="submit"
            disabled={state.submitting}
            style={{
              backgroundColor: GOLD,
              color: '#111',
              fontWeight: 600,
              fontSize: SIZE.contact.btnFont,
              padding: `${SIZE.contact.btnPxY}px ${SIZE.contact.btnPxX}px`,
              borderRadius: SIZE.contact.radius,
              opacity: state.submitting ? 0.7 : 1,
              cursor: state.submitting ? 'not-allowed' : 'pointer',
            }}
          >
            {state.submitting ? 'Sending…' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
