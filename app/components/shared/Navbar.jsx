"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const colors = {
    forestGreen: "#1B4332",
    warmGold: "#D4A373",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Tours", href: "/tours" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full pt-6 px-4 font-[family-name:var(--font-montserrat)]">
      <nav
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-full border border-gray-200/50 shadow-xl ${
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"
        }`}
        style={{ padding: scrolled ? "10px 14px" : "14px 24px" }}
      >
        <div className="flex justify-between items-center px-2">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner"
              style={{ backgroundColor: colors.forestGreen }}
            >
              A
            </div>
            <div className="flex flex-col">
              <span
                className="font-extrabold tracking-tighter text-xl leading-none uppercase"
                style={{ color: colors.forestGreen }}
              >
                AVERIO
              </span>
              <span
                className="text-[10px] uppercase font-bold tracking-[0.3em] mt-0.5"
                style={{ color: colors.warmGold }}
              >
                Tours & Safaris
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest transition-all hover:opacity-60"
                style={{
                  color:
                    pathname === link.href
                      ? colors.warmGold
                      : "#1a1a1a",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + MOBILE */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="hidden md:block text-white px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: colors.forestGreen }}
            >
              Book Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              style={{ color: colors.forestGreen }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 mx-auto max-w-6xl bg-white rounded-[2.5rem] p-10 shadow-2xl md:hidden border border-gray-100"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-extrabold uppercase tracking-widest border-b border-gray-50 pb-4"
                  style={{ color: colors.forestGreen }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
