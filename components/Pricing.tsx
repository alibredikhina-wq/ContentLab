"use client";

import { motion } from "framer-motion";

const plans = [
  {
    number: "01",
    title: "Лендинг",
    price: "от 45 000 ₽",
    description:
      "Одностраничный сайт для продукта, услуги или рекламной кампании.",
    features: [
      "Структура и прототип",
      "Индивидуальный дизайн",
      "Адаптивная разработка",
      "Форма заявки",
      "Базовая SEO-настройка",
      "Публикация сайта",
    ],
  },
  {
    number: "02",
    title: "Сайт компании",
    price: "от 75 000 ₽",
    description:
      "Полноценный сайт для компании, услуг или бизнеса с несколькими направлениями.",
    features: [
      "Структура сайта",
      "Индивидуальный дизайн",
      "Несколько страниц",
      "Адаптивная разработка",
      "Формы и интеграции",
      "Базовая SEO-настройка",
      "Публикация сайта",
    ],
    featured: true,
  },
  {
    number: "03",
    title: "Интернет-магазин",
    price: "от 120 000 ₽",
    description:
      "Небольшой магазин с каталогом товаров и удобным оформлением заказа.",
    features: [
      "Каталог товаров",
      "Карточки товаров",
      "Корзина",
      "Оформление заказа",
      "Адаптивная разработка",
      "Базовые интеграции",
      "Публикация сайта",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
                Стоимость
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-8xl lg:text-[8.5rem]"
            >
              ПОНЯТНЫЕ
              <br />
              <span className="text-[#c7ff3d]">ЦЕНЫ.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-sm text-sm leading-6 text-white/40 sm:text-base"
          >
            Стоимость зависит от задачи, количества страниц и необходимого
            функционала. Поэтому указываем стартовую цену, а точную стоимость
            определяем после обсуждения проекта.
          </motion.p>
        </div>

        {/* Тарифы */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group relative flex flex-col bg-[#0a0a0a] p-7 sm:p-9 lg:p-10 ${
                plan.featured ? "lg:-my-0.5" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-[#c7ff3d] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-black">
                  Популярный
                </div>
              )}

              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-[#c7ff3d]">
                  {plan.number}
                </span>

                <span className="text-xs uppercase tracking-[0.15em] text-white/20">
                  ContentLab
                </span>
              </div>

              <h3 className="mt-16 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                {plan.title}
              </h3>

              <p className="mt-5 min-h-[72px] text-sm leading-6 text-white/40">
                {plan.description}
              </p>

              <div className="mt-8 border-y border-white/10 py-6">
                <div className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  {plan.price}
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/55"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7ff3d]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`mt-10 flex items-center justify-between rounded-full px-5 py-4 text-sm font-bold transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#c7ff3d] text-black hover:bg-white"
                    : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                }`}
              >
                Обсудить проект

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Доработка */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 flex flex-col gap-6 rounded-3xl border border-white/10 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#c7ff3d]">
              Дополнительно
            </div>

            <h3 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
              Доработка существующего сайта
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
              Новые страницы, изменение дизайна, исправление ошибок,
              дополнительный функционал и интеграции.
            </p>
          </div>

          <div className="shrink-0 text-2xl font-black tracking-[-0.04em]">
            от 3 000 ₽
          </div>
        </motion.div>
      </div>
    </section>
  );
}