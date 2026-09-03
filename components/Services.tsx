"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    number: "01",
    title: "Лендинги",
    description:
      "Одностраничные сайты, которые чётко презентуют продукт или услугу и ведут посетителя к заявке.",
    tags: ["Одностраничный сайт", "Продажи", "Запуск"],
  },
  {
    number: "02",
    title: "Сайты для бизнеса",
    description:
      "Современные корпоративные сайты и сайты услуг с продуманной структурой, дизайном и удобной навигацией.",
    tags: ["Корпоративный сайт", "Каталог", "Услуги"],
  },
  {
    number: "03",
    title: "Интернет-магазины",
    description:
      "Небольшие интернет-магазины с каталогом товаров, карточками, корзиной и удобным оформлением заказа.",
    tags: ["Каталог", "Корзина", "Заказы"],
  },
  {
    number: "04",
    title: "Доработка",
    description:
      "Исправляем, обновляем и развиваем существующие сайты: дизайн, функционал, страницы и интеграции.",
    tags: ["Редизайн", "Функционал", "Поддержка"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#c7ff3d]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
                Что мы делаем
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              САЙТ
              <br />
              <span className="text-white/30">ДОЛЖЕН</span>
              <br />
              <span className="text-[#c7ff3d]">РАБОТАТЬ.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-base leading-7 text-white/45 lg:pb-2 lg:text-lg"
          >
            Создаём сайты, которые выглядят современно,
            понятно рассказывают о бизнесе и помогают
            получать клиентов.
          </motion.p>
        </div>

        {/* SERVICES LIST */}
        <div className="mt-20 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group relative border-b border-white/10"
            >
              <SpotlightCard className="relative">
                <div className="grid gap-8 py-9 sm:py-12 lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:gap-12">
                  {/* NUMBER */}
                  <div className="text-sm font-medium text-white/25 transition-colors duration-300 group-hover:text-[#c7ff3d]">
                    {service.number}
                  </div>

                  {/* TITLE */}
                  <div className="relative">
                    <h3 className="text-4xl font-black tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl lg:text-6xl">
                      {service.title}
                    </h3>

                    {/* MOBILE TAGS */}
                    <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
                    <div>
                      <p className="max-w-md text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
                        {service.description}
                      </p>

                      {/* DESKTOP TAGS */}
                      <div className="mt-5 hidden flex-wrap gap-2 lg:flex">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/35 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ARROW */}
                    <div className="mt-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:border-[#c7ff3d] group-hover:bg-[#c7ff3d] group-hover:text-black lg:mt-0">
                      ↗
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              {/* HOVER LINE */}
              <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-px w-0 bg-[#c7ff3d] transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <p className="max-w-lg text-sm leading-6 text-white/25">
            Не нашли нужную услугу? Соберём решение под вашу
            конкретную задачу.
          </p>

          <a
            href="#contacts"
            className="group flex w-fit items-center gap-3 text-sm font-bold"
          >
            Обсудить задачу

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}