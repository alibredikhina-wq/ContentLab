"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const menuItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Как работаем", href: "#process" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="group relative z-10 text-xl font-black tracking-[-0.04em] sm:text-2xl"
          >
            CONTENT
            <span className="text-[#c7ff3d] transition-colors duration-300 group-hover:text-white">
              LAB
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7ff3d] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <MagneticButton
  href="#contacts"
  className="hidden rounded-full bg-[#c7ff3d] px-5 py-3 text-sm font-bold text-black transition-colors duration-300 hover:bg-white md:block"
>
  Обсудить проект
</MagneticButton>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          y: mobileOpen ? 0 : -20,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-40 bg-[#0a0a0a] px-6 pt-28 md:hidden"
      >
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={handleMobileLinkClick}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: mobileOpen ? 1 : 0,
                x: mobileOpen ? 0 : -20,
              }}
              transition={{
                delay: mobileOpen ? index * 0.06 : 0,
                duration: 0.3,
              }}
              className="border-b border-white/10 py-5 text-3xl font-bold transition-colors hover:text-[#c7ff3d]"
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="#contacts"
            onClick={handleMobileLinkClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: mobileOpen ? 1 : 0,
              y: mobileOpen ? 0 : 20,
            }}
            transition={{
              delay: mobileOpen ? 0.3 : 0,
              duration: 0.3,
            }}
            className="mt-8 rounded-full bg-[#c7ff3d] px-6 py-4 text-center font-bold text-black transition-all duration-300 hover:bg-white"
          >
            Обсудить проект
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
}