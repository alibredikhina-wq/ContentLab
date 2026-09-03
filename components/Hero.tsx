"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] pt-20">
      
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#c7ff3d]/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-15%] left-[-10%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[120px]"
        />
      </div>

      {/* GRID */}
     

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-6 lg:px-8">

        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="flex h-2.5 w-2.5">
            <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[#c7ff3d] opacity-50" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#c7ff3d]" />
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 sm:text-sm">
            Web development studio
          </span>
        </motion.div>

        {/* TITLE */}
        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            className="text-[16vw] font-black leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[9.5rem]"
          >
            СОЗДАЁМ
<br />
<span className="text-[#c7ff3d]">САЙТЫ.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              ContentLab — студия разработки сайтов для бизнеса.
Проектируем и создаём лендинги, сайты компаний
и небольшие интернет-магазины — от идеи до запуска.
            </p>

            <MagneticButton
  href="#contacts"
  className="group flex w-fit items-center gap-4 rounded-full bg-[#c7ff3d] px-6 py-4 text-sm font-bold text-black transition-colors duration-300 hover:bg-white"
>
  Запустить проект

  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</MagneticButton>
          </motion.div>
        </div>

        {/* BOTTOM INFO */}
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
  className="mt-20 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-white/10 pt-7 sm:grid-cols-4"
>
  {[
    ["01", "Лендинги"],
    ["02", "Сайты бизнеса"],
    ["03", "Интернет-магазины"],
    ["04", "Доработка"],
  ].map(([number, label]) => (
    <div key={number} className="group">
      <div className="text-xs font-bold text-[#c7ff3d]">
        {number}
      </div>

      <div className="mt-2 text-sm font-semibold text-white/70 transition-colors duration-300 group-hover:text-white sm:text-base">
        {label}
      </div>
    </div>
  ))}
</motion.div>

        {/* SCROLL */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/30 lg:flex"
        >
          <span>Scroll</span>
          <span className="h-10 w-px bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}