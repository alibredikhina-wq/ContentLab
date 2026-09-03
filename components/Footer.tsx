"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Как работаем", href: "#process" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Верхняя часть */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_auto] lg:items-start lg:py-20">
          {/* Логотип и описание */}
          <div>
            <motion.a
              href="#"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-2xl font-black tracking-[-0.05em] sm:text-3xl"
              aria-label="ContentLab — на главную"
            >
              CONTENT
              <span className="text-[#c7ff3d]">LAB</span>
            </motion.a>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/35 sm:text-base">
              Студия разработки сайтов для бизнеса.
              <br />
              Лендинги, сайты компаний и небольшие интернет-магазины —
              от идеи до запуска.
            </p>
          </div>

          {/* Навигация */}
          <nav
            aria-label="Навигация в подвале сайта"
            className="grid grid-cols-2 gap-x-10 gap-y-4 sm:flex sm:flex-wrap sm:gap-8 lg:justify-end"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/45 transition-colors duration-300 hover:text-[#c7ff3d]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-8 sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c7ff3d]/10 blur-[80px]" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7ff3d]">
                Новый проект
              </div>

              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                Давайте сделаем хороший сайт.
              </h3>
            </div>

            <a
              href="#contacts"
              className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#c7ff3d] px-5 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Обсудить проект

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ContentLab. Все права защищены.</span>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Политика конфиденциальности</span>

            <span>Обработка данных</span>
          </div>
        </div>
      </div>
    </footer>
  );
}