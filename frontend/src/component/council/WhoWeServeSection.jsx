import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  "Students & Professionals",
  "Skilled Workforce",
  "Training Institutes",
  "Universities & Colleges",
  "Employers & Industry",
];

export default function WhoWeServeSection() {
  return (
    <section className="bg-[#fafafa] py-14 md:py-16">
      <div className="mx-auto  px-20">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="font-heading text-[32px] md:text-[38px] font-bold text-[#071426]">
            Who We Serve
          </h2>

          <div className="mx-auto mt-4 h-[4px] w-14 rounded-full bg-[#d99a00]" />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
              }}
              className="flex min-h-[56px] items-center gap-3 rounded-lg border border-[#dddddd] bg-white px-7 py-4 hover:shadow-sm transition"
            >
              <Globe className="h-[18px] w-[18px] text-[#d99a00]" />

              <span className="text-[15px] font-semibold text-[#071426] whitespace-nowrap">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}