"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Обсуждаем задачу",
    description:
      "Созваниваемся или переписываемся, разбираемся в бизнесе, цели сайта и том, что должен делать посетитель.",
  },
  {
    number: "02",
    title: "Проектируем",
    description:
      "Продумываем структуру страниц, пользовательский сценарий и будущую логику сайта до начала разработки.",
  },
  {
    number: "03",
    title: "Дизайнируем",
    description:
      "Создаём визуальную концепцию и интерфейс. Показываем результат и согласовываем ключевые решения.",
  },
  {
    number: "04",
    title: "Разрабатываем",
    description:
      "Собираем сайт, адаптируем его под смартфоны и планшеты, подключаем необходимые формы и интеграции.",
  },
  {
    number: "05",
    title: "Запускаем",
    description:
      "Проверяем всё перед публикацией, переносим сайт на домен и остаёмся на связи после запуска.",
  },
];

export default function Process() {
  const processRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 65%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  return (
    <section
      id="process"
      ref={processRef}
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
                Как работаем
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-8xl lg:text-[8.5rem]"
            >
              ОТ ИДЕИ
              <br />
              <span className="text-white/25">ДО</span>{" "}
              <span className="text-[#c7ff3d]">ЗАПУСКА.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-sm text-sm leading-6 text-white/40 sm:text-base"
          >
            Не бросаем клиента один на один с разработкой. На каждом этапе
            понятно, что происходит и какой результат мы получаем.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Базовая линия */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 sm:left-[27px]" />

          {/* Прогресс линии */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="absolute left-[19px] top-0 h-full w-px origin-top bg-[#c7ff3d] sm:left-[27px]"
          />

          <div>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative grid gap-8 border-b border-white/10 py-12 pl-16 sm:py-16 sm:pl-20 lg:grid-cols-[100px_1fr_420px] lg:items-center lg:gap-12 lg:pl-24"
              >
                {/* Точка timeline */}
                <div className="absolute left-0 top-12 flex h-10 w-10 items-center justify-center sm:top-16 sm:h-14 sm:w-14">
                  <div className="absolute inset-0 rounded-full border border-white/10 bg-[#0a0a0a] transition-all duration-500 group-hover:border-[#c7ff3d]/50" />

                  <div className="relative h-2.5 w-2.5 rounded-full bg-white/20 transition-all duration-500 group-hover:h-3 group-hover:w-3 group-hover:bg-[#c7ff3d] group-hover:shadow-[0_0_20px_rgba(199,255,61,0.6)]" />
                </div>

                {/* Номер */}
                <div className="hidden text-sm font-bold text-white/20 transition-colors duration-500 group-hover:text-[#c7ff3d] lg:block">
                  {step.number}
                </div>

                {/* Контент */}
                <div>
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#c7ff3d] lg:hidden">
                    {step.number}
                  </div>

                  <h3 className="text-3xl font-black tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {step.title}
                  </h3>
                </div>

                {/* Описание */}
                <p className="max-w-md text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/60 sm:text-base">
                  {step.description}
                </p>

                {/* Hover линия */}
                <div className="pointer-events-none absolute bottom-[-1px] left-0 h-px w-0 bg-[#c7ff3d] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Нижняя подпись */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-col gap-3 text-xs uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Прозрачный процесс</span>
          <span>Без лишней бюрократии</span>
          <span>С понятным результатом</span>
        </motion.div>
      </div>
    </section>
  );
}