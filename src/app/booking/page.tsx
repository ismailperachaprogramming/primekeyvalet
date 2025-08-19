"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const GOLD = "#C8AA64";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    alert("Your booking has been submitted!");
    // Handle actual backend API logic here
  };

  return (
    <main className="bg-[#0b0b0b] min-h-screen text-white">
      <Navbar />

      <div className="pt-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10" style={{ color: GOLD }}>
          Book Valet Service
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#111] p-6 rounded-xl shadow-md border border-gray-800"
        >
          <div>
            <label className="block mb-1 font-medium" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium" htmlFor="date">
                Date
              </label>
              <input
                className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 font-medium" htmlFor="time">
                Time
              </label>
              <input
                className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="location">
              Location
            </label>
            <input
              className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="notes">
              Additional Notes (Optional)
            </label>
            <textarea
              className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md"
              rows={5}
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#C8AA64] hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
