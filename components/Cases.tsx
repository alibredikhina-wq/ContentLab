"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const cases = [
  {
    number: "01",
    type: "Лендинг",
    title: "Сайт, который",
    accent: "продаёт.",
    description:
      "Одностраничный сайт для продукта или услуги с чёткой структурой, сильным первым экраном и понятным сценарием заявки.",
    tags: ["Landing page", "UI/UX", "Адаптив"],
  },
  {
    number: "02",
    type: "Сайт компании",
    title: "Бизнесу нужен",
    accent: "характер.",
    description:
      "Корпоративный сайт с продуманной структурой, презентацией услуг и понятной навигацией для клиентов.",
    tags: ["Corporate", "Дизайн", "Разработка"],
  },
  {
    number: "03",
    type: "Интернет-магазин",
    title: "От каталога",
    accent: "до заказа.",
    description:
      "Небольшой интернет-магазин с каталогом, карточками товаров, корзиной и удобным оформлением заказа.",
    tags: ["E-commerce", "Каталог", "Корзина"],
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#c7ff3d]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Наш подход
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-[9rem]"
            >
              КЕЙСЫ
              <span className="text-white/20">.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-sm text-sm leading-6 text-white/40 sm:text-base"
          >
            Каждый сайт начинаем не с шаблона, а с задачи бизнеса.
            Структура, дизайн и разработка работают на одну цель —
            сделать сайт полезным для клиента.
          </motion.p>
        </div>

        {/* CASES */}
        <div className="border-t border-white/10">
          {cases.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative border-b border-white/10"
            >
              <SpotlightCard className="relative">
                <div className="relative grid gap-8 py-12 sm:py-16 lg:grid-cols-[90px_1fr_320px] lg:items-center lg:gap-12 lg:py-20">
                  {/* NUMBER */}
                  <motion.div
                    className="text-sm font-bold text-white/25 transition-colors duration-500 group-hover:text-[#c7ff3d]"
                    whileHover={{ x: 4 }}
                  >
                    {item.number}
                  </motion.div>

                  {/* MAIN CONTENT */}
                  <div>
                    <div className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#c7ff3d]">
                      {item.type}
                    </div>

                    <h3 className="text-4xl font-black leading-[0.95] tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl lg:text-7xl">
                      {item.title}
                      <br />

                      <span className="text-white/25 transition-colors duration-500 group-hover:text-[#c7ff3d]">
                        {item.accent}
                      </span>
                    </h3>

                    {/* TAGS */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DESCRIPTION + ARROW */}
                  <div className="flex items-end justify-between gap-6 lg:block">
                    <p className="max-w-sm text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/55">
                      {item.description}
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="mt-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#c7ff3d] group-hover:bg-[#c7ff3d]"
                    >
                      <span className="text-xl text-white/50 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black">
                        →
                      </span>
                    </motion.div>
                  </div>
                </div>
              </SpotlightCard>

              {/* HOVER LINE */}
              <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-px w-0 bg-[#c7ff3d] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 text-xs uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Проектируем → Разрабатываем → Запускаем</span>

          <span>ContentLab © 2026</span>
        </motion.div>
      </div>
    </section>
  );
}