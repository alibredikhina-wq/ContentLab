"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const projectTypes = [
  "Лендинг",
  "Сайт компании",
  "Интернет-магазин",
  "Доработка сайта",
  "Пока не определился",
];

const budgets = [
  "до 50 000 ₽",
  "50 000 — 100 000 ₽",
  "100 000 — 150 000 ₽",
  "150 000 ₽ и выше",
  "Нужна консультация",
];

export default function Contact() {
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !contact) {
      setIsSubmitting(false);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          projectType,
          budget,
          message,
        }),
      });

      const text = await response.text();

      let result: {
        success?: boolean;
        message?: string;
        error?: string;
      } = {};

      if (text) {
        try {
          result = JSON.parse(text);
        } catch {
          console.error("Invalid API response:", text);
        }
      }

      console.log("CONTACT RESPONSE:", {
        status: response.status,
        ok: response.ok,
        result,
      });

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ||
            result.error ||
            `Ошибка сервера: ${response.status}`
        );
      }

      setStatus("success");
      form.reset();
      setProjectType("");
      setBudget("");
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contacts"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] py-28 sm:py-36"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7ff3d]/5 blur-[140px] sm:h-[700px] sm:w-[700px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_520px] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-[#c7ff3d]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Обсудим проект
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black leading-[0.86] tracking-[-0.065em] sm:text-8xl lg:text-[8rem]"
            >
              ЕСТЬ
              <br />
              <span className="text-[#c7ff3d]">ИДЕЯ?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-8 max-w-lg text-base leading-7 text-white/40 sm:text-lg"
            >
              Расскажите, какой сайт вам нужен. Зададим несколько вопросов,
              оценим задачу и предложим оптимальный вариант разработки.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-12 grid max-w-lg grid-cols-2 border-t border-white/10"
            >
              <div className="border-r border-white/10 py-6 pr-6">
                <div className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Формат
                </div>

                <div className="mt-2 text-sm font-medium text-white/60">
                  Онлайн
                </div>
              </div>

              <div className="py-6 pl-6">
                <div className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Ответ
                </div>

                <div className="mt-2 text-sm font-medium text-white/60">
                  Обсудим задачу
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-8"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-white/25">
                ContentLab
              </div>

              <div className="mt-2 text-sm text-white/50">
                Web development studio
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c7ff3d]/60 to-transparent" />

            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
                Заявка
              </span>

              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff3d]" />
                Онлайн
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-white/35">
                  Как вас зовут?
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя"
                  className="w-full border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-[#c7ff3d]"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-white/35">
                  Как с вами связаться?
                </label>

                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Телефон, Telegram или WhatsApp"
                  className="w-full border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-[#c7ff3d]"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-white/35">
                  Что нужно сделать?
                </label>

                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const active = projectType === type;

                    return (
                      <motion.button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        whileTap={{ scale: 0.96 }}
                        className={`rounded-full border px-4 py-2.5 text-xs transition-all duration-300 ${
                          active
                            ? "border-[#c7ff3d] bg-[#c7ff3d] text-black shadow-[0_0_20px_rgba(199,255,61,0.12)]"
                            : "border-white/10 bg-white/[0.02] text-white/45 hover:border-white/25 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {type}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-white/35">
                  Ориентировочный бюджет
                </label>

                <div className="flex flex-wrap gap-2">
                  {budgets.map((item) => {
                    const active = budget === item;

                    return (
                      <motion.button
                        key={item}
                        type="button"
                        onClick={() => setBudget(item)}
                        whileTap={{ scale: 0.96 }}
                        className={`rounded-full border px-4 py-2.5 text-xs transition-all duration-300 ${
                          active
                            ? "border-[#c7ff3d] bg-[#c7ff3d] text-black shadow-[0_0_20px_rgba(199,255,61,0.12)]"
                            : "border-white/10 bg-white/[0.02] text-white/45 hover:border-white/25 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-white/35">
                  Расскажите о проекте
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Что продаёте, чем занимаетесь, какой сайт нужен..."
                  className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-[#c7ff3d]"
                />
              </div>

              {(projectType || budget) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                    Вы выбрали
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projectType && (
                      <span className="rounded-full border border-[#c7ff3d]/30 bg-[#c7ff3d]/5 px-3 py-1.5 text-xs text-[#c7ff3d]">
                        {projectType}
                      </span>
                    )}

                    {budget && (
                      <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                        {budget}
                      </span>
                    )}
                  </div>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-[#c7ff3d]/30 bg-[#c7ff3d]/5 p-4 text-sm text-[#c7ff3d]"
                >
                  Заявка отправлена. Мы свяжемся с вами для обсуждения проекта.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300"
                >
                  Не удалось отправить заявку. Проверьте заполнение полей и
                  попробуйте ещё раз.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className={`group flex w-full items-center justify-between rounded-full px-6 py-4 text-sm font-bold text-black transition-all duration-300 ${
                  isSubmitting
                    ? "cursor-wait bg-white/50"
                    : "bg-[#c7ff3d] hover:bg-white"
                }`}
              >
                <span>
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                  {isSubmitting ? "…" : "→"}
                </span>
              </motion.button>

              <p className="text-center text-[11px] leading-5 text-white/20">
                Нажимая кнопку, вы соглашаетесь на обработку персональных
                данных.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}