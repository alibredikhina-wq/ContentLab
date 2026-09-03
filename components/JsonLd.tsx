export default function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ContentLab",
    url: siteUrl,
    description:
      "Студия разработки сайтов для бизнеса. Лендинги, сайты компаний, небольшие интернет-магазины и доработка существующих сайтов.",
    areaServed: "RU",
    serviceType: [
      "Разработка сайтов",
      "Разработка лендингов",
      "Создание сайтов компаний",
      "Разработка интернет-магазинов",
      "Доработка существующих сайтов",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}