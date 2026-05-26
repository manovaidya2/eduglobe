import React from "react";
import {
  UserPlus,
  BookOpen,
  ClipboardCheck,
  Wrench,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

export default function TrainingCertificationSection() {
  const steps = [
    { icon: UserPlus, label: "Registration" },
    { icon: BookOpen, label: "Training" },
    { icon: ClipboardCheck, label: "Assessment" },
    { icon: Wrench, label: "Trade Test" },
    { icon: Award, label: "Certification" },
    { icon: Users, label: "Membership" },
    { icon: Briefcase, label: "Employment" },
  ];

  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="mx-auto max-w-[1350px] px-3">

        {/* Heading */}
        <div className="text-center">

          <h2 className="font-serif text-[24px] md:text-[38px] font-bold text-[#1f2933] leading-tight">
            Training & Certification Ecosystem
          </h2>

          <p className="mt-2 text-[13px] md:text-[17px] text-[#66737f]">
            A connected pathway from learning to international employment.
          </p>

          <div className="mx-auto mt-4 h-[3px] w-[55px] rounded-full bg-[#d99b12]" />

        </div>

        {/* Workflow */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="flex flex-col items-center text-center"
              >

                <div className="relative">

                  {/* Circle */}
                  <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#dc3b3b] text-white shadow-[0_0_0_5px_#fde9e9]">

                    <Icon
                      className="h-[22px] w-[22px]"
                      strokeWidth={2.2}
                    />

                  </div>

                  {/* Number Badge */}
                  <span className="absolute -right-1 -top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#e4a913] text-[10px] font-bold text-white">
                    {index + 1}
                  </span>

                </div>

                {/* Label */}
                <h3 className="mt-3 text-[13px] md:text-[15px] font-bold text-[#061321]">
                  {step.label}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}