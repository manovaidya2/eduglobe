import { Link } from "react-router-dom";
import { CheckCircle, Award, ArrowRight } from "lucide-react";

const whyPoints = [
  "UAE-based international consultancy",
  "Integrated training, testing & certification",
  "Globally recognised IISD credentials",
  "End-to-end employment ease support",
  "Scalable workforce partnership models",
];

export default function WhyChooseEduGlobe() {
  return (
    <section className="bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto  px-15">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <div className="mb-10">
              <h2 className="font-heading text-[34px] md:text-[40px] font-bold leading-tight text-[#071426]">
                Why Choose EduGlobe
              </h2>
              <div className="mt-4 h-[4px] w-16 rounded-full bg-[#d99a00]" />
            </div>

            <ul className="space-y-5">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <CheckCircle className="h-[21px] w-[21px] shrink-0 text-[#147a52]" />
                  <span className="text-[16px] font-medium text-[#071426]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/why-eduglobe"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#d4111a] px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-[#b90f16]"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Card */}
          <div className="lg:pl-8">
            <div className="rounded-[16px] bg-[#fbf1dc] px-8 py-9 md:px-9 md:py-10">
              <Award className="mb-5 h-[62px] w-[62px] text-[#d99a00]" />

              <h3 className="font-heading text-[24px] md:text-[28px] font-bold leading-tight text-[#071426] mb-4">
                International Standards. UAE Roots.
              </h3>

              <p className="max-w-[640px] text-[16px] leading-[1.8] text-[#64748b]">
                With a UAE-based global outlook, EduGlobe and IISD combine local
                regulatory expertise with international competency frameworks to
                deliver sustainable workforce success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}  