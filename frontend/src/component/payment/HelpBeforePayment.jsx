import React from "react";
import { Headphones, MessageCircle } from "lucide-react";

export default function HelpBeforePayment() {
  return (
    <section className="bg-[#fafafa] px-4 py-10">
      <div className="mx-auto max-w-[1000px]">
        <div className="relative overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white px-6 py-14 text-center shadow-sm">

          {/* soft glow */}
          <div className="absolute right-0 top-0 h-[180px] w-[220px] rounded-full bg-[#fff0f0] blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 h-[150px] w-[180px] rounded-full bg-[#fff8df] blur-3xl opacity-60" />

          <div className="relative z-10">

            {/* Icon */}
            <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#fde5e5] text-[#df1010]">
              <Headphones size={28} strokeWidth={2} />
            </div>

            {/* Heading */}
            <h2 className="mt-7 font-serif text-[34px] font-bold leading-tight text-[#07162d]">
              Need Help Before Payment?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-[680px] text-[18px] leading-[1.7] text-[#5f6f7f]">
              Our support and coordination team is available to assist
              students and centres regarding payment and service
              coordination.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href="#contact"
                className="inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-[8px] bg-[#df1010] px-7 text-[17px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#c90d0d]"
              >
                <Headphones size={20} />
                Contact Support
              </a>

              <a
                href="https://wa.me/"
                className="inline-flex h-[58px] min-w-[240px] items-center justify-center gap-3 rounded-[8px] border border-[#14743a] bg-white px-7 text-[17px] font-semibold text-[#14743a] transition-all duration-300 hover:bg-[#14743a] hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp Support
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}