import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-6 text-white">
      <div className="text-center">
        <div className="mb-6 text-sm uppercase tracking-[0.3em] text-[#c7ff3d]">
          ContentLab
        </div>

        <h1 className="text-[clamp(100px,20vw,220px)] font-bold leading-none tracking-[-0.08em]">
          404
        </h1>

        <p className="mt-6 text-lg text-white/50">
          Такой страницы не существует.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#c7ff3d] px-7 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}