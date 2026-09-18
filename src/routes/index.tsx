import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, ShieldCheck, BadgeCheck } from "lucide-react";
import logoAsset from "@/assets/logo-bullseye.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim Your $750 Gift Card — Fall Offer" },
      {
        name: "description",
        content:
          "Complete a few simple steps to claim your $750 reward before the fall offer ends.",
      },
    ],
  }),
  component: Index,
});

const AFFILIATE_URL =
  "https://trksy.org/aff_c?offer_id=1177&aff_id=162732&source=target";

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function MapleLeaf({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 112"
      className={`fall-leaf ${className ?? ""}`}
      style={style}
      aria-hidden="true"
    >
      {/* broad sycamore-style leaf: 5 scalloped lobes, gold-to-rust gradient */}
      <path
        fill="url(#fall-leaf-grad)"
        d="M50 2 C44 5 38 11 35 20 C31 22 27 20 21 13 C15 24 15 32 21 38 C19 44 13 48 5 51 C9 61 17 66 25 68 C23 74 19 78 12 83 C17 88 24 88 30 86 C36 84 42 80 46 75 L54 75 C58 80 64 84 70 86 C76 88 83 88 88 83 C81 78 77 74 75 68 C83 66 91 61 95 51 C87 48 81 44 79 38 C85 32 85 24 79 13 C73 20 69 22 65 20 C62 11 56 5 50 2 Z"
      />
      {/* veins */}
      <g stroke="rgba(124,45,18,0.45)" strokeWidth="1" fill="none">
        <path d="M50 73 L50 8" />
        <path d="M50 73 L23 17" />
        <path d="M50 73 L77 17" />
        <path d="M50 73 L10 50" />
        <path d="M50 73 L90 50" />
        <path d="M50 73 L17 81" />
        <path d="M50 73 L83 81" />
      </g>
      {/* stem */}
      <path
        fill="#9a3412"
        d="M49 74 L51.5 74 C51 88 47 99 41 109 L38.5 107.5 C44 98 48 87 49 74 Z"
      />
    </svg>
  );
}

function Index() {
  const time = useCountdown(15 * 60 - 11);
  const steps = [
    'Click on "Get Started"',
    "Enter your basic details",
    "Complete 8-10 tasks",
    "Claim your reward",
  ];

  return (
    <main className="fall-page relative min-h-screen overflow-hidden bg-harvest-cream flex items-center justify-center px-4 py-12">
      {/* shared gold-to-rust leaf gradient */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <radialGradient id="fall-leaf-grad" cx="50%" cy="55%" r="65%">
            <stop offset="0%" stopColor="#c2410c" />
            <stop offset="55%" stopColor="#ea7a1f" />
            <stop offset="100%" stopColor="#fbbf24" />
          </radialGradient>
        </defs>
      </svg>

      {/* drifting fall leaves */}
      <MapleLeaf className="opacity-60 text-3xl" style={{ left: "6%", animationDuration: "14s", animationDelay: "0s", rotate: "-18deg" }} />
      <MapleLeaf className="opacity-50 text-2xl" style={{ left: "16%", animationDuration: "18s", animationDelay: "4s", rotate: "22deg" }} />
      <MapleLeaf className="opacity-45 text-xl" style={{ left: "28%", animationDuration: "16s", animationDelay: "2s", rotate: "10deg" }} />
      <MapleLeaf className="opacity-50 text-lg" style={{ left: "38%", animationDuration: "21s", animationDelay: "8s", rotate: "-30deg" }} />
      <MapleLeaf className="opacity-55 text-2xl" style={{ left: "48%", animationDuration: "15s", animationDelay: "5s", rotate: "14deg" }} />
      <MapleLeaf className="opacity-40 text-xl" style={{ left: "58%", animationDuration: "19s", animationDelay: "11s", rotate: "-8deg" }} />
      <MapleLeaf className="opacity-50 text-2xl" style={{ left: "68%", animationDuration: "20s", animationDelay: "6s", rotate: "26deg" }} />
      <MapleLeaf className="opacity-40 text-lg" style={{ left: "77%", animationDuration: "17s", animationDelay: "1.5s", rotate: "-20deg" }} />
      <MapleLeaf className="opacity-55 text-3xl" style={{ left: "86%", animationDuration: "15s", animationDelay: "9s", rotate: "8deg" }} />
      <MapleLeaf className="opacity-45 text-xl" style={{ left: "94%", animationDuration: "22s", animationDelay: "13s", rotate: "-14deg" }} />

      <div className="relative w-full max-w-xl text-center rounded-[2.5rem] bg-white/90 backdrop-blur border border-harvest-line shadow-[0_25px_60px_-15px_rgba(154,52,18,0.25)] px-6 py-10 md:px-12">
        {/* brand mark */}
        <div className="mx-auto w-24 h-24 flex items-center justify-center">
          <img
            src={logoAsset.url}
            alt="Brand logo"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide">
          <BadgeCheck className="w-3.5 h-3.5" /> VERIFIED
        </div>

        <h1 className="mt-6 font-display text-5xl md:text-6xl font-extrabold text-harvest-ink leading-tight">
          Claim Your <span className="text-harvest">$750</span>
          <br />
          Gift Card
        </h1>

        <p className="mt-5 text-harvest-soft-ink text-base max-w-sm mx-auto">
          Complete a few simple steps to claim your reward this season.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-harvest text-white text-sm font-semibold shadow-[0_10px_25px_-8px_rgba(154,52,18,0.6)]">
          <Clock className="w-4 h-4 animate-pulse" /> Offer ends in {time}
        </div>

        <ul className="mt-8 space-y-4 text-left max-w-sm mx-auto">
          {steps.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-harvest-cream/70 border border-harvest-line/60 transition-colors hover:border-harvest/40"
            >
              <span className="w-7 h-7 rounded-full bg-harvest text-white flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </span>
              <span className="font-semibold text-harvest-ink">{s}</span>
            </li>
          ))}
        </ul>

        <a
          href={AFFILIATE_URL}
          className="group mt-10 w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-harvest to-harvest-deep hover:from-harvest-deep hover:to-harvest text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg shadow-harvest/30 transition-all hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide"
        >
          Get Started{" "}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>

        <p className="mt-4 text-sm text-harvest-soft-ink">
          <span className="text-harvest font-bold">1,289</span> claimed today
        </p>

        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-harvest-soft-ink/80">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% secure &amp; verified process
        </p>
      </div>
    </main>
  );
}
