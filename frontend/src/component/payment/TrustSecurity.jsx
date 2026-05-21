import React from "react";
import {
  Lock,
  ShieldCheck,
  Headphones,
  GraduationCap,
} from "lucide-react";

export default function TrustSecurity() {
  const items = [
    {
      icon: <Lock />,
      title: "Secure Payment Processing",
      desc: "Bank-grade encryption protects every transaction end-to-end.",
    },
    {
      icon: <ShieldCheck />,
      title: "Official EduGlobe Services LLC Portal",
      desc: "Authentic portal operated directly by EduGlobe Services.",
    },
    {
      icon: <Headphones />,
      title: "Student & Centre Support",
      desc: "Dedicated support team available for payment coordination.",
    },
    {
      icon: <GraduationCap />,
      title: "Professional Education & Consultancy",
      desc: "Trusted partner for education and consultancy services.",
    },
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1120px]">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-[#eef7f0] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#14743a]">
            Trust & Security
          </span>

          <h2 className="mt-4 font-serif text-[36px] font-bold leading-tight text-[#07162d]">
            Built on Trust, Secured by Design
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-[55px] rounded-full bg-[#d99a00]" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              group
              min-h-[210px]
              rounded-[10px]
              border
              border-[#dddddd]
              bg-white
              px-6
              py-6
              cursor-pointer
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#d99a00]
              hover:shadow-2xl
              "
            >
              {/* Icon */}
              <div
                className="
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-[8px]
                bg-[#fff6e8]
                text-[#e0a10b]
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-[#e0a10b]
                group-hover:text-white
                "
              >
                {React.cloneElement(item.icon, {
                  size: 22,
                  strokeWidth: 2,
                })}
              </div>

              {/* Title */}
              <h3
                className="
                mt-5
                font-serif
                text-[18px]
                font-bold
                leading-[1.5]
                text-[#061327]
                transition-all
                duration-300
                group-hover:text-[#d99a00]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                mt-3
                text-[14px]
                leading-[1.8]
                text-[#53687d]
                "
              >
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}