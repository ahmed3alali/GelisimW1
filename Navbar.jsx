"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Properties", href: "/#listings" },
  { label: "Property Types", href: "/#property-types" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{ color: "white" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-obsidian)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,169,110,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="mx-auto px-6 lg:px-12 flex items-center justify-between"
        style={{ maxWidth: "var(--container-max)", height: "80px" }}
      >
        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/"
            id="navbar-logo"
            className="inline-flex items-center gap-3 group no-underline"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span className="text-2xl tracking-wide" style={{ color: "white" }}>
              Estate
              <span style={{ color: "var(--color-gold)" }}>Elite</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center justify-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 no-underline hover:text-[var(--color-gold)]"
                style={{ color: "white", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <Link
            href="/#contact"
            id="navbar-cta"
            className="px-7 py-2.5 text-xs font-body font-medium tracking-[0.12em] uppercase border transition-all duration-300 no-underline hover:bg-[var(--color-gold)]"
            style={{
              color: "var(--color-gold)",
              borderColor: "var(--color-gold)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-obsidian)";
              e.currentTarget.style.backgroundColor = "var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-gold)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="navbar-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300 origin-center"
            style={{
              backgroundColor: "white",
              transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: "white",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300 origin-center"
            style={{
              backgroundColor: "white",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{
          backgroundColor: "var(--color-obsidian)",
          borderTop: menuOpen ? "1px solid rgba(201,169,110,0.15)" : "none",
        }}
      >
        <ul className="flex flex-col px-6 py-6 gap-6 list-none m-0 p-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-light tracking-[0.08em] uppercase transition-colors duration-300 no-underline"
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-2 px-6 py-2.5 text-xs font-body font-medium tracking-[0.12em] uppercase border transition-all duration-300 no-underline"
              style={{
                color: "var(--color-gold)",
                borderColor: "var(--color-gold)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-obsidian)";
                e.currentTarget.style.backgroundColor = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-gold)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}