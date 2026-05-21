import React from "react";
import {
  Sparkles,
  Lock,
  ShieldCheck,
  BadgeCheck,
  Users,
  ArrowRight,
} from "lucide-react";

export default function PaymentHero() {
  return (
    <section className="relative min-h-[540px] w-full overflow-hidden bg-[#8f1518] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_55%,rgba(176,23,28,0.95)_0%,rgba(139,21,24,0.96)_42%,rgba(87,14,16,1)_100%)]" />

      {/* Dots */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div className="absolute right-0 top-0 h-full w-[35%] bg-[radial-gradient(circle_at_right,rgba(224,122,35,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1200px] flex-col items-center px-4 pt-10 text-center">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-[#f2b51c]" />
          Official Payment Portal
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-[1000px] font-serif text-[38px] font-bold leading-none sm:text-[55px] lg:text-[56px]">
          Official EduGlobe Payment Portal
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[800px] text-[16px] sm:text-[18px] leading-[1.6] text-white/90">
          Securely submit payments for professional education,
          certification, consultancy, testing and institutional
          services provided by EduGlobe Services LLC.
        </p>

        {/* Pills */}
        <div className="mt-8 flex max-w-[850px] flex-wrap justify-center gap-3">

          <InfoPill
            icon={<Lock />}
            text="Secure Payment"
          />

          <InfoPill
            icon={<ShieldCheck />}
            text="Official EduGlobe Portal"
          />

          <InfoPill
            icon={<BadgeCheck />}
            text="Trusted Professional Services"
          />

          <InfoPill
            icon={<Users />}
            text="Student & Centre Support"
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="#payment"
            className="inline-flex h-[52px] min-w-[240px] items-center justify-center gap-4 rounded-md bg-[#efb51c] px-6 text-[16px] font-semibold shadow-lg hover:scale-[1.02] duration-300"
          >
            Proceed to Payment
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#help"
            className="inline-flex h-[52px] min-w-[220px] items-center justify-center rounded-md border border-white/30 bg-transparent px-6 text-[16px] font-semibold hover:bg-white/10 duration-300"
          >
            Need Assistance?
          </a>

        </div>

      </div>
    </section>
  );
}

function InfoPill({ icon, text }) {
  return (
    <div className="inline-flex h-[40px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-[14px] font-medium backdrop-blur-sm">
      {React.cloneElement(icon, {
        className: "h-4 w-4 text-[#efb51c]",
      })}
      {text}
    </div>
  );
}