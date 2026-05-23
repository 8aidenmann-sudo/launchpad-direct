import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, ShieldCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim Your $750 Gift Card" },
      { name: "description", content: "Complete a few simple steps to claim your $750 reward." },
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

function Index() {
  const time = useCountdown(15 * 60 - 11);
  const steps = [
    'Click on "Get Started"',
    "Enter your basic details",
    "Complete 3-5 deals",
    "Claim your reward",
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f8] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#cc0000] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#cc0000]" />
            </div>
          </div>
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-[#cc0000] text-xs font-bold tracking-wide">
          <BadgeCheck className="w-3.5 h-3.5" /> VERIFIED
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
          Claim Your <span className="text-[#cc0000]">$750</span>
          <br />
          Gift Card
        </h1>

        <p className="mt-5 text-neutral-500 text-base max-w-sm mx-auto">
          Complete a few simple steps to claim your reward.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cc0000] text-white text-sm font-semibold shadow-md">
          <Clock className="w-4 h-4" /> Offer ends in {time}
        </div>

        <ul className="mt-8 space-y-4 text-left max-w-sm mx-auto">
          {steps.map((s, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full border-2 border-[#cc0000] text-[#cc0000] flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </span>
              <span className="font-semibold text-neutral-900">{s}</span>
            </li>
          ))}
        </ul>

        <a
          href={AFFILIATE_URL}
          className="mt-10 w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#b30000] text-white font-semibold py-4 px-6 rounded-full shadow-[0_10px_30px_-5px_rgba(204,0,0,0.5)] transition-colors"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </a>

        <p className="mt-4 text-sm text-neutral-600">
          <span className="text-[#cc0000] font-bold">1,289</span> claimed today
        </p>

        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-neutral-500">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% secure & verified process
        </p>
      </div>
    </main>
  );
}
