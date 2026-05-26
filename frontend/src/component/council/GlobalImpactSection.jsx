
import { Globe2, Award, Users, Building2 } from "lucide-react";

const stats = [
  { icon: Globe2, value: "45+", label: "Countries Reached" },
  { icon: Award, value: "12K+", label: "Certifications Issued" },
  { icon: Users, value: "30K+", label: "Members & Learners" },
  { icon: Building2, value: "180+", label: "Partner Institutions" },
];

const GlobalImpactSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#b41418] via-[#a91417] to-[#7e1213] py-16 md:py-20">
      <div className="mx-auto  px-4 ">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Global Impact
          </h2>

          <p className="text-base md:text-lg text-white/90">
            Building international workforce excellence at scale.
          </p>

          <div className="mx-auto mt-5 h-[4px] w-16 rounded-full bg-[#f5b400]" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-white/12 bg-white/6 px-6 py-7 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <Icon className="mx-auto mb-4 h-7 w-7 text-[#f5b400]" />

                <h3 className="font-heading text-4xl md:text-[42px] leading-none font-bold text-white mb-2">
                  {item.value}
                </h3>

                <p className="text-[11px] font-bold uppercase tracking-wide text-white/75">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;