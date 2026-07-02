"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "PLANS", href: "#plans" },
    // { label: "PARTNERS", href: "#partners" },
    { label: "TESTIMONIAL", href: "#testimonials" },
    { label: "ARTICLES", href: "#articles" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-md border-outline-variant/10 py-4"
            : "bg-transparent border-white/10 py-5"
        }`}
        id="main-nav"
      >
        <div className="max-w-container-max-width mx-auto flex items-center justify-between px-6 md:px-margin-desktop">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={`font-headline text-2xl font-extrabold tracking-tighter transition-colors duration-500 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              id="logo-text"
            >
              SusuBox
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`nav-link font-headline text-label-md transition-all duration-300 font-semibold border-b-2 ${
                  index === 0
                    ? isScrolled
                      ? "border-primary text-primary"
                      : "border-primary-fixed text-white"
                    : "border-transparent"
                } ${
                  index !== 0
                    ? isScrolled
                      ? "text-on-surface-variant hover:text-primary"
                      : "text-white/70 hover:text-white"
                    : ""
                } pb-1`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden flex items-center p-2 rounded-lg transition-colors ${
                isScrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out p-8 flex flex-col gap-6 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4 mb-4">
            <span className="font-headline text-2xl font-extrabold text-primary tracking-tighter">
              SusuBox
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary p-1"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <div className="flex flex-col gap-5 overflow-y-auto">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="font-headline text-base font-bold text-on-surface-variant hover:text-primary transition-colors py-1"
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto border-t border-outline-variant/10 pt-6">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-primary text-on-primary py-4 rounded-xl font-bold hover:savio-shadow transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
