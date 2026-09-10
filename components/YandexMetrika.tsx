"use client";

import Script from "next/script";

export default function YandexMetrika() {
  return (
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
      src="https://mc.yandex.ru/metrika/tag.js?id=112462927"
      onLoad={() => {
        const w = window as typeof window & {
          ym?: (...args: unknown[]) => void;
        };

        w.ym =
          w.ym ||
          function (...args: unknown[]) {
            const fn = w.ym as typeof w.ym & { a?: unknown[] };
            fn.a = fn.a || [];
            fn.a.push(args);
          };

        w.ym(112462927, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: false,
          ecommerce: "dataLayer",
        });
      }}
    />
  );
}