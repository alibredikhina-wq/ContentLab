"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const advantages = [
  {
    number: "01",
    title: "Не шаблон",
    description:
      "Не подгоняем бизнес под готовый шаблон. Сначала разбираемся в задаче, затем строим структуру и визуальную подачу.",
  },
  {
    number: "02",
    title: "Сначала смысл",
    description:
      "Каждый экран имеет свою задачу. Посетитель должен быстро понять, чем вы занимаетесь и что ему делать дальше.",
  },
  {
    number: "03",
    title: "Удобно везде",
    description:
      "Сайт адаптируется под смартфоны, планшеты и компьютеры. Интерфейс должен оставаться удобным на любом экране.",
  },
  {
    number: "04",
    title: "Можно развивать",
    description:
      "Запуск — не финальная точка. При необходимости добавляем новые страницы, функции, интеграции и развиваем сайт вместе с бизнесом.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
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
                Почему ContentLab
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-8xl lg:text-[8.5rem]"
            >
              НЕ ПРОСТО
              <br />
              <span className="text-white/25">САЙТ.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-sm text-sm leading-6 text-white/40 sm:text-base"
          >
            Хороший сайт — это не набор красивых экранов. Это инструмент,
            который помогает бизнесу понятно рассказывать о себе и получать
            нужное действие от посетителя.
          </motion.p>
        </div>

        {/* Преимущества */}
        <div className="mt-20 grid border-t border-white/10 md:grid-cols-2">
          {advantages.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`group relative border-b border-white/10 ${
                index % 2 === 0
                  ? "md:border-r md:pr-12"
                  : "md:pl-12"
              }`}
            >
              <SpotlightCard className="relative h-full">
                <div className="relative px-0 py-10 lg:py-14">
                  {/* Верхняя строка */}
                  <div className="flex items-center justify-between gap-8">
                    <motion.span
                      className="text-xs font-bold text-white/25 transition-colors duration-500 group-hover:text-[#c7ff3d]"
                      whileHover={{ x: 4 }}
                    >
                      {item.number}
                    </motion.span>

                    <motion.div
                      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#c7ff3d] group-hover:bg-[#c7ff3d]"
                      whileHover={{ rotate: 45, scale: 1.08 }}
                    >
                      <span className="text-sm text-white/30 transition-colors duration-500 group-hover:text-black">
                        ↗
                      </span>
                    </motion.div>
                  </div>

                  {/* Заголовок */}
                  <motion.h3
                    className="mt-10 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-5xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Описание */}
                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/60 sm:text-base">
                    {item.description}
                  </p>

                  {/* Нижний индикатор */}
                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-px w-8 bg-white/10 transition-all duration-700 group-hover:w-16 group-hover:bg-[#c7ff3d]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 transition-colors duration-500 group-hover:text-white/40">
                      ContentLab
                    </span>
                  </div>
                </div>
              </SpotlightCard>

              {/* Лаймовая линия при наведении */}
              <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-px w-0 bg-[#c7ff3d] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Нижний акцент */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-lg font-medium leading-7 tracking-tight text-white/70 sm:text-xl">
            Мы делаем сайты, которыми хочется пользоваться —
            и которые не стыдно показать клиентам.
          </p>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/25">
            ContentLab / Web development
          </span>
        </motion.div>
      </div>
    </section>
  );
}