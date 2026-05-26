import { useState } from "react";

const services = [
  "Institution Setup & Establishment",
  "Institutional Management",
  "Marketing & Business Development",
  "Curriculum & Skills Development",
  "Regulatory & Compliance Support",
  "Admissions Support",
  "Academic Support",
  "Skills Training",
  "Partnership Inquiry",
  "Other",
];

export default function JoinWorkforceSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      e.target.reset();

      alert(
        "Inquiry Submitted! We'll get back to you within 24 hours."
      );
    }, 1000);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className=" px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

          {/* Left Side */}
          <div className="max-w-[660px]">

            <h2 className="font-heading text-[38px] md:text-[46px] font-bold leading-[1.05] text-[#071426]">
              Ready to Join the Global Workforce Network?
            </h2>

            <p className="mt-6 text-[18px] leading-[1.8] text-[#64748b]">
              Whether you're a student, professional, employer or training
              partner — let's build your next step together.
            </p>

            <div className="mt-6 h-[4px] w-[72px] rounded-full bg-[#d99a00]" />

            <div className="mt-14 space-y-6">
              <p className="text-[17px] leading-[1.8] text-[#64748b]">
                Reach out for career consultation, training enrolment,
                trade test registration or membership applications.
              </p>

              <p className="text-[17px] text-[#64748b]">
                Our team responds within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Form */}
          <div className="rounded-[16px] border border-[#e5e5e5] bg-white p-8 md:p-10 shadow-sm">

            <h3 className="mb-7 font-heading text-[28px] font-bold text-[#071426]">
              Quick Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  className="h-[48px] rounded-md border border-[#ddd] px-4 outline-none focus:border-[#d4111a]"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="h-[48px] rounded-md border border-[#ddd] px-4 outline-none focus:border-[#d4111a]"
                />

                <input
                  type="text"
                  placeholder="Phone / WhatsApp"
                  className="h-[48px] rounded-md border border-[#ddd] px-4 outline-none focus:border-[#d4111a]"
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="h-[48px] rounded-md border border-[#ddd] px-4 outline-none focus:border-[#d4111a]"
                />

              </div>

              <select
                className="h-[48px] w-full rounded-md border border-[#ddd] px-4 outline-none focus:border-[#d4111a]"
              >
                <option>Interested Service</option>

                {services.map((service) => (
                  <option key={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-md border border-[#ddd] p-4 outline-none focus:border-[#d4111a]"
              />

              <button
                type="submit"
                disabled={loading}
                className="h-[56px] w-full rounded-md bg-[#d4111a] text-white font-semibold hover:bg-[#b20d14]"
              >
                {loading ? "Submitting..." : "Send Inquiry"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}