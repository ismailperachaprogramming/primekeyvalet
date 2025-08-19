import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold underline mb-8">About Us</h1>

        <div className="flex justify-center mb-10">
        <Image
  src="/primekey-logo.png" // ✅ Hardcoded path, no variable
  alt="PrimeKey Valet Logo"
  width={250}
  height={250}
/>
        </div>

        <p className="max-w-5xl mx-auto text-xl md:text-2xl lg:text-3xl text-center text-white leading-relaxed px-6">
  Our mission is to provide secure, professional, and exceptional valet experiences for businesses and private clients alike.
  Whether it’s a high-profile event, a restaurant, or a private party, we ensure every guest is greeted with warmth and professionalism.
  With a focus on customer satisfaction, safety, and trust, PrimeKey Valet continues to serve the greater Los Angeles and Orange County metro areas.
  Our team is carefully trained, background-checked, and equipped with the tools to create a seamless experience.
  <br /><br />
  We believe in bringing peace of mind to our clients — one car, one interaction, and one event at a time.
</p>

      </main>
    </div>
  );
}
