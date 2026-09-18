import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, ShieldCheck, BadgeCheck } from "lucide-react";

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
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`fall-leaf ${className ?? ""}`}
      style={style}
      aria-hidden="true"
    >
      {/* maple leaf silhouette with stem */}
      <path d="M50 3 L57 19 L71 11 L65 28 L84 25 L71 40 L90 42 L73 53 L86 63 L66 61 L73 78 L57 67 L53 82 L50 72 L47 82 L43 67 L27 78 L34 61 L14 63 L27 53 L10 42 L29 40 L16 25 L35 28 L29 11 L43 19 Z" />
      <path d="M47 74 L53 74 L52 97 L48 97 Z" />
    </svg>
  );
}

function Index() {
  const time = useCountdown(15 * 60 - 11);
  const steps = [
    'Click on "Get Started"',
    "Enter your basic details",
    "Complete 3-5 deals",
    "Claim your reward",
  ];

  return (
    <main className="fall-page relative min-h-screen overflow-hidden bg-harvest-cream flex items-center justify-center px-4 py-12">
      {/* drifting fall leaves */}
      <MapleLeaf className="text-harvest/50 text-3xl" style={{ left: "6%", animationDuration: "14s", animationDelay: "0s", rotate: "-18deg" }} />
      <MapleLeaf className="text-harvest/40 text-2xl" style={{ left: "16%", animationDuration: "18s", animationDelay: "4s", rotate: "22deg" }} />
      <MapleLeaf className="text-harvest-deep/40 text-xl" style={{ left: "28%", animationDuration: "16s", animationDelay: "2s", rotate: "10deg" }} />
      <MapleLeaf className="text-harvest/45 text-lg" style={{ left: "38%", animationDuration: "21s", animationDelay: "8s", rotate: "-30deg" }} />
      <MapleLeaf className="text-harvest-deep/45 text-2xl" style={{ left: "48%", animationDuration: "15s", animationDelay: "5s", rotate: "14deg" }} />
      <MapleLeaf className="text-harvest/35 text-xl" style={{ left: "58%", animationDuration: "19s", animationDelay: "11s", rotate: "-8deg" }} />
      <MapleLeaf className="text-harvest/45 text-2xl" style={{ left: "68%", animationDuration: "20s", animationDelay: "6s", rotate: "26deg" }} />
      <MapleLeaf className="text-harvest-deep/35 text-lg" style={{ left: "77%", animationDuration: "17s", animationDelay: "1.5s", rotate: "-20deg" }} />
      <MapleLeaf className="text-harvest-deep/35 text-3xl" style={{ left: "86%", animationDuration: "15s", animationDelay: "9s", rotate: "8deg" }} />
      <MapleLeaf className="text-harvest/40 text-xl" style={{ left: "94%", animationDuration: "22s", animationDelay: "13s", rotate: "-14deg" }} />

      <div className="relative w-full max-w-xl text-center rounded-[2.5rem] bg-white/90 backdrop-blur border border-harvest-line shadow-[0_25px_60px_-15px_rgba(154,52,18,0.25)] px-6 py-10 md:px-12">
        {/* brand mark */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-harvest-soft flex items-center justify-center shadow-sm">
          <div className="w-12 h-12 rounded-full bg-harvest flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-harvest" />
            </div>
          </div>
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
