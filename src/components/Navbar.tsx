// components/Navbar.tsx
"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PrimeKey Valet</div>
      <ul className={styles.navLinks}>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#services">Our Services</Link></li>
        <li><Link href="#why">Why Choose Us</Link></li>
        <li><Link href="#area">Service Area</Link></li>
        <li><Link href="#contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
