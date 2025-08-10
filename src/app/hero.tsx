import Image from "next/image";

export default function Hero() {
  // ===== Adjustable sizes/settings =====
  const settings = {
    logo: {
      width: 160, // mobile
      widthMd: 200, // tablet+
    },
    title: {
      mobile: "text-3xl",
      tablet: "md:text-5xl",
      desktop: "lg:text-6xl",
    },
    subtitle: {
      mobile: "text-base",
      tablet: "md:text-lg",
      desktop: "lg:text-xl",
    },
    button: {
      padding: "px-5 py-2", // mobile
      paddingMd: "md:px-6 md:py-3", // tablet+
      text: "text-sm md:text-base lg:text-lg",
    },
    availability: {
      mobile: "text-xs",
      tablet: "md:text-sm",
      desktop: "lg:text-base",
    },
  };

  return (
    <section id="home" className="scroll-mt-24 bg-[#0b0b0b] text-center py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Logo */}
        <Image
          src="/primekey-logo.png"
          alt="PrimeKey Valet Logo"
          width={settings.logo.width}
          height={settings.logo.width}
          className={`mx-auto mb-6 h-auto w-[${settings.logo.width}px] md:w-[${settings.logo.widthMd}px]`}
          priority
        />

        {/* Title */}
        <h1
          className={`${settings.title.mobile} ${settings.title.tablet} ${settings.title.desktop} font-extrabold text-[#C8AA64]`}
        >
          PrimeKey Valet
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-4 ${settings.subtitle.mobile} ${settings.subtitle.tablet} ${settings.subtitle.desktop} text-neutral-300`}
        >
          Premium Valet Service You Can Trust
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="#contact"
            className={`${settings.button.padding} ${settings.button.paddingMd} bg-[#C8AA64] text-black ${settings.button.text} font-semibold rounded-lg hover:opacity-90 transition`}
          >
            Book Now
          </a>
        </div>

        {/* Availability note */}
        <p
          className={`mt-3 ${settings.availability.mobile} ${settings.availability.tablet} ${settings.availability.desktop} text-neutral-400`}
        >
          Available 24/7 in [Area]
        </p>

      </div>
    </section>
  );
}
