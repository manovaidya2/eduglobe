import { Link } from "react-router-dom";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Award,
  Building2,
  BookOpen,
  ClipboardCheck,
  Users,
  ArrowRight,
} from "lucide-react";

function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-[#07162d]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-[15px] max-w-3xl leading-7 ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-[#667085]"}`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mt-4 h-1 w-16 rounded-full bg-[#d9a300] ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

export default function WorkforcePlatform() {
  const workforceCards = [
    {
      icon: Globe,
      title: "Global Network",
      text: "Connecting students, professionals and institutions through an international workforce ecosystem.",
    },
    {
      icon: GraduationCap,
      title: "Skills & Training",
      text: "Industry-focused training, trade testing and practical skill development programs.",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      text: "Career guidance, workforce facilitation and global employment assistance.",
    },
    {
      icon: Award,
      title: "International Certification",
      text: "Council-based memberships and globally recognized certification pathways.",
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: "Career & Employment Consultancy",
      desc: "Personalised global career guidance and job-readiness support.",
      to: "/career-consultancy",
    },
    {
      icon: BookOpen,
      title: "Online Skill & Trade Training",
      desc: "Industry-aligned programs across trades, technology and leadership.",
      to: "/training-programs",
    },
    {
      icon: ClipboardCheck,
      title: "Trade Testing & Assessment",
      desc: "Levels 1–5 competency assessments under the IISD framework.",
      to: "/trade-testing",
    },
    {
      icon: Award,
      title: "International Certifications",
      desc: "Globally recognised, QR-verifiable digital credentials.",
      to: "/certifications",
    },
    {
      icon: Users,
      title: "Professional Membership",
      desc: "Six-tier international membership and recognition system.",
      to: "/membership",
    },
    {
      icon: Building2,
      title: "Institutional Solutions",
      desc: "Setup, management and growth services for institutions.",
      to: "/services",
    },
  ];

  return (
    <>
      {/* Workforce Section */}

      <section className="bg-white py-20 px-4">
        <div className=" mx-auto">

          <SectionHeading
            title="A Global Workforce Development Platform"
            subtitle="EduGlobe Services LLC provides career consultancy, workforce facilitation and global placement support — powered by IISD's international skill standards, trade testing, certification and membership council."
          />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {workforceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-[#ececec] shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#fff4d8] flex items-center justify-center mb-5">
                    <Icon
                      size={28}
                      className="text-[#e0a500]"
                    />
                  </div>

                  <h3 className="text-[20px] font-bold text-[#07162d] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[14px] leading-7 text-[#667085]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> */}

        </div>
      </section>

      {/* Services Overview */}

      <section className="bg-[#fafafa] py-20 px-4">
        <div className=" mx-auto">

          <SectionHeading
            title="Services Overview"
            subtitle="A complete ecosystem from career discovery to international employment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-[#e5e7eb] hover:shadow-lg hover:border-[#df1010]/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-lg bg-[#fff0f0] flex items-center justify-center mb-5 group-hover:bg-[#df1010] duration-300">

                    <Icon className="w-7 h-7 text-[#df1010] group-hover:text-white duration-300" />

                  </div>

                  <h3 className="text-[20px] font-bold text-[#07162d] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[14px] text-[#667085] leading-7 mb-5">
                    {service.desc}
                  </p>

                  <Link
                    to={service.to}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#df1010] hover:gap-2 duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}

          </div>

        </div>
      </section>
    </>
  );
}